import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Addport = () => {
    const name = useParams();
    const [consign,setConsign] = useState([])
    const [cargo,setcargo] = useState([])
    const [port, setport] = useState({
          consignmentId:'',
          etas:'',
          ETB:"",
          Timing:""
      })
      const [inputlist,setinputlist] = useState([{
        recivername:"",
        cargotype:"",
        cargoquantity:"",
      }])

      const addMore=(e)=>{
        e.preventDefault();
        setinputlist([...inputlist,{
          recivername:"",
          cargotype:"",
          cargoquantity:"",
        
       }])
      }
      useEffect(()=>{
        axios.get(`/consignment/oneconsignment/${name.id}`)
        .then((res)=>{
          setConsign(res.data);
          setport({...port,etas:res.data.eta,consignmentId:res.data._id})
        }).catch((res)=>{

        })

        axios.get('/cargo/viewCargo')
        .then((res)=>{
          setcargo(res.data)
        }).catch((res)=>{

        })
      },[])
      
      const handleinputchanger = (e,index)=>{
        const {name,value} = e.target;
        const list = [...inputlist];
        list[index][name] = value;
        setinputlist(list);
      }

      const handleData = e => {
        setport({ ...port, [e.target.name]: e.target.value })
      }
      
      const submit = e => {
        e.preventDefault()
        console.log(port);
        console.log(inputlist);
        axios.post(`/allconsignment/newallconsignment`,{data:port,inputlist:inputlist})
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
                type='text'
                className='form-control'
                name='etas'
                id='inputEmail3'
                value={port.etas}
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
                
                onChange={handleData}
                required
              />
            </div>
          </div>
          {inputlist.map((x,i)=>{
            return(
          <>
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
               onChange={e=>handleinputchanger(e,i)}
                required
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              Cargo Type
            </label>
            <div className='col-sm-10'>
            <select name="port" className='form-control'  onChange={e=>handleinputchanger(e,i)} >
                <option hidden> --select cargo type -- </option>
                {
                    cargo.map((data)=>(
                        <option value={data.cpo} >{data.cpo}</option>
                    ))
                }
            </select>
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
                
                onChange={e=>handleinputchanger(e,i)}
                required
              />
            </div>
          </div>
          </>
  )
})
  }
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
          <div className='d-flex justify-content-between'>
          <button type='submit' className='btn btn-primary' onClick={submit}>
            Add new Broker
          </button>
          <button type="submit" className="btn btn-primary mx-5" onClick={addMore} >
            Add more
          </button>
          </div>
        </form>
      </div>
      <ToastContainer className={' mb-7'} />
    </div>
  )
}

export default Addport