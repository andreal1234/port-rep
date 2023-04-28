
import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const EditAccount = () => {
    const name = useParams();
const [vessel,setvessel] = useState([])
    const [account, setaccount] = useState({
        consignmentId:name.id,
        advanceamount: '',
        Adddate: '',
        invoiceamount: '',
        inndate: '',
        reciveamount: '',
        rdate: '',
      })

      
      
    useEffect(()=>{
        axios.get(`/consignment/oneconsignment/${name.id}`)
        .then((res)=>{
            setvessel(res.data);
        }).catch((res)=>{

        })
        axios.get(`/account/oneAccount/${name.id}`)
        .then((res)=>{
            var Adddate1,inndate1,rdate1
                { res.data.Adddate ? Adddate1 = moment(res.data.Adddate).format("YYYY-MM-DD"):Adddate1=""}
                { res.data.inndate? inndate1 = moment(res.data.inndate).format("YYYY-MM-DD"):inndate1=""}
                {res.data.rdate? rdate1 = moment(res.data.rdate).format("YYYY-MM-DD"):rdate1=""}
            setaccount({...account,advanceamount:res.data.advanceamount,Adddate:Adddate1,invoiceamount:res.data.invoiceamount,inndate:inndate1,reciveamount:res.data.reciveamount,rdate:rdate1});
        }).catch((res)=>{

        })

    },[])

    const handleData = (e)=>{
        setaccount({...account,[e.target.name]:e.target.value,consignmentId:name.id})
    }
    const submit=(e)=>{
        e.preventDefault();
        console.log(account);
        axios.post(`/account/newAccount`,account)
        .then((res)=>{
            window.location = "/"
        }).catch((res)=>{
            window.location = "/"
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
                                value={vessel.port}
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
                                value={vessel.vesselName}
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
                                value={vessel.vogNumber}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                                <div className='row col-6'>
                                    <label htmlFor='' className='col-sm-4 col-form-label'>
                                        All Amount
                                    </label>
                                    <div className='col-sm-8'>
                                        <input
                                            type='number'
                                            className='form-control'
                                            name='advanceamount'
                                            id=''
                                            value={vessel.epda}
                                            required
                                        />
                                    </div>
                                </div>
                             </div>
                            <div className='row mb-3'>
                                <div className='row col-6'>
                                    <label htmlFor='' className='col-sm-4 col-form-label'>
                                        Advance Amount
                                    </label>
                                    <div className='col-sm-8'>
                                        <input
                                            type='number'
                                            className='form-control'
                                            name='advanceamount'
                                            id=''
                                            value={account.advanceamount}
                                            onChange={handleData}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='row col-6'>
                                    <label htmlFor='' className='col-sm-2 col-form-label'>
                                        Date
                                    </label>
                                    <div className='col-sm-8'>
                                        <input
                                            type='date'
                                            className='form-control'
                                            name='Adddate'
                                            id=''
                                            value={account.Adddate}
                                            onChange={handleData}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div className='row col-6'>
                                    <label htmlFor='' className='col-sm-4 col-form-label'>
                                        Invoice Amount
                                    </label>
                                    <div className='col-sm-8'>
                                        <input
                                            type='number'
                                            className='form-control'
                                            name='invoiceamount'
                                            id=''
                                            value={account.invoiceamount}
                                            onChange={handleData}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='row col-6'>
                                    <label htmlFor='' className='col-sm-2 col-form-label'>
                                        Date
                                    </label>
                                    <div className='col-sm-8'>
                                        <input
                                            type='date'
                                            className='form-control'
                                            name='inndate'
                                            id=''
                                            value={account.inndate}
                                            onChange={handleData}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div className='row col-6'>
                                    <label htmlFor='' className='col-sm-4 col-form-label'>
                                        Amount Recive
                                    </label>
                                    <div className='col-sm-8'>
                                        <input
                                            type='number'
                                            className='form-control'
                                            name='reciveamount'
                                            value={account.reciveamount}
                                            onChange={handleData}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='row col-6'>
                                    <label htmlFor='' className='col-sm-2 col-form-label'>
                                        Date
                                    </label>
                                    <div className='col-sm-8'>
                                        <input
                                            type='date'
                                            className='form-control'
                                            name='rdate'
                                            id=''
                                            value={account.rdate}
                                            onChange={handleData}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
          <button type='submit' className='btn btn-primary' onClick={submit}>
            Add Account
          </button>
        </form>
      </div>
      <ToastContainer className={' mb-7'} />
    </div>
  )
}

export default EditAccount