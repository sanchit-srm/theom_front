import React, {Component} from 'react';
import axios from 'axios';
import Breadcrumb from "../common/breadcrumb";
import SweetAlert from 'react-bootstrap-sweetalert';
import {apiUrl} from '../../constants/static.js'


class Register extends Component {

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

        if(!fields["fname"]){
           formIsValid = false;
           errors["fname"] = "First name Cannot be blank";
        }
        if(!fields["lname"]){
            formIsValid = false;
            errors["lname"] = "Last name Cannot be blank";
        }
        if(!fields["phone"]){
            formIsValid = false;
            errors["phone"] = "Phone Cannot be blank";
        }
        if(!fields["address"]){
            formIsValid = false;
            errors["address"] = "Address Cannot be blank";
        }
        if(!fields["postcode"]){
            formIsValid = false;
            errors["postcode"] = "Postcode Cannot be blank";
        }
        if(!fields["password"]){
            formIsValid = false;
            errors["password"] = "Passowrd Cannot be blank";
        }

        if(fields["password"]!==fields["confirm_password"]){
            formIsValid = false;
            errors["confirm_password"] = "Password not match";
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
            let fields = this.state.fields
            fields.type = "user";
           axios.post(apiUrl +`/auth/register`, this.state.fields)
                .then(res => {
                    let alert = 
                    <SweetAlert
                        success
                        confirmBtnBsStyle="success"
                        title=""
                        onConfirm={() => this.toLogin()}
                    >
                        User registered Successfully
                    </SweetAlert>
                    this.setState({alert:alert})
                }).catch(error => {
                    console.log(error)
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

    toLogin = () => {
        this.props.history.push('/pages/login')
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


        return (
            <div>
                <Breadcrumb title={'create account'}/>
                
                {this.state.alert}
                {/*Regsiter section*/}
                <section className="register-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3>create account</h3>
                                <div className="theme-card">
                                    <form className="theme-form" onSubmit= {this.formSubmit}>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">First Name</label>
                                                <input type="text" className="form-control" id="fname"
                                                       placeholder="First Name" required="" onChange={(e) => this.handleChange(e, "fname")}/>
                                                <span style={{color: "red"}}>{this.state.errors["fname"]}</span>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="review">Last Name</label>
                                                <input type="text" className="form-control" id="lname"
                                                       placeholder="Last Name" required="" onChange={(e) => this.handleChange(e, "lname")}/>
                                                <span style={{color: "red"}}>{this.state.errors["lname"]}</span>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">email</label>
                                                <input type="text" className="form-control" id="email"
                                                       placeholder="Email" required="" onChange={(e) => this.handleChange(e, "email")}/>
                                                <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="phone">Phone no.</label>
                                                <input type="text" className="form-control" id="phone"
                                                       placeholder="Phone no." required="" onChange={(e) => this.handleChange(e, "phone")}/>
                                                <span style={{color: "red"}}>{this.state.errors["phone"]}</span>       
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="address">address</label>
                                                <input type="text" className="form-control" id="address"
                                                       placeholder="Address" required="" onChange={(e) => this.handleChange(e, "address")}/>
                                                <span style={{color: "red"}}>{this.state.errors["address"]}</span>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="postcode">PostCode</label>
                                                <input type="text" className="form-control" id="postcode"
                                                       placeholder="Postcode" required="" onChange={(e) => this.handleChange(e, "postcode")}/>
                                                <span style={{color: "red"}}>{this.state.errors["postcode"]}</span>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-md-6">
                                                <label htmlFor="password">Password</label>
                                                <input type="password" className="form-control" id="password"
                                                       placeholder="Enter your password" required="" onChange={(e) => this.handleChange(e, "password")}/>
                                                <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="confirm_password">Confirm Password</label>
                                                <input type="password" className="form-control" id="confirm_password"
                                                       placeholder="Enter your confirm password" required="" onChange={(e) => this.handleChange(e, "confirm_password")}/>
                                                <span style={{color: "red"}}>{this.state.errors["confirm_password"]}</span>
                                            </div>
                                            <button type="submit" className="btn btn-solid">create Account</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Register