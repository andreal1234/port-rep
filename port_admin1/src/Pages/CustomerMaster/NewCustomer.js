import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewCustomer = () => {
    const [data,setdata]= useState({
        name:"",
        contractNumber:"",
        email:"",
        address:""
    })
    const handleData =(e)=>{
        setdata({...data,[e.target.name]:e.target.value});
    }
    const submit=(e)=>{
        e.preventDefault();
        axios.post("/cutomer/newcustomer",data)
        .then((res)=>{
            toast.success("Customer created sucessfully", {
                position: toast.POSITION.TOP_CENTER,
        
              });
        }).catch((res)=>{
            console.log(res);
        })
    }
  return (
    <div className="main-content">
    <div className="page-content">
        <form className=" w-75 m-auto">
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Customer Name
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="name" id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Customer Phone Number
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="contractNumber" id="inputEmail3"  onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3"  className="col-sm-2 col-form-label">
            Customer Email id
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="email" id="inputEmail3"  onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Customer Address
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="address" id="inputEmail3"  onChange={handleData} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={submit}>
            Add new Customer 
          </button>
          <Link to={"/customermaster"}><button className="btn btn-primary d-table float-end"  >Go back</button></Link>
        </form>
        </div>
        <ToastContainer className={' mb-7'} />
      </div>
  )
}

export default NewCustomer