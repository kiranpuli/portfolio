import React, { Component } from 'react'
import {
  NavLink
} from "react-router-dom";

import logo from "../assets/general/profile.png"

export class Nav extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <NavLink activeClassName="active" className="nav-link "to="/about">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top logo " data-toggle="tooltip" data-placement="right" title="Kiran Puli" alt="profile"/>
                    
                </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink activeClassName="active" className="nav-link "to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" className="nav-link "to="/experience">Experience</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" className="nav-link "to="/mywork">My Work</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" className="nav-link "to="/contact">Contact</NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink activeClassName="active" className="nav-link "to="/admin">Admin</NavLink>
                </li> */}
                </ul>
            </div>
            </nav>
        )
    }
}

export default Nav



