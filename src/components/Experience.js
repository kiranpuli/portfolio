import React, { Component } from 'react'
import { certificates, jobs } from '../data';

export class Experience extends Component {
    render() {
        return (
            <div className="experience container">
                <div className="jobs mt-3 bg-light shadow p-3 rounded">
                        <div className="internships table-responsive">
                            <h1 className="text-center">Experience</h1>
                            <table className="table table-borderless ">
                                <tbody>
                                {jobs.map(e=>{
                                        return (
                                            <tr key={e.id}>
                                                <td ><img src={process.env.PUBLIC_URL+e.logoURL} alt={e.company} height="40" width="40" className="shadow"/></td>
                                                <td>
                                                    <h5 className="text-capitalize">{e.company}</h5>
                                                    <p>{e.description}</p>
                                                </td>
                                                <td className="text-right">
                                                    <small>{e.from}-{e.to}</small>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                </div>
                <div className="certificates mt-3 bg-light shadow p-3  rounded">
                    <h1 className="text-center ">Certifications</h1>
                
                    <table className="table table-borderless ">
                        <tbody>
                        {certificates.map(e=>{
                                return (
                                    <tr key={e.id}>
                                        <td><img src={process.env.PUBLIC_URL+e.logoURL} alt={e.title} height="40" width="40" className="shadow"/></td>
                                        <td>
                                            <h5 className="text-capitalize">{e.title}</h5>
                                        </td>
                                        <td className="text-right">
                                        {e.expiry?(
                                        <small >
                                            *Expiry: {e.expiry}
                                        </small>):(null)}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Experience
