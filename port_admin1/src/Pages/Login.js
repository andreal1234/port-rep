import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [user,setUser] =useState({
    email:"",
    password:""
  })
  const handleData=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const submit=(e)=>{
    e.preventDefault();
    axios.post("/user/login",user)
    .then((res)=>{
      localStorage.setItem("auth",res.data);
      window.location="/"
    })
    .catch((res)=>{
      toast.error(res.response.data, {
        position: toast.POSITION.TOP_CENTER,

      });
    })
  }
  return (
  <div className="account-pages my-5 pt-sm-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6 col-xl-5">
        <div className="card overflow-hidden">
          <div className="bg-dark bg-soft">
            <div className="row">
              <div className="col-7">
                <div className="text-primary p-4">
                <img src={process.env.PUBLIC_URL+"./image/logo-dark.png"} alt  height={34} />
                </div>
              </div>
              <div className="col-5 align-self-end">
                <img src="" alt className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="card-body pt-0"> 
            <div className="auth-logo">
              <a href="index.html" className="auth-logo-light">
                <div className="avatar-md profile-user-wid mb-4">
                  <span className="avatar-title rounded-circle bg-light">
                    <img src="assets/images/logo-light.svg" alt className="rounded-circle" height={34} />
                  </span>
                </div>
              </a>
              
            </div>
            <div className="p-2">
              <form className="form-horizontal" action="https://themesbrand.com/skote/layouts/index.html">
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Email</label>
                  <input type="email" className="form-control" name='email' id="username" placeholder="Enter email" onChange={handleData} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <div className="input-group auth-pass-inputgroup">
                    <input type="password" className="form-control" name='password' placeholder="Enter password" aria-label="Password" aria-describedby="password-addon"  onChange={handleData} />
                  </div>
                </div>
                
                <div className="mt-3 d-grid">
                  <button className="btn btn-primary waves-effect waves-light" type="submit" onClick={submit}>Log In</button>
                </div>
                
              </form>
            </div>
          </div>
          <div className="mt-5 text-center">
          <div>
            <p>create  account ? <Link to={"/register"} className="fw-medium text-primary">Register</Link></p>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  <ToastContainer className={' mb-7'} />
</div>

  )
}

export default Login