import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const EditBroker = () => {
    const name = useParams();
    const [broker,setbroker] =useState({
        name:"",
        email:"",
        phoneNumber:"",
        country:""
    })
    useEffect((res)=>{
        axios.get(`/broker/onebroker/${name.id}`)
        .then((res)=>{
            setbroker(res.data)
        }).catch((res)=>{

        })
    },[])

    const handleData = (e)=>{
        setbroker({...broker,[e.target.name]:e.target.value})
    }
    const submit=(e)=>{
        e.preventDefault();
        axios.put(`/broker/updatebroker/${name.id}`,broker)
        .then((res)=>{
            window.location = "/broker"
        }).catch((res)=>{
            toast.error(res.response.data, {
                position: toast.POSITION.TOP_CENTER,
                })
        })

    }

  return (
    <div className='main-content'>
      <div className='page-content'>
        <form className=' w-75 m-auto'>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
               Name
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                value={broker.name}
                name='name'
                id='inputEmail3'
                onChange={handleData}
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
             Phone Number
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                value={broker.phoneNumber}
                name='phoneNumber'
                id='inputEmail3'
                onChange={handleData}
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
             Email id
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                name='email'
                value={broker.email}
                id='inputEmail3'
                onChange={handleData}
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              Country
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                name='country'
                value={broker.country}
                id='inputEmail3'
                onChange={handleData}
              />
            </div>
          </div>
          <button type='submit' className='btn btn-primary' onClick={submit}>
            Edit Broker
          </button>
        </form>
        <ToastContainer className={' mb-7'} />
      </div>
    </div>
  )
}

export default EditBroker
