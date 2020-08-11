import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'

const PrivateRoute = (props) => (
    <Fragment>
        { localStorage.getItem("user") ? props.children : <Redirect to={`${process.env.PUBLIC_URL}/pages/login`} /> }
    </Fragment>
)
export default PrivateRoute;
