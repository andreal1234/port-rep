import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

const AdminSide = () => {
  const[verify,setverify]=useState([])

  const logout =()=>{
    localStorage.removeItem('auth');
    window.location='/'
  }

  useEffect(()=>{
    const auth = localStorage.getItem("auth")
    if(auth===null){
 
    }else{
     const decord = jwtDecode(auth)
     setverify(decord)
    }
   },[]);
  return (
    <div>
   <div>
  <div id="layout-wrapper">
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          {/* LOGO */}
          <div className="navbar-brand-box">
            <a href="index.html" className="logo logo-dark h-50">
              {/* <span className="logo-sm">
                <img src={process.env.PUBLIC_URL+"./image/logo-dark.png"} alt height={22} />
              </span> */}
              <span className="logo-lg bg-dark">
                <img src={process.env.PUBLIC_URL+"./image/logo-dark.png"} alt height={25} width={80} />
              </span>
            </a>
            <a href="index.html" className="logo logo-light">
              <span className="logo-sm">
                <img src="assets/images/logo-light.svg" alt height={22} />
              </span>
              <span className="logo-lg">
                <img src="assets/images/logo-light.png" alt height={19} />
              </span>
            </a>
          </div>
         
          {/* App Search*/}
          
          <div className="dropdown dropdown-mega d-none d-lg-block ms-2">
            
            
          </div>
        </div>
        <div className="d-flex">
         
          
          
         
          <div className="dropdown d-inline-block">
           
            
          </div>
          <div className="dropdown d-inline-block">
            <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="d-none d-xl-inline-block ms-1" key="t-henry">{verify.username}</span>
              <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              {/* item*/}
              {/* <a className="dropdown-item" href="#"><i className="bx bx-user font-size-16 align-middle me-1" /> <span key="t-profile">Profile</span></a>
              <a className="dropdown-item" href="#"><i className="bx bx-wallet font-size-16 align-middle me-1" /> <span key="t-my-wallet">My Wallet</span></a>
              <a className="dropdown-item d-block" href="#"><span className="badge bg-success float-end">11</span><i className="bx bx-wrench font-size-16 align-middle me-1" /> <span key="t-settings">Settings</span></a>
              <a className="dropdown-item" href="#"><i className="bx bx-lock-open font-size-16 align-middle me-1" /> <span key="t-lock-screen">Lock screen</span></a> */}
               <a className="dropdown-item text-danger" href="#" onClick={logout} ><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" /> <span key="t-logout">Logout</span></a>
              {/* <div className="dropdown-divider"  /> */}
              {/* <a className="dropdown-item text-danger" href="#" onClick={logout} ><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" /> <span key="t-logout">Logout</span></a> */}
            </div>
          </div>
         
        </div>
      </div>
    </header>
    {/* ========== Left Sidebar Start ========== */}
    <div className="vertical-menu">
      <div data-simplebar className="h-100">
        {/*- Sidemenu */}
        <div id="sidebar-menu">
          {/* Left Menu Start */}
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title" key="t-menu">Menu</li>
            <li>
             
                <Link to={"/"} className="waves-effect">
                <span key="t-dashboards" className='h5'>Dashboards</span>
              </Link>
              {verify.role==="superadmin"?
                <>
              {/* <Link to={"/customermaster"} className="waves-effect">
                <i className="bx bx-home-circle" /><span className="badge rounded-pill bg-info float-end"></span>
                <span key="t-dashboards">Customer Master</span>
              </Link>
              <Link to={"/vessalMaster"} className="waves-effect">
                <i className="bx bx-home-circle" /><span className="badge rounded-pill bg-info float-end"></span>
                <span key="t-dashboards">Vessel Master</span>
              </Link> */}
              <Link to={"/owner"} className="waves-effect">
                
                <span key="t-dashboards" className='h5'>Owner Master</span>
              </Link>
              <Link to={"/broker"} className="waves-effect">
               
                <span key="t-dashboards" className='h5'>Broker Master</span>
              </Link>
              <Link to={"/port"} className="waves-effect">
                
                <span key="t-dashboards" className='h5'>Port Master</span>
              </Link>
              <Link to={"/cargotype"} className="waves-effect">
                <span key="t-dashboards" className='h5'>Cargo-type Master</span>
              </Link>
              <Link to={"/newconsignment"} className="waves-effect">
                <span key="t-dashboards" className='h5'>New Consignment</span>
              </Link>
              <Link to={"/completeconsignment"} className="waves-effect">
                <span key="t-dashboards" className='h5'>Complete Consignment</span>
              </Link>
              </>:""
              }
              <Link to={"/bl"} className="waves-effect">
                <span key="t-dashboards" className='h5'>BL</span>
              </Link>
            </li>
           
          </ul>
        </div>
        {/* Sidebar */}
      </div>
    </div>
    {/* Left Sidebar End */}
    {/* ============================================================== */}
    {/* Start right Content here */}
    {/* ============================================================== */}
    
    {/* end main content*/}
  </div>
  {/* END layout-wrapper */}
  {/* Right Sidebar */}
  <div className="right-bar">
    <div data-simplebar className="h-100">
      <div className="rightbar-title d-flex align-items-center px-3 py-4">
        <h5 className="m-0 me-2">Settings</h5>
        <a href="javascript:void(0);" className="right-bar-toggle ms-auto">
          <i className="mdi mdi-close noti-icon" />
        </a>
      </div>
      {/* Settings */}
      <hr className="mt-0" />
      <h6 className="text-center mb-0">Choose Layouts</h6>
      <div className="p-4">
        <div className="mb-2">
          <img src="assets/images/layouts/layout-1.jpg" className="img-thumbnail" alt="layout images" />
        </div>
        <div className="form-check form-switch mb-3">
          <input className="form-check-input theme-choice" type="checkbox" id="light-mode-switch" defaultChecked />
          <label className="form-check-label" htmlFor="light-mode-switch">Light Mode</label>
        </div>
        <div className="mb-2">
          <img src="assets/images/layouts/layout-2.jpg" className="img-thumbnail" alt="layout images" />
        </div>
        <div className="form-check form-switch mb-3">
          <input className="form-check-input theme-choice" type="checkbox" id="dark-mode-switch" />
          <label className="form-check-label" htmlFor="dark-mode-switch">Dark Mode</label>
        </div>
        <div className="mb-2">
          <img src="assets/images/layouts/layout-3.jpg" className="img-thumbnail" alt="layout images" />
        </div>
        <div className="form-check form-switch mb-3">
          <input className="form-check-input theme-choice" type="checkbox" id="rtl-mode-switch" />
          <label className="form-check-label" htmlFor="rtl-mode-switch">RTL Mode</label>
        </div>
        <div className="mb-2">
          <img src="assets/images/layouts/layout-4.jpg" className="img-thumbnail" alt="layout images" />
        </div>
        <div className="form-check form-switch mb-5">
          <input className="form-check-input theme-choice" type="checkbox" id="dark-rtl-mode-switch" />
          <label className="form-check-label" htmlFor="dark-rtl-mode-switch">Dark RTL Mode</label>
        </div>
      </div>
    </div> {/* end slimscroll-menu*/}
  </div>
</div>

    </div>
  )
}

export default AdminSide