import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const NewConsignment = () => {

    const [consignment, setconsignment] = useState([])
    const [search, setSearech] = useState([])
    useEffect(() => {
      axios.get('/consignment/viewconsignment').then(res => {
        setconsignment(res.data)
        setSearech(res.data)
      })
    }, [])
  
    // const searchHandaler =(e) => {
    //   if (e.target.value == '') {
    //     setSearech(consignment)
    //   } else {
    //     const filterData = consignment.filter(data =>
    //       data..toLowerCase().includes(e.target.value.toLowerCase())
    //     )
    //     setSearech(filterData)
    //   }
    // }
  
    const delet = (e)=>{
      axios.delete(`/consignment/${e}`)
      .then((res)=>{
          window.location.reload()
      }).catch((res)=>{
  
      })
    }
  
    var i = 1;

  return (
    <div className='main-content'>
      <div className='page-content'>
        <div class='col'>
          <div className='card'>
            <div className='card-body'>
              <div className='d-flex justify-content-between'>
                <h4 className='card-title'>Consignment table</h4>
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
                <Link to={'/addnewconsignment'} className='btn btn-primary vesel'>
                  Add New Consignment
                </Link>
              </div>

              <div className='table-responsive'>
                <table className='table table-borderless mb-0'>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Port Name</th>
                      <th>Vessel Name</th>
                      <th>Vogye Number</th>
                      <th>Chartarer</th>
                      <th>Broker</th>
                      <th>EPDA Amount</th>
                      <th>ETA</th>
                      <th>Owner NAme</th>
                      <th>operation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {search.map(data => (
                      <tr>
                        <th scope='row'>{i++}</th>
                        <td>{data.port}</td>
                        <td>{data.vesselName}</td>
                        <td>{data.vogNumber}</td>
                        <td>{data.charter}</td>
                        <td>{data. broker}</td>
                        <td>{data.epda}</td>
                        <td>{data.eta}</td>
                        <td>{data.ownerName}</td>
                        <td>
                          <button className='btn btn-danger mx-2' onClick={()=>{delet(data._id)}}>Delete</button>
                          <Link to={`/editconsignment/${data._id}`}><button className='btn btn-success mx-2'>Edit</button></Link>
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
    </div>
  )
}

export default NewConsignment