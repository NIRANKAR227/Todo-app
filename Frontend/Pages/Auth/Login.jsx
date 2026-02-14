import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import "./Authstyle.css"
import AuthServices from '../../src/Services/AuthServices';
import toast from 'react-hot-toast'; //Notification
import { getErrorMessage } from '../../src/utils/ErrorMessage';


const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  const Loginhandler=async(e)=>{
    try {
      e.preventDefault();
      const data={email,password};
      const res= await AuthServices.loginuser(data);
      toast.success(res.data.message);
      localStorage.setItem('todo-app',JSON.stringify(res.data));
      navigate("/home")
      console.log(res.data);
    } catch (err) {
      toast.error(getErrorMessage(err))
      console.log(err)
    }
  }
  return (

    <div>
      <div className="form-container">
        <div className="form">
          <div className="mb-3">
            <i className="fa-solid fa-user-circle"></i>
          </div>
          <div className="mb-3">
            <input 
              type='email' 
              className='form-control' 
              placeholder='Enter your email' 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)}
            />

          </div>
          <div className="mb-3">
            <input type='password' className='form-control' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="form-bottom">
            <p className='text-center'>
              Not a user?<Link to="/register">Register</Link>
            </p>
            <button type="submit" className='login-btn' onClick={Loginhandler}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login