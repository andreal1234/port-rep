import React, { useEffect, useState } from 'react'
import "./vesel.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const VesseMaster = () => {
  const [vessel,setVessel] = useState([])
  const [search,setSearech] = useState([])
  useEffect(()=>{
    axios.get("/vessel/allvessel")
    .then((res)=>{
      setVessel(res.data);
      setSearech(res.data)
    }).catch((res)=>{
      console.log(res);
    })
  },[])

  const delet=(e)=>{
    axios.delete(`/vessel/${e}`)
    .then((res)=>{
      toast.warning("sucessfully deleted", {
        position: toast.POSITION.TOP_CENTER,

      });
      setTimeout(function(){
        window.location.reload();
     }, 2000);
    }).catch((res)=>{
      console.log(res);
    })
  }

  
  var i=1;

  const searchHandaler=(e)=>{
    
    if(e.target.value==""){
        setSearech(vessel)
        
    }else{
       const filterData=vessel.filter(data=>data.uniqueId.toLowerCase().includes(e.target.value.toLowerCase()))
       setSearech(filterData)
    }
    
   }
  return (
    <div className="main-content">
       <div className="page-content">
           <div class="col">
            <div className="card">
           <div className="card-body">
            <div className='d-flex justify-content-between'>
            <h4 className="card-title">vessel table</h4>
            <form className="app-search d-none d-lg-block pt-0">
            <div className="position-relative">
              <input type="text" className="form-control" placeholder="Search..." onChange={searchHandaler} />
              <span className="bx bx-search-alt" />
            </div>
          </form>
            <Link to={"/addnewvessalMaster"} className='btn btn-primary vesel'>Add vessel</Link>
            </div>
              
           <div className="table-responsive">
            <table className="table table-borderless mb-0">
            <thead>
          <tr>
            <th>No</th>
            <th>Unique No</th>
            <th>Vessel Name</th>
            <th>vog No</th>
            <th>Owner Name</th>
            <th>Chatter Name</th>
            <th>Reciver Name</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {search.map((data)=>(
            <tr>
            <th scope="row">{i++}</th>
            <td>{data.uniqueId}</td>
            <td>{data.veselName}</td>
            <td>{data.vogNumber}</td>
            <td>{data.ownerName}</td>
            <td>{data.charterName}</td>
            <td>{data.reciverName}</td>
            <td>
              <button className='btn btn-danger mx-2' onClick={()=>{delet(data._id)}}>Delete</button>
              <Link to={`/${data._id}`}><button className='btn btn-success mx-2'>Edit</button></Link>
            </td>

          </tr>
          ))}
        
           </tbody>
          </table>
            </div>
            </div>
        </div>
        </div>
        </div>
        <ToastContainer className={' mb-7'} />
    </div>
  )
}

export default VesseMaster