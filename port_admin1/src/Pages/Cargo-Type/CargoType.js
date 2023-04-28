
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CargoType = () => {
  const [CargoType, setCargoType] = useState([])
  const [search, setSearech] = useState([])
  useEffect(() => {
    axios.get('/cargo/viewCargo').then(res => {
      setCargoType(res.data)
      setSearech(res.data)
    })
  }, [])

  const searchHandaler =(e) => {
    if (e.target.value == '') {
      setSearech(CargoType)
    } else {
      const filterData = CargoType.filter(data =>
        data.email.toLowerCase().includes(e.target.value.toLowerCase())
      )
      setSearech(filterData)
    }
  }

  const delet = (e)=>{
    axios.delete(`/cargo/${e}`)
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
                <h4 className='card-title'>Customer table</h4>
                <form className='app-search d-none d-lg-block pt-0'>
                  <div className='position-relative'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Search...'
                      onChange={searchHandaler}
                    />
                    <span className='bx bx-search-alt' />
                  </div>
                </form>
                <Link to={'/addcargotype'} className='btn btn-primary vesel'>
                  Add CargoType
                </Link>
              </div>

              <div className='table-responsive'>
                <table className='table table-borderless mb-0'>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>CPO</th>
                      <th>CPOLN</th>
                      <th>RBD</th>
                      <th>CDSBO</th>
                      <th>PFAD</th>
                      <th>Operation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {search.map(data => (
                      <tr>
                        <th scope='row'>{i++}</th>
                        <td>{data.cpo}</td>
                        <td>{data.cpoln}</td>
                        <td>{data.rbd}</td>
                        <td>{data.cdsbo}</td>
                        <td>{data.pfad}</td>
                        <td>
                          <button className='btn btn-danger mx-2' onClick={()=>{delet(data._id)}}>Delete</button>
                          <Link to={`/editcargotype/${data._id}`}><button className='btn btn-success mx-2'>Edit</button></Link>
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

export default CargoType
