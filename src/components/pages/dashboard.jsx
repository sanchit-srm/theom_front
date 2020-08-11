import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";
import { connect } from 'react-redux'
import { compose } from 'redux'

import {Link, BrowserRouter, Route, withRouter} from 'react-router-dom';
import Mydashboard from './customer/mydashboard';
import Editprofile from './customer/editprofile'
class Dashboard extends Component {

    constructor (props) {
        super (props)
    }

    render (){
        const users = (this.props.user.user)
        console.log(users)
        return (
            <div>
                <Breadcrumb title={'Dashboard'}/>
                
                
                {/*Dashboard section*/}
                <section className="section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="account-sidebar">
                                    <a className="popup-btn">
                                        my account
                                    </a>
                                </div>
                                <div className="dashboard-left">
                                    <div className="collection-mobile-back">
                                    <span className="filter-back">
                                        <i className="fa fa-angle-left" aria-hidden="true"></i> back
                                    </span>
                                    </div>
                                    <div className="block-content">
                                        
                                            {users.type==="seller"?(
                                                <ul>
                                                <li>
                                                    <Link to={`${process.env.PUBLIC_URL}/pages/dashboard`} className="nav-link">
                                                        {'Dashboard'}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={`${process.env.PUBLIC_URL}/pages/dashboard/editprofile`} className="nav-link">
                                                        {'Edit Profile'}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={`${process.env.PUBLIC_URL}/pages/dashboard/services`} className="nav-link">
                                                        {'My Services'}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={`${process.env.PUBLIC_URL}/pages/dashboard/addservice`} className="nav-link">
                                                        {'Add new service'}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={`${process.env.PUBLIC_URL}/pages/dashboard/orders`} className="nav-link">
                                                        {'Orders'}
                                                    </Link>
                                                </li>
                                            </ul>
                                            ):(
                                                <ul>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/pages/dashboard`} className="nav-link">
                                                            {'Dashboard'}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/pages/dashboard/editprofile`} className="nav-link">
                                                            {'Edit Profile'}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/pages/dashboard/address`} className="nav-link">
                                                            {'My Address'}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`${process.env.PUBLIC_URL}/pages/dashboard/orders`} className="nav-link">
                                                            {'My Orders'}
                                                        </Link>
                                                    </li>
                                                </ul>
                                            )}
                                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="dashboard-right">
                                    <Route path={this.props.match.path} exact component={Mydashboard}/>
                                    <Route path={`${this.props.match.path}/editprofile`} component={Editprofile}/>
                                    {/* <div className="dashboard">
                                        <div className="page-title">
                                            <h2>My Dashboard</h2>
                                        </div>
                                        <div className="welcome-msg">
                                            <p>Hello, MARK JECNO !</p>
                                            <p>From your My Account Dashboard you have the ability to view a snapshot of
                                                your recent account activity and update your account information. Select
                                                a link below to view or edit information.</p>
                                        </div>
                                        <div className="box-account box-info">
                                            <div className="box-head">
                                                <h2>Account Information</h2>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="box">
                                                        <div className="box-title">
                                                            <h3>Contact Information</h3>
                                                            <a href="#">Edit</a>
                                                        </div>
                                                        <div className="box-content">
                                                            <h6>MARK JECNO</h6>
                                                            <h6>MARk-JECNO@gmail.com</h6>
                                                            <h6><a href="#">Change Password</a></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="box">
                                                        <div className="box-title">
                                                            <h3>Newsletters</h3>
                                                            <a href="#">Edit</a>
                                                        </div>
                                                        <div className="box-content">
                                                            <p>
                                                                You are currently not subscribed to any newsletter.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="box">
                                                    <div className="box-title">
                                                        <h3>Address Book</h3>
                                                        <a href="#">Manage Addresses</a>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <h6>Default Billing Address</h6>
                                                            <address>
                                                                You have not set a default billing address.<br/>
                                                                <a href="#">Edit Address</a>
                                                            </address>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <h6>Default Shipping Address</h6>
                                                            <address>
                                                                You have not set a default shipping address.<br />
                                                                <a href="#">Edit Address</a>
                                                            </address>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
})

export default compose(withRouter, connect(
    mapStateToProps , null
)) (Dashboard)