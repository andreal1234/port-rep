import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Editport = () => {
    const name = useParams();
    const [data,setdata]= useState({
      portname:"",
      name:"",
      contractNumber:"",
      email:"",
    })
    useEffect(()=>{
        axios.get(`/portmember/oneport/${name.id}`)
        .then((res)=>{
            setdata(res.data)
        }).catch((res)=>{
            console.log(res);
        })
    },[])

    const handleData=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const submit=(e)=>{
        e.preventDefault();
        axios.put(`/portmember/updateport/${name.id}`,data)
        .then((res)=>{
          window.location='/port'
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
              Port Name
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={data.portname} name="portname" id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Name
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={data.name} name="name" id="inputEmail3"  onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3"  className="col-sm-2 col-form-label">
           Contract number
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="contractNumber" value={data.contractNumber} id="inputEmail3"  onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            email
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="email" value={data. email} id="inputEmail3"  onChange={handleData} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={submit}>
            Add new port
          </button>
          <Link to={"/port"}><button className="btn btn-primary d-table float-end"  >Go back</button></Link>
        </form>
        <ToastContainer className={' mb-7'} />
        </div>
        </div>
  )
}

export default Editport