import React,{Component} from "react"
import Fade from 'react-reveal/Fade';
import {projects,skills} from "../data"


export class MyWork extends Component {
    constructor(props){
        super(props)
        this.state={
            projects:[],
            skills:[],
            isLoading:true
        }
    }

    componentDidMount(){

        this.setState({
            projects:projects,
            skills:skills,
            isLoading:false
        })
        
    }

    render() {
        return (
            <div className='myWork'>
                {this.state.isLoading?(
                    <div className="loading">
                        Loading...
                    </div>
                ):(
                    <>
                    <div className="container projects">
                        <h1 className="text-center text-light p-3">Projects</h1>
                        <Fade bottom cascade>
                            <div className="row">
                                {this.state.projects.map(e=>{
                                    return (
                                        <div className="col-md-4 col-sm-12 mb-3 key={e.id}">
                                        <div className="card p-3 shadow-lg" >
                                        <img className="card-img-top shadow" src={process.env.PUBLIC_URL+e.imgURL} alt={e.title}/>
                                            <div className="card-body">
                                                <h5 className="card-title">{e.title}</h5>
                                                <p className="card-text">{e.description}</p>
                                                <div className="d-flex justify-content-around">
                                                {e.demo!==null?<a href={e.demo} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-danger shadow">Demo 🌎</a>:null}
                                                {e.code!==null?<a href={e.code} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-info shadow">Code 💻</a>:null}
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </Fade>
                    </div>
                        <div className="container skills">
                            <h1 className="text-center text-light p-3">Skills</h1>
                            <Fade bottom cascade>
                            <div className="row">
                                {this.state.skills.map((e)=>{
                                    return (
                                    <div className="col-md-4 col-sm-12 mb-3">
                                        <div className="card shadow-lg p-3" key={e.id}>
                                            <div className="card-body">
                                                <h5 className="card-title">{e.title}</h5>
                                                <ul className="list-group list-group-flush">
                                                {e.list.map((skill,idx)=>{
                                                    return(<li className="list-group-item" key={idx}>{skill}</li>) 
                                                    })}
                                                </ul>
                                            </div>
                                        </div> 
                                    </div>
                                    )                       
                                })}
                            </div>
                            </Fade>
                    </div>
                    </>
                )}
                
            </div>
        )
    }
}

export default MyWork
