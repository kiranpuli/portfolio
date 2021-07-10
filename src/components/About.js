import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Lottie from "react-lottie";
import lotti from "../assets/bg/lotti.json"

export class About extends Component {

    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: lotti,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          };
        return (
            <div className="About row">
                <div className="container text-light col-sm-6 p-5">
                    <p className="lead">Hi I'm</p>
                    <h1 className="display-4 title">
                    <Fade bottom>Kiran Puli</Fade>
                    </h1>
                    <p className="lead">Web and software developer.</p>
                </div>
                <div className="container col-sm-6 mr-auto">
                    <Lottie options={defaultOptions} />
                </div>
            </div>
        )
    }
}

export default About
