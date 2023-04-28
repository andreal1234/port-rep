import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ShowPort = () => {
  const name = useParams()
    const [broker, setBroker] = useState([])
    const[vesel,setvessel]= useState([])
  const [search, setSearech] = useState([])
  useEffect(() => {
    axios.get("/allconsignment/viewAllconsignmenteta").then(res => {
      setBroker(res.data)
      setSearech(res.data)
      console.log(res.data);
    })
  }, [])

  const searchHandaler =(e) => {
    if (e.target.value == '') {
      setSearech(broker)
    } else {
      const filterData = broker.filter(data =>
        data.email.toLowerCase().includes(e.target.value.toLowerCase())
      )
      setSearech(filterData)
    }
  }

  const delet = (e)=>{
    axios.delete(`/allconsignment/${e}`)
    .then((res)=>{
        window.location='/'
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
              <h4 className='card-title'>Port table</h4>
              
              <Link to={`/addport/${name.id}`} className='btn btn-primary vesel'>
                Add Port
              </Link>
            </div>

            <div className='table-responsive'>
              <table className='table table-borderless mb-0'>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Port Name</th>
                    <th>Vessel Name</th>
                    <th>Vessel Number</th>
                    <th> ETA</th>
                    <th> ETB</th>
                    <th> Reciver Name</th>
                    <th>Cargo Type</th>
                    <th>Cargo Qunatity</th>
                    <th> Timing</th>
                    <th>operation</th>
                  </tr>
                </thead>
                <tbody>
                  {search.map(data => (
                    <tr>
                      <th scope='row'>{i++}</th>
                      <td>{data.consignmentId.port}</td>
                      <td>{data.consignmentId.vesselName}</td>
                      <td>{data.consignmentId.vogNumber}</td>
                      <td>{data.etas}</td>
                      <td>{data.ETB}</td>
                      <td>{data.recivername}</td>
                      <td>{data.cargotype}</td>
                      <td>{data.cargoquantity}</td>
                      <td>{data.Timing}</td>
                      <td>
                        <button className='btn btn-danger mx-2' onClick={()=>{delet(data._id)}}>Delete</button>
                        <Link to={`/portshowedit/${data._id}`}><button className='btn btn-success mx-2'>Edit</button></Link>
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

export default ShowPort