import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





export const SBL = () => {
  const [customer,setCustomer] = useState([])
  const [search,setSearech] = useState([])
  const [bl,setBl] = useState([])
  const [allbl,setallbl] = useState([])
  var i=1;
  const [count,setCount] = useState(1)
  useEffect(()=>{
    axios.get("/bl/allbl")
    .then((res)=>{
      setCustomer(res.data);
      setSearech(res.data)
    }).catch((res)=>{
      console.log(res);
    })
    axios.get("/bl/alladdedbl")
    .then((res)=>{
      setBl(res.data);
    })
    .catch((res)=>{
      console.log(res);
    })


  },[])
  const searchHandaler=(e)=>{
    
    if(e.target.value==""){
        setSearech(customer)
        
    }else{
       const filterData=customer.filter(data=>data.portname.toLowerCase().includes(e.target.value.toLowerCase()))
       setSearech(filterData)
    }
    
   }

       // ---------- pageination -----------------

       const [currentPage,setCurrentPage]=useState(1);
       const recordPerPage=7;
       const lastIndex = currentPage*recordPerPage;
       const firstpage = lastIndex - recordPerPage;
       const records = search.slice(firstpage,lastIndex);
       const npage = Math.ceil(search.length/recordPerPage);
       const number = [...Array(npage+1).keys()].slice(1)
       console.log(number);

       function prepage(){
        if(currentPage !== 1){
          setCurrentPage(currentPage-1);
        }

       }
       function changeCPage(id){
        setCurrentPage(id)
       }
       function nextpage(){
        if(currentPage === npage){
           setCurrentPage(1)
        }
        if(setCurrentPage!== npage){
          setCurrentPage(currentPage+1)
          
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
            <h4 className="card-title">BL table</h4>
            <form className="app-search d-none d-lg-block pt-0">
            <div className="position-relative">
              <input type="text" className="form-control" placeholder="Search by port number..." onChange={searchHandaler} />
              <span className="bx bx-search-alt" />
            </div>
          </form>
            <Link to={"/newbl"} className='btn btn-primary vesel'>Add BL</Link>
            </div>
              
           <div className="table-responsive">
            <table className="table table-borderless mb-0">
            <thead>
          <tr>
            <th>No</th>
            <th>portname</th>
            <th>vesselname</th>
            <th>vogno</th>
            <th>Eta</th>
            <th>Arrived</th>
            <th>Berthed</th>
            <th>Sailed</th>
            <th> Agent</th>
            <th> consignee</th>
            <th> product</th>
            <th>Quantity In Mt</th>
            <th>Shipper</th>
            <th>Load port</th>
            <th> Day Over Sail </th>
            <th>vessel Owner Name</th>
            <th> Bl No</th>
            <th> Bl Date</th>
            <th>Bl Quantity</th>
            <th> Type of LOI/BG</th>
            <th>Any Other Doc</th>
            <th>Org LOI/BG recdon</th>
            <th>Org BL Recd On</th>
            <th>How Many Copy Of BL</th>
            <th>LOI/BG returned on</th>
            <th>BL Returned On</th>
            <th>Couries No</th>
            <th>Remarks</th>
            <th>Operation</th>
          </tr>
        </thead>

        <tbody>
      {bl.map((data)=>(
       
            <tr >
            <th scope="row">{i++}</th>
            <td>{data.blAdmin.portname}</td>
            <td>{data.blAdmin.vesselname}</td>
            <td>{data.blAdmin.vogno}</td>
            <td>{data.blAdmin.eta}</td>
            <td>{data.blAdmin.arrivetime}</td>
            <td>{data.blAdmin.berthed}</td>
            <td>{data.blAdmin.sailed}</td>
            <td>{data.blAdmin.agent}</td>
            <td>{data.blAdmin.consignee}</td>
            <td>{data.blAdmin.product}</td>
            <td>{data.blAdmin.quantity}</td>
            <td>{data.blAdmin.shipper}</td>
            <td>{data.blAdmin.loadPort}</td>
            <td>{data.blAdmin.dayoversail}</td>
            <td>{data.vesselOwner}</td>
            <td>{data.blNo}</td>
            <td>{data.blDate}</td>
            <td>{data.blQuantity}</td>
            <td>{data.typeloi}</td>
            <td>{data.otherDoc}</td>
            <td>{data.orgloi}</td>
            <td>{data.orgblrecd}</td>
            <td>{data.copyofbl}</td>
            <td>{data.bgreturned}</td>
            <td>{data.blreturn}</td>
            <td>{data.couriesNo}</td>
            <td>{data.remarks}</td> 
            <td>
              <Link to={`/editbl/${data._id}`}><button className='btn btn-success mx-2'>Edit</button></Link>
            </td> 
          </tr>
         
          ))}
        
           </tbody>
          </table>
          
            </div>
            </div>
            <nav className='m-auto'>
            {/* <ul className='pagination'>
              <li className='page-item'>
                <Link className='page-link' onClick={prepage}>Prev</Link>
              </li>
              {
                number.map((n)=>(
                <li className={`page-link ${currentPage===n?'active':''}`}>
                <Link  className='page-item' onClick={()=>changeCPage(n)} >{n}</Link>
              </li>
              ))}
             <li>
                <Link className='page-link' onClick={nextpage}>Next</Link>
              </li>
            </ul> */}
          </nav>
        </div>
        </div>
        
        </div>
        
        <ToastContainer className={' mb-7'} />
    </div>
  )
}
