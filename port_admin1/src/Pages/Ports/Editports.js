import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Editports = () => {
  const name = useParams();
  const [consign,setConsign] = useState([])
  const [ports, setports] = useState({
        consignmentId:'',
        etas:'',
        ETB:"",
        Timing:"",
        recivername:"",
        cargotype:"",
        cargoquantity:"",
    })

  
    useEffect(()=>{
      axios.get(`/allconsignment/oneconsign/${name.id}`)
      .then((res)=>{
        console.log(res.data);
        setConsign(res.data.consignmentId);
        setports(res.data)
      }).catch((res)=>{
      })

    },[])
    

    const handleData = e => {
      setports({ ...ports, [e.target.name]: e.target.value })
    }
    
    const submit = (e) => {
      e.preventDefault()
      console.log(ports);
      axios.put(`/allconsignment/updateconsignment/${name.id}`,ports)
                .then((res)=>{
          window.location = "/"
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
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                            Port Name
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='text'
                                className='form-control'
                                name='vesselName'
                                id=''
                                value={consign.port}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                            Vessel Name
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='text'
                                className='form-control'
                                name='vesselName'
                                id=''
                                value={consign.vesselName}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                            Vessel Number
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='text'
                                className='form-control'
                                name='vesselName'
                                id=''
                                value={consign.vogNumber}
                                required
                            />
                        </div>
                    </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              ETA
            </label>
            <div className='col-sm-10'>
              <input
                type='time'
                className='form-control'
                name='etas'
                id='inputEmail3'
                value={ports.etas}
                onChange={handleData}
                required
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              ETB
            </label>
            <div className='col-sm-10'>
              <input
                type='time'
                className='form-control'
                name='ETB'
                id='inputEmail3'
                value={ports.ETB}
                onChange={handleData}
                required
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              Reciver Name
            </label>
            <div className='col-sm-10'>
              <input
                type='email'
                className='form-control'
                name='recivername'
                id='inputEmail3'
                value={ports.recivername}
                onChange={handleData}
                required
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              Cargo Type
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                name='cargotype'
                id='inputEmail3'
                value={ports.cargotype}
                onChange={handleData}
                required
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              Cargo Qunatity
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                name='cargoquantity'
                id='inputEmail3'
                value={ports.cargoquantity}
                onChange={handleData}
                required
              />
            </div>
          </div>

          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              Timing
            </label>
            <div className='col-sm-10'>
            <select name="Timing" className='form-control'  onChange={handleData} >
                <option hidden> --select time type -- </option>
                <option value='sailed'>Sailed</option>
            </select>
            </div>
          </div>
          <button type='submit' className='btn btn-primary' onClick={submit}>
            Edit port
          </button>
     
        </form>
      </div>
      <ToastContainer className={' mb-7'} />
    </div>
  )
}

export default Editports
