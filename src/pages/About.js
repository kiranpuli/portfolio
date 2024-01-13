import React, { Component, useEffect } from 'react'
import AboutImg from "../assets/bg/about_lottie.json"
import lottie from "lottie-web";
import Typewriter from 'typewriter-effect';

function About() {
    useEffect(() => {
        lottie.loadAnimation({
            animationData: AboutImg,
            container: document.querySelector("#dev"),
            renderer: "svg", 
            loop: true,
            autoplay: true, 
        });
    }, []);
    return (
    <div className="About row">
                <div className="container text-light col-sm-6 p-5">
                    <p className="lead">Hi I'm</p>
                    <h1 className="display-4 title">
                    Kiran Puli
                    </h1>
                    <p className="lead">
                        <Typewriter
                            options={{
                                strings:["Web dev", "Software dev", "Like to build cool stuff..."],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        
                    </p>
                </div>
                <div className="container col-sm-6 mr-auto">
                    <div id="dev" />
                </div>
            </div>
  )
}

export default About