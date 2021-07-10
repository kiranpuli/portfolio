import React from 'react'
import { useFormik } from 'formik';
function AdminLogin() {
    const formik=useFormik({
        initialValues:{
            user:"",
            pwd:""
        },
        onSubmit: values =>{
            console.log(auth(values.user,values.pwd)) 
        }
    })
    
    const auth = (user,pwd)=>{
        if(user==="admin" && pwd==="pass"){return true;}
        return false;
    }
    return (
        <div className="AdminLogin">
            <form onSubmit={formik.handleSubmit} className="container w-75 pt-5 text-light">
                <h1>Hi Kiran, Please Login</h1>
                <input placeholder="Username" type="text" name="user" onChange={formik.handleChange}  className="form-control mb-1" required/>
                <input placeholder="Password" type="password" name="pwd" onChange={formik.handleChange}  className="form-control mb-1" required/>
                <input type="submit" value="Submit"  className="btn btn-danger btn-block"/>
            </form>
        </div>
    )
}

export default AdminLogin
