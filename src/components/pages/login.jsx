import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios';
import Breadcrumb from "../common/breadcrumb";
import SweetAlert from 'react-bootstrap-sweetalert';
import {apiUrl} from '../../constants/static.js'
import GoogleLogin from 'react-google-login';
import {login} from '../../actions'


class Login extends Component {

    constructor (props) {
        super (props)
        this.state = {
            fields: {},
            errors: {},
            alert:''
        }
    }

    handleValidation = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if(!fields["password"]){
            formIsValid = false;
            errors["password"] = "Passowrd Cannot be blank";
        }
        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Email Cannot be blank";
        }

        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
        }  

       this.setState({errors: errors});
       return formIsValid;
   }

   formSubmit = (e) => {
        e.preventDefault();
        if(this.handleValidation()){
           axios.post(apiUrl +`/auth/login`, this.state.fields)
                .then(res => {
                    let alert = 
                    <SweetAlert
                        success
                        confirmBtnBsStyle="success"
                        title=""
                        onConfirm={() => this.toDashboard()}
                    >
                        Logged in Successfully
                    </SweetAlert>
                    this.setState({alert:alert})
                    this.props.login(res.data.user)
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                    console.log(res)
                }).catch(error => {
                    let alert = 
                    <SweetAlert
                        error
                        confirmBtnBsStyle="error"
                        title=""
                        onConfirm={() => this.hideAlert()}
                    >
                        {error.response.data.msg}
                    </SweetAlert>
                    this.setState({alert:alert})
                });
        }

    }

    toDashboard = () => {
        
        this.props.history.push('/pages/dashboard')
        this.hideAlert();
    }

    hideAlert = () => {
        this.setState({alert:''})
    }

    handleChange = (e, field) => {         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }

    render (){

        const responseGoogle = (response) => {
            console.log(response);
            var res = response.profileObj;
            console.log(res);
        }

        return (
            <div>
                <Breadcrumb title={'Login'}/>
                
                {this.state.alert}
                {/*Login section*/}
                <section className="login-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Login</h3>
                                <div className="theme-card">
                                    <form className="theme-form" onSubmit= {this.formSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="email" placeholder="Email"
                                                   required=""  onChange={(e) => this.handleChange(e, "email")}/>
                                            <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="review">Password</label>
                                            <input type="password" className="form-control" id="review"
                                                   placeholder="Enter your password" required=""  onChange={(e) => this.handleChange(e, "password")}/>
                                            <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                                        </div>
                                        <button type="submit" className="btn btn-solid">Login</button>
                                        <GoogleLogin
                                            clientId="227300391617-5pgbpptmmk7vvn63af4ok6ankjq43ra9.apps.googleusercontent.com"
                                            buttonText="Login"
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
                                            cookiePolicy={'single_host_origin'}
                                        />
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 right-login">
                                <h3>New Customer</h3>
                                <div className="theme-card authentication-right">
                                    <h6 className="title-font">Create A Account</h6>
                                    <p>Sign up for a free account at our store. Registration is quick and easy. It
                                        allows you to be able to order from our shop. To start shopping click
                                        register.</p>
                                    <Link to={`${process.env.PUBLIC_URL}/pages/register`} className="btn btn-solid">
                                        {'Create an account'}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

// const mapStateToProps = (state) => ({
//     products: state.user,
//     symbol: state.data.symbol,
// })

const mapDispatchToProps = (state) => ({
    
})

export default connect(
    null, {login}
)(Login)