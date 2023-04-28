import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'

const CompleteConsignment = () => {
    const[complete,setComplete] = useState([])

    useEffect(()=>{
        axios.get("/allconsignment/viewAllconsignmentetatrue")
        .then((res)=>{
            console.log(res.data);
            setComplete(res.data);
        })
    },[])
    var i=0;
  return (
    <div className='main-content'>
      <div className='page-content'>
        <div class='col'>
          <div className='card'>
            <div className='card-body'>
              <div className='d-flex justify-content-between'>
                <h4 className='card-title'>Customer table</h4>
                {/* <form className='app-search d-none d-lg-block pt-0'>
                  <div className='position-relative'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Search...'
                      onChange={searchHandaler}
                    />
                    <span className='bx bx-search-alt' />
                  </div>
                </form> */}
              </div>

              <div className='table-responsive'>
                <table className='table table-borderless mb-0'>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Port</th>
                      <th>vessel Name/Number</th>
                      <th>Eta Time</th>
                      <th>Reciver Name</th>
                      <th>Epda</th>
                      <th>Owner Name</th>
                      <th>Advance Amount</th>
                      <th>Advance Date</th>
                      <th>Invoice Amount</th>
                      <th>Invoice Date</th>
                      <th>Recive Amount</th>
                      <th>Recive Date</th>
                      <th>ETB Time</th>

                    </tr>
                  </thead>
                  <tbody>
                    {complete.map(data => (
                      <tr>
                        <th scope='row'>{i++}</th>
                        <td>{data.consignmentId.port}</td>
                        <td>{data.consignmentId.vesselName}</td>
                        <td>{data.etas}</td>
                        <td>{data.recivername}</td>
                        <td>{data.consignmentId.epda}</td>
                        <td>{data.consignmentId.ownerName}</td>
                        <td>{data.accountId.advanceamount}</td>
                        <td>{data.accountId.Adddate?moment(data.accountId.Adddate).format("YYYY-MM-DD"):""}</td>
                        <td>{data.accountId.invoiceamount}</td>
                        <td>{data.accountId.inndate?moment(data.accountId.inndate).format("YYYY-MM-DD"):""}</td>
                        <td>{data.accountId.reciveamount}</td>
                        <td>{data.accountId.rdate?moment(data.accountId.rdate).format("YYYY-MM-DD"):""}</td>
                        <td>{data.ETB}</td>
                        <td>{data.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompleteConsignment