import logo from './logo.svg';
import './App.css';
import AdminSide from './Pages/AdminSide';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CustomerMaster from './Pages/CustomerMaster/CustomerMaster';
import VesseMaster from './Pages/VesselMaster/VesseMaster';
import { Dashbord } from './Pages/Dashbord/Dashbord';
import AddNewVessel from './Pages/VesselMaster/AddNewVessel';
import EditVessel from './Pages/VesselMaster/EditVessel';
import NewCustomer from './Pages/CustomerMaster/NewCustomer';
import CustomerEdit from './Pages/CustomerMaster/CustomerEdit';
import PortMaster from './Pages/PortMaster.js/PortMaster';
import NewportMaster from './Pages/PortMaster.js/NewportMaster';
import Editport from './Pages/PortMaster.js/Editport';
import { SBL } from './Pages/Bl/SBL';
import Createbl from './Pages/Bl/Createbl';
import EditBl from './Pages/Bl/EditBl';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import Owner from './Pages/Owner/Owner';
import Broker from './Pages/Broker/Broker';
import AddBroker from './Pages/Broker/AddBroker';
import AddOwner from './Pages/Owner/AddOwner';
import EditBroker from './Pages/Broker/EditBroker';
import EditOwner from './Pages/Owner/EditOwner';
import NewConsignment from './Pages/New-Consignment/NewConsignment';
import AddNewConsignment from './Pages/New-Consignment/AddNewConsignment';
import EditConsignment from './Pages/New-Consignment/EditConsignment';
import Addport from './Pages/Ports/Addport';
import EditAccount from './Pages/Accounts/EditAccount';
import ShowPort from './Pages/Ports/ShowPort';
import CargoType from './Pages/Cargo-Type/CargoType';
import AddCargoTyper from './Pages/Cargo-Type/AddCargoType';
import EditCargoType from './Pages/Cargo-Type/EditCargoType';
import Editports from './Pages/Ports/Editports';
import AllConsignment from './Pages/All-Consignment/AllConsignment';
import CompleteConsignment from './Pages/CompleteConsignment/CompleteConsignment';



function App() {
  const [token,settoken] = useState('')
  const[verify,setverify]=useState([])

  useEffect(()=>{
   const auth = localStorage.getItem("auth")
   settoken(auth)
   if(auth===null){

   }else{
    const decord = jwtDecode(auth)
    console.log(decord);
    setverify(decord)
   }
  },[]);


  const expireTime=()=>{
    const expire = localStorage.getItem("expiretime");
    if(expire<Date.now()){
      localStorage.removeItem("auth")
      window.location='/'
      localStorage.removeItem("expiretime")
    }
  }
  const updateExpire = ()=>{
    const expiretime = Date.now()+100000
    localStorage.setItem("expiretime",expiretime)
  }

  useEffect(()=>{
    // const auth = localStorage.getItem("auth")
    // var interval;
    // if(auth===null){

    // }else{
    //    interval = setInterval(()=>{
    //     expireTime(); 
    //   },10000)
    // }  
    // return()=>{
    //    clearInterval(interval)
    // }
  },[])

  useEffect(()=>{
    // updateExpire();
    // window.addEventListener("click",updateExpire);
    // window.addEventListener("mouseover",updateExpire);
    // window.addEventListener("scroll",updateExpire);
    // window.addEventListener("keypress",updateExpire);

    // return()=>{
    //   window.addEventListener("click",updateExpire);
    //   window.addEventListener("mouseover",updateExpire);
    //   window.addEventListener("scroll",updateExpire);
    //   window.addEventListener("keypress",updateExpire);
    // }


  },[])


   return (
    <div data-sidebar="dark">
      {!token?
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>:

     <BrowserRouter>
     <AdminSide/> 
     <Routes>
     <Route path="/" element={<Dashbord />}/>
      {/* <Route path="/customermaster" element={verify.role==="superadmin"? <CustomerMaster />:"" }/>
       <Route path="/vessalMaster" element={ verify.role==="superadmin"?<VesseMaster />:""}/>
       <Route path="/addnewvessalMaster" element={verify.role==="superadmin"?<AddNewVessel />:""}/>
       <Route path="/newcustomer" element={ verify.role==="superadmin"?<NewCustomer />:""}/>
       <Route path="/:id" element={verify.role==="superadmin"?<EditVessel />:""}/>
       <Route path="/editCustomer/:id" element={verify.role==="superadmin"?<CustomerEdit />:""}/> */}
       <Route path="/port" element={verify.role==="superadmin"?<PortMaster/>:""}/>
       <Route path="/newport" element={verify.role==="superadmin"?<NewportMaster/>:""}/> 
       <Route path="/editport/:id" element={verify.role==="superadmin"?<Editport/>:""}/>
       <Route path="/owner" element={verify.role==="superadmin"?<Owner/>:""}/> 
       <Route path="/broker" element={verify.role==="superadmin"?<Broker/>:""}/> 
       <Route path="/addbroker" element={verify.role==="superadmin"?<AddBroker/>:""}/>
       <Route path="/editbroker/:id" element={verify.role==="superadmin"?<EditBroker/>:""}/>  
       <Route path="/addowner" element={verify.role==="superadmin"?<AddOwner/>:""}/> 
       <Route path="/editowner/:id" element={verify.role==="superadmin"?<EditOwner/>:""}/>  
       <Route path="/newconsignment" element={verify.role==="superadmin"?<NewConsignment/>:""}/>  
       <Route path="/addnewconsignment" element={verify.role==="superadmin"?<AddNewConsignment/>:""}/>  
       <Route path="/editconsignment/:id" element={verify.role==="superadmin"?<EditConsignment/>:""}/> 
       <Route path="/completeconsignment" element={verify.role==="superadmin"?<CompleteConsignment/>:""}/>   
       <Route path="/cargotype" element={verify.role==="superadmin"?<CargoType/>:""}/> 
       <Route path="/addcargotype" element={verify.role==="superadmin"?<AddCargoTyper/>:""}/>  
       <Route path="/editcargotype/:id" element={verify.role==="superadmin"?<EditCargoType/>:""}/> 
       <Route path="/allconsign/:id" element={<AllConsignment/>}/>
       <Route path="/editaccounts/:id" element={verify.role==="accounts"?<EditAccount/>:""}/>
       <Route path="/addport/:id" element={<Addport/>}/>
       <Route path="/portshow/:id" element={<ShowPort/>}/>
       <Route path="/portshowedit/:id" element={<Editports/>}/>
       <Route path="/bl" element={<SBL/>}/>
       <Route path="/newbl" element={<Createbl/>}/> 
       <Route path="/editbl/:id" element={<EditBl/>}/> 
     </Routes>
   </BrowserRouter>
}
    </div>
  );
}

export default App;
