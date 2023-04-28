import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CustomerMaster = () => {
  const [customer,setCustomer] = useState([])
  const [search,setSearech] = useState([])

  useEffect(()=>{
    axios.get("/cutomer/allcustomer")
    .then((res)=>{
      setCustomer(res.data);
      setSearech(res.data)
    }).catch((res)=>{
      console.log(res);
    })
  },[])

  const delet=(e)=>{
    axios.delete(`/cutomer/${e}`)
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
  const searchHandaler=(e)=>{
    
    if(e.target.value==""){
        setSearech(customer)
        
    }else{
       const filterData=customer.filter(data=>data.name.toLowerCase().includes(e.target.value.toLowerCase()))
       setSearech(filterData)
    }
    
   }

  var i=1;
  return (
    <div className="main-content">
    <div className="page-content">
    <div class="col">
            <div className="card">
           <div className="card-body">
            <div className='d-flex justify-content-between'>
            <h4 className="card-title">Customer table</h4>
            <form className="app-search d-none d-lg-block pt-0">
            <div className="position-relative">
              <input type="text" className="form-control" placeholder="Search..." onChange={searchHandaler} />
              <span className="bx bx-search-alt" />
            </div>
          </form>
            <Link to={"/newcustomer"} className='btn btn-primary vesel'>Add Customer</Link>
            </div>
              
           <div className="table-responsive">
            <table className="table table-borderless mb-0">
            <thead>
          <tr>
            <th>No</th>
            <th>Customer Name</th>
            <th>Contract Number</th>
            <th>Email</th>
            <th>Address</th>
            <th>operation</th>
          </tr>
        </thead>
        <tbody>
       {search.map((data)=>(   
            <tr>
              <th scope="row">{i++}</th>
            <td>{data.name}</td>
            <td>{data.contractNumber}</td>
            <td>{data.email}</td>
            <td>{data.address}</td>
            <td>
              <button className='btn btn-danger mx-2' onClick={()=>{delet(data._id)}}>Delete</button>
              <Link to={`/editCustomer/${data._id}`}><button className='btn btn-success mx-2'>Edit</button></Link>
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

export default CustomerMaster