import React, { Component } from 'react'
import AboutImg from "../../src/assets/bg/about.svg"

export class About extends Component {

    render() {
        return (
            <div className="About row">
                <div className="container text-light col-sm-6 p-5">
                    <p className="lead">Hi I'm</p>
                    <h1 className="display-4 title">
                    Kiran Puli
                    </h1>
                    <p className="lead">Web and software developer.</p>
                </div>
                <div className="container col-sm-6 mr-auto">
                    <img src={AboutImg} alt='Developer' className="rounded"/>
                </div>
            </div>
        )
    }
}

export default About
