import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { compose } from 'redux'
import {logout} from '../../../../actions'

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navClose: { right: '0px' },
            update:false
        }
    }

    componentWillMount() {
        if (window.innerWidth < 750) {
            this.setState({ navClose: { right: '-410px' } })
        }
        if (window.innerWidth < 1199) {
            this.setState({ navClose: { right: '-300px' } })
        }
    }

    openNav() {
        console.log('open')
        this.setState({ navClose: { right: '0px' } })
    }
    closeNav() {
        this.setState({ navClose: { right: '-410px' } })
    }

    onMouseEnterHandler() {
        if (window.innerWidth > 1199) {
            document.querySelector("#main-menu").classList.add("hover-unset");
        }
    }

    handleSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensubmenu'))
            event.target.nextElementSibling.classList.remove('opensubmenu')
        else{
            document.querySelectorAll('.nav-submenu').forEach(function (value) {
                value.classList.remove('opensubmenu');
            });
            document.querySelector('.mega-menu-container').classList.remove('opensubmenu')
            event.target.nextElementSibling.classList.add('opensubmenu')
        }
    }

    handleMegaSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;
            
        if(event.target.parentNode.nextElementSibling.classList.contains('opensubmegamenu'))
            event.target.parentNode.nextElementSibling.classList.remove('opensubmegamenu')
        else{
            document.querySelectorAll('.menu-content').forEach(function (value) {
                value.classList.remove('opensubmegamenu');
            });
            event.target.parentNode.nextElementSibling.classList.add('opensubmegamenu')
        }
    }

    logout = () => {
        this.props.logout()
        this.setState({update:true})
        localStorage.removeItem('user');
        this.props.history.push('/pages/login')
        
    }

    render() {
        const users = (this.props.user)
        const { translate } = this.props;
        return (
            <div>
                <div className="main-navbar">
                    <div id="mainnav" >
                        <div className="toggle-nav" onClick={this.openNav.bind(this)} >
                            <i className="fa fa-bars sidebar-bar"></i>
                        </div>
                        <ul className="nav-menu" style={this.state.navClose}>
                            <li className="back-btn" onClick={this.closeNav.bind(this)} >
                                <div className="mobile-back text-right">
                                    <span >Back</span>
                                    <i className="fa fa-angle-right pl-2" aria-hidden="true"></i>
                                </div>
                            </li>
                            <li>
                                <Link to={`${process.env.PUBLIC_URL}/services`} className="nav-link">
                                    {'Services'}
                                </Link>
                            </li>
                            <li>
                                <Link to={`${process.env.PUBLIC_URL}/pages/contact`} className="nav-link">
                                    {'Contact Us'}
                                </Link>
                            </li>
                            {Object.keys(users).length!==0?(
                                <>
                                <li>
                                    <Link to={`${process.env.PUBLIC_URL}/pages/dashboard`} className="nav-link">
                                        {'My Account'}
                                    </Link>
                                </li>
                                <li>
                                    <button type="button" className="btn btn-solid" onClick={this.logout}>Logout</button>
                                </li>
                                </>
                                ):
                                (
                                <>
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/pages/login`} className="nav-link">
                                            {'Login'}
                                        </Link>
                                    </li>
                                    <li>
                                        
                                        <Link to={`${process.env.PUBLIC_URL}/pages/providerlogin`} className="nav-link">
                                            <button type="button" className="btn btn-solid">Join as a professional</button>
                                        </Link>
                                    </li>
                                </>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
})

export default compose(withRouter, connect(
    mapStateToProps , {logout}
)) (NavBar)
// export default withRouter(NavBar);