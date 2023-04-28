import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNewVessel = () => {
  const [vesel,setVesel] = useState({
    veselName:"",
    vogNumber:"",
    ownerName:"",
    charterName:"",
    reciverName:""
  })
  const handleData=(e)=>{
    setVesel({...vesel,[e.target.name]:e.target.value})
  }
  const submit=async (e)=>{
    e.preventDefault();
    console.log(vesel);
    await axios.post("/vessel/addvessel",vesel)
    .then((res)=>{
      toast.success("vessel sucessfully added ", {
        position: toast.POSITION.TOP_CENTER,

      });
    }).catch((res)=>{
      toast.error(res.response.data, {
        position: toast.POSITION.TOP_CENTER,

      });
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
              <input type="text" className="form-control" name="veselName" id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Vog Number
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="vogNumber" id="inputEmail3"  onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3"  className="col-sm-2 col-form-label">
              Owner Name
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="ownerName" id="inputEmail3"  onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Chater Name
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="charterName" id="inputEmail3"  onChange={handleData} />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Reciver Name
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="reciverName" id="inputEmail3" onChange={handleData} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={submit}>
            Save new Vessel
          </button>
          <Link to={"/vessalMaster"}><button className="btn btn-primary d-table float-end"  >Go back</button></Link>
        </form>
       
      </div>
      <ToastContainer className={' mb-7'} />
    </div>
  );
};

export default AddNewVessel;
