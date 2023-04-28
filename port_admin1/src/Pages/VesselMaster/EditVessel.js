import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditVessel = () => {
    const name = useParams();
    // const [data,setData] = useState('')
    const [vessel,setvessel] = useState({
        veselName:'',
        vogNumber:'',
        ownerName:'',
        charterName:'',
        reciverName:'',


    })
    useEffect(()=>{
        axios.get(`/vessel/oneVessel/${name.id}`)
        .then((res)=>{
            // console.log(res.data);
            setvessel(res.data)
            // setvessel({...vessel,res.data})
        })
        
    },[])
    // console.log(data);
    const handleData=(e)=>{
        setvessel({...vessel,[e.target.name]:e.target.value})
    }
    const submit=(e)=>{
        e.preventDefault();
        axios.put(`/vessel/updateOneVessel/${name.id}`,vessel)
        .then((res)=>{
            toast.success("Edit sucessfull", {
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
            Vesel Name
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="veselName" value={vessel.veselName} id="inputEmail3" onChange={handleData} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Vog Number
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="vogNumber" value={vessel.vogNumber} id="inputEmail3"  onChange={handleData} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3"  className="col-sm-2 col-form-label">
            Owner Name
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="ownerName" value={vessel.ownerName} id="inputEmail3"  onChange={handleData} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Chater Name
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="charterName" value={vessel.charterName} id="inputEmail3"  onChange={handleData} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Reciver Name
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="reciverName" value={vessel.reciverName} id="inputEmail3" onChange={handleData} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={submit}>
          Edit Vessel
        </button>
        <Link to={"/vessalMaster"}><button className="btn btn-primary d-table float-end"  >Go back</button></Link>
      </form>
     
    </div>
    <ToastContainer className={' mb-7'} />
    </div>
  )
}

export default EditVessel