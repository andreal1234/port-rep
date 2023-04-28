import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditBl = () => {
    const name = useParams();
    const [vessel,setvessel] = useState([])
    const [port,setPort] = useState([])
    const[vog,setvog]=useState([])

    const [blData,setBlData]=useState({
        vesselOwner:"",
        blNo:"",
        blDate:"",
        blQuantity:"",
        typeloi:"",
        otherDoc:"",
        orgloi:"",
        orgblrecd:"",
        copyofbl:"",
        bgreturned:"",
        blreturn:"",
        couriesNo:"",
        remarks:""
    })

    const [data,setdata]= useState({
        portname:"",
        vesselname:"",
        vogno:"",
        eta:"",
        arrivetime:"",
        berthed:"",
        sailed:"",
        agent:"",
        consignee:"",
        product:"",
        quantity:"",
        shipper:"",
        loadPort:"",
        dayoversail:"",
        
    })
    
    useEffect(()=>{
        axios.get(`/bl/onebl/${name.id}`)
        .then((res)=>{
            setBlData(res.data)
            setdata(res.data.blAdmin)
          })
        .catch((res)=>{
          console.log(res);
        })
        axios.get("/vessel/allvessel")
        .then((res)=>{
          setvessel(res.data)
        })
        axios.get("/portmember/allportmember")
        .then((res)=>{
          setPort(res.data)
        })
        .catch((res)=>{
          console.log(res);
        })

    },[])
    const handleData =(e)=>{
        setdata({...data,[e.target.name]:e.target.value});
    }
    const handleData1 = (e)=>{
      setBlData({...blData,[e.target.name]:e.target.value});
    }
    const submit=(e)=>{
        e.preventDefault();
        axios.put(`/bl/updatebl/${name.id}`,{data:data,bldata:blData})
        .then((res)=>{
            window.location='/bl'

        }).catch((res)=>{
            console.log(res);
        })
    }
   
    const selectData= (e)=>{
        axios.get(`/vessel/oneVessel/${e.target.value}`)
        .then((res)=>{
            setvog(res.data)
            setdata({...data,vesselname:res.data.veselName,vogno:res.data.vogNumber});
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
              <input type="text" className="form-control" value={data.portname} name="portname" id="inputEmail3" onChange={handleData}  />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Vessel Name
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={data.vessel} name="vessel" id="inputEmail3" onChange={handleData}  />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Voyage No
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={data.vogno} name="vogno" id="inputEmail3" onChange={handleData}  />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" >
               ETA
            </label>
            <div className="col-sm-10">
              <input type="time" className="form-control" value={data.eta} name="eta" id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Arrived
            </label>
            <div className="col-sm-10">
              <input type="time" className="form-control" value={data.arrivetime} name="arrivetime" id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Berthed
            </label>
            <div className="col-sm-10">
              <input type="time" className="form-control" value={data.berthed} name="berthed" id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Sailed
            </label>
            <div className="col-sm-10">
              <input type="time" className="form-control" value={data.sailed} name="sailed" id="inputEmail3" onChange={handleData} />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Agent
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={data.agent} name="agent" id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              consignee
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={data.consignee} name="consignee" id="inputEmail3" onChange={handleData} />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               product
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={data.product} name="product" id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Quantity In Mt
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={data.quantity} name="quantity" id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Shipper
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={data.shipper} name="shipper" id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Load port
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={data.loadPort} name="loadPort" id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Day Over Sail 
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={data.dayoversail} name="dayoversail" id="inputEmail3" onChange={handleData} />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               vessel Owner Name
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={blData.vesselOwner} name="vesselOwner" id="inputEmail3" onChange={handleData1} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Bl No
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={blData.blNo} name="blNo" id="inputEmail3" onChange={handleData1} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Bl Date
            </label>
            <div className="col-sm-10">
              <input type="date" className="form-control" value={blData.blDate} name="blDate" id="inputEmail3" onChange={handleData1} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Bl Quantity
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={blData.blQuantity} name="blQuantity" id="inputEmail3" onChange={handleData1} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Type of LOI/BG
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={blData.typeloi} name="typeloi" id="inputEmail3" onChange={handleData1} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Any Other Doc
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={blData.otherDoc} name="otherDoc" id="inputEmail3" onChange={handleData1} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Org LOI/BG recdon
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={blData.orgloi} name="orgloi" id="inputEmail3" onChange={handleData1} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Org BL Recd On
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={blData.orgblrecd} name="orgblrecd" id="inputEmail3" onChange={handleData1} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               How Many Copy Of BL
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={blData.copyofbl} name="copyofbl" id="inputEmail3" onChange={handleData1} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            LOI/BG returned on
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control"value={blData.bgreturned} name="bgreturned" id="inputEmail3"  onChange={handleData1} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3"  className="col-sm-2 col-form-label">
            BL Returned On
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={blData.blreturn} name="blreturn" id="inputEmail3"  onChange={handleData1} />
            </div>
          </div>
         
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">  
            Couries No
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={blData.couriesNo} name="couriesNo" id="inputEmail3"  onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3"  className="col-sm-2 col-form-label">
            Remarks
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={blData.remarks} name="remarks" id="inputEmail3"  onChange={handleData} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={submit}>
            BL edit
          </button>
        </form>
        </div>
        <ToastContainer className={' mb-7'} />
      </div>
  )
}

export default EditBl