import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const EditOwner = () => {
    const name = useParams();
    const [owner,setowner] =useState({
        name:"",
        email:"",
        phoneNumber:"",
        country:""
    })
    useEffect((res)=>{
        axios.get(`/owner/oneowner/${name.id}`)
        .then((res)=>{
            setowner(res.data)
        }).catch((res)=>{

        })
    },[])

    const handleData = (e)=>{
        setowner({...owner,[e.target.name]:e.target.value})
    }
    const submit=(e)=>{
        e.preventDefault();
        axios.put(`/owner/updateowner/${name.id}`,owner)
        .then((res)=>{
            window.location = "/owner"
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
              value={owner.name}
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
              value={owner.phoneNumber}
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
              value={owner.email}
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
              value={owner.country}
              id='inputEmail3'
              onChange={handleData}
            />
          </div>
        </div>
        <button type='submit' className='btn btn-primary' onClick={submit}>
          Edit owner
        </button>
      </form>
      <ToastContainer className={' mb-7'} />
    </div>
  </div>
  )
}

export default EditOwner