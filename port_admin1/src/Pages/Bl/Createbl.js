import axios from 'axios'
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Createbl = () => {
    const [vessel,setvessel] = useState([])
    const [port,setPort] = useState([])
    const[verify,setverify]=useState([])
    const [inputlist,setinputlist] = useState([{
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
    }])
    // const[bldata,setbldata] = useState([])
    const[vog,setvog]=useState([])
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
    const [bldata,setBldata] = useState([])
    useEffect(()=>{
        axios.get("/vessel/allvessel")
        .then((res)=>{
            setvessel(res.data)
        })
        axios.get("/portmember/allportmember")
        .then((res)=>{
            setPort(res.data)
        })
        axios.get("/bl/onebl")
        .then((res)=>{
          setBldata(res.data)
          setdata(res.data)
          console.log(res.data);
        }).catch((res)=>{
          console.log(res);
        })

        axios.get("/bl/blAddedFind")
        .then((res)=>{
          setinputlist([res.data]);
        })
    },[])


    useEffect(()=>{
      const auth = localStorage.getItem("auth")
      if(auth===null){
   
      }else{
       const decord = jwtDecode(auth)
       setverify(decord)
      }
     },[]);


    const handleData =(e)=>{
        setdata({...data,[e.target.name]:e.target.value});
    }
    
    const portvalue=(e)=>{
      setdata({...data,portname:e.target.value})
    }

    // const vesseAlllData=(e)=>{
    //   console.log(e.target.value);
    // }
    // const selectData= (e)=>{
    //     axios.post("/vessel/oneVesselusingname",{vesselname:e.target.value})
    //     .then((res)=>{
    //         setvog(res.data)
    //         setdata({...data,vesselname:res.data.veselName,vogno:res.data.vogNumber});
    //     })
    // }

    const handleinputchanger = (e,index)=>{
      const {name,value} = e.target;
      setdata({...data,[e.target.name]:e.target.value});
      const list = [...inputlist];
      list[index][name] = value;
      setinputlist(list);
    }

    const addMore=(e)=>{
      e.preventDefault();
      setinputlist([...inputlist,{
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
     }])
    }


    const submit=(e)=>{
      e.preventDefault();
      if(bldata._id===data._id){
        console.log(data);
        console.log(bldata);
        axios.post("/bl/newAllbl",{id:data._id,dataBL:inputlist})
        .then((res)=>{
          window.location='/bl'
        })
      }else{
      axios.post("/bl/newbl",data)
      .then((res)=>{
        axios.post("/bl/newAllbl",{id:res.data._id,dataBL:inputlist})
        .then((res)=>{
          window.location='/bl'
        }).catch((res)=>{
          console.log(res);
        })
      }).catch((res)=>{
          console.log(res);
      })
      }    
  }




  return (
    <div className="main-content">
    <div className="page-content">
        <div className=" w-75 m-auto">
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Port Name
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={data.portname} name={verify.role==="superadmin"?"portname":""} id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Vessel name
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={data.vesselname} name={verify.role==="superadmin"?"vesselname":""} id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Voyage No
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={data.vogno} name={verify.role==="superadmin"?"vogno":""} id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" >
               ETA
            </label>
            <div className="col-sm-10">
              <input type="time" className="form-control" value={data.eta} name={verify.role==="superadmin"?"eta":""}  id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Arrived
            </label>
            <div className="col-sm-10">
              <input type="time" className="form-control" value={data.arrivetime} name={verify.role==="superadmin"?"arrivetime":""} id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Berthed
            </label>
            <div className="col-sm-10">
              <input type="time" className="form-control" value={data.berthed} name={verify.role==="superadmin"?"berthed":""} id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Sailed
            </label>
            <div className="col-sm-10">
              <input type="time" className="form-control" value={data.sailed} name={verify.role==="superadmin"?"sailed":""} id="inputEmail3" onChange={handleData} />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Agent
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={data.agent} name={verify.role==="superadmin"?"agent":""} id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              consignee
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={data.consignee} name={verify.role==="superadmin"?"consignee":""} id="inputEmail3" onChange={handleData} />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               product
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={data.product} name={verify.role==="superadmin"?"product":""} id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Quantity In Mt
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={data.quantity} name={verify.role==="superadmin"?"quantity":""} id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Shipper
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={data.shipper} name={verify.role==="superadmin"?"shipper":""} id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Load port
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={data.loadPort} name={verify.role==="superadmin"?"loadPort":""} id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Day Over Sail 
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={data.dayoversail} name={verify.role==="superadmin"?"dayoversail":""} id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          {inputlist.map((x,i)=>{
            return(
          <>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               vessel Owner Name
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={x.vesselOwner} name="vesselOwner" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Bl No
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={x.blNo} name="blNo" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Bl Date
            </label>
            <div className="col-sm-10">
              <input type="date" className="form-control" value={x.blDate} name="blDate" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Bl Quantity
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={x.blQuantity} name="blQuantity" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Type of LOI/BG
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={x.typeloi} name="typeloi" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Any Other Doc
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={x.otherDoc} name="otherDoc" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Org LOI/BG recdon
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={x.orgloi} name="orgloi" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               Org BL Recd On
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={x.orgblrecd} name="orgblrecd" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
               How Many Copy Of BL
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={x.copyofbl} name="copyofbl" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            LOI/BG returned on
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control"value={x.bgreturned} name="bgreturned" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3"  className="col-sm-2 col-form-label">
            BL Returned On
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={x.blreturn} name="blreturn" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
            </div>
          </div>
         
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">  
            Couries No
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={x.couriesNo} name="couriesNo" id="inputEmail3"  onChange={e=>handleinputchanger(e,i)} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3"  className="col-sm-2 col-form-label">
            Remarks
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" value={x.remarks} name="remarks" id="inputEmail3"  onChange={e=>handleinputchanger(e,i)} />
            </div>
          </div>
</>
  )
})
  }
          <div className='d-flex justify-content-between'>
          <button type="submit" className="btn btn-primary" onClick={submit}>
            Add new BL
          </button>
        <button type="submit" className="btn btn-primary mx-5" onClick={addMore} >
            Add more
          </button>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Createbl