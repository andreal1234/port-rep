import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const[port,setport] = useState([])
    const [user,setUser] =useState({
        email:"",
        username:"",
        phonenumber:"",
        portaccess:""

      })
      const handleData=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
      }
      useEffect(()=>{
        axios.get("/portmember/allportmember")
        .then((res)=>{
          setport(res.data)
        })
      })
      const submit=(e)=>{
        e.preventDefault();
        axios.post("/user/register",user)
        .then((res)=>{
            localStorage.setItem("auth",res.data);
            window.location="/"
        }).catch((res)=>{
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
                <img src={process.env.PUBLIC_URL+"./image/logo-dark.png"} alt className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-body pt-0"> 
            
            <div className="p-2">
              <form className="needs-validation" noValidate action="https://themesbrand.com/skote/layouts/index.html">
                <div className="mb-3">
                  <label htmlFor="useremail" className="form-label">Email</label>
                  <input type="email" className="form-control" name='email' id="useremail" placeholder="Enter email" required onChange={handleData} />  
                  <div className="invalid-feedback">
                    Please Enter Email
                  </div>      
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" name='username' id="username" placeholder="Enter username" required onChange={handleData} />
                  <div className="invalid-feedback">
                    Please Enter Username
                  </div>  
                </div>
                <div className="mb-3">
                  <label htmlFor="userpassword" className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" name='phonenumber' id="userpassword" placeholder="Enter password" required onChange={handleData} />
                  <div className="invalid-feedback">
                    Please Enter Password
                  </div>       
                </div>
                <div className="mb-3">
                  <label htmlFor="userpassword" className="form-label">Port</label>
                    <select className="form-control" name="portaccess" onChange={handleData}>
                        <option hidden>-- Select --</option>
                       { port.map((data)=>(
                       <option value={data.portname}>{data.portname}</option>
                       ))}
                        
                    </select>      
                </div>
                <div className="mt-4 d-grid">
                  <button className="btn btn-primary waves-effect waves-light" type="submit" onClick={submit}>Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer className={' mb-7'} />
  </div>
</div>

  )
}

export default Register