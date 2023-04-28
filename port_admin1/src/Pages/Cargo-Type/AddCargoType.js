
import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AddCargoTyper = () => {
 const [cargo, setcargo] = useState({
  cpo: '',
  cpoln: '',
  rbd: '',
  cdsbo: '',
  pfad:""
})

const handleData = e => {
  setcargo({ ...cargo, [e.target.name]: e.target.value })
}

const submit = e => {
  e.preventDefault()
  axios
    .post('/cargo/newCargo', cargo)
    .then((res)=>{
      window.location = "/cargotype"
    })
    .catch((res)=>{
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
                name='cpo'
                id='inputEmail3'
     
                onChange={handleData}
                required
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
                name='cpoln'
                id='inputEmail3'
 
                onChange={handleData}
                required
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
            REFINED BLEACHED DEODORIZED PALM OIL(RBD)
            </label>
            <div className='col-sm-10'>
              <input
                type='email'
                className='form-control'
                name='rbd'
                id='inputEmail3'
               
                onChange={handleData}
                required
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
                id='inputEmail3'
              
                onChange={handleData}
                required
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
                id='inputEmail3'
              
                onChange={handleData}
                required
              />
            </div>
          </div>
          <button type='submit' className='btn btn-primary' onClick={submit}>
            Add new cargotype
          </button>
        </form>
      </div>
      <ToastContainer className={' mb-7'} />
    </div>
  )
}

export default AddCargoTyper
