import React, { Component } from 'react'

import AdminHome from "./AdminHome"
import AdminLogin from "./AdminLogin"

export class Admin extends Component {
    constructor(props){
        super(props)
        this.state={
            auth:false
        }
    }
    render() {
		return (this.state.auth?(<AdminHome/> ):(<AdminLogin/> ))
    }
}

export default Admin


