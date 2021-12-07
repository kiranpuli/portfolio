import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import { socialLinks } from '../data'

export class Contact extends Component {
    render() {
        return (
            <div className="Contact container">
                <div className="links text-light text-center">
                    <h1 className="mb-3 p-3">Want to connect?</h1>
                    <Fade bottom cascade>
                        {socialLinks.map(e=>{
                            return(
                                <span className=" m-1" key={e.id}>
                                   <a href={e.link} target="_blank" rel="noreferrer" data-toggle="tooltip" data-placement="bottom" title={e.title}>
                                       <img src={process.env.PUBLIC_URL+e.logoURL} alt={e.title} height={e.height}/>
                                    </a> 
                                </span>
                            )
                        })}
                    </Fade>
                </div>
                <div className="contactForm">
                        
                </div>
            </div>
        )
    }
}

export default Contact


