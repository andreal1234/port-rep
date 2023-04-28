
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const EditCargoType = () => {
    const name = useParams();
    const [cargo,setcargo] =useState({
        cpo: '',
        cpoln: '',
        rbd: '',
        cdsbo: '',
        pfad:""
    })
    useEffect((res)=>{
        axios.get(`/cargo/oneCargo/${name.id}`)
        .then((res)=>{
            setcargo(res.data)
        }).catch((res)=>{

        })
    },[])

    const handleData = (e)=>{
        setcargo({...cargo,[e.target.name]:e.target.value})
    }
    const submit=(e)=>{
        e.preventDefault();
        axios.put(`/cargo/updateCargo/${name.id}`,cargo)
        .then((res)=>{
            window.location = "/cargotype"
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
            CRUDE PALM OIL(CPO)
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                value={cargo.cpo}
                name='cpo'
                id='inputEmail3'
                onChange={handleData}
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
            CRUDE PALM OLEIN(CPOLN)
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                value={cargo.cpoln}
                name='cpoln'
                id='inputEmail3'
                onChange={handleData}
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
            REFINED BLEACHED DEODORIZED PALM OIL(RBD)
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                name='rbd'
                value={cargo.rbd}
                id='inputEmail3'
                onChange={handleData}
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
            CRUDE DEGUMMED SOYABEAN OIL(CDSBO)
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                name='cdsbo'
                value={cargo.cdsbo}
                id='inputEmail3'
                onChange={handleData}
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
            PALM FATTY ACID DISTILLATE (PFAD)
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                name='pfad'
                value={cargo.pfad}
                id='inputEmail3'
                onChange={handleData}
              />
            </div>
          </div>
          
          <button type='submit' className='btn btn-primary' onClick={submit}>
            Edit cargo
          </button>
        </form>
        <ToastContainer className={' mb-7'} />
      </div>
    </div>
  )
}

export default EditCargoType
