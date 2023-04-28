import axios from 'axios'
import jwtDecode from 'jwt-decode'
import moment from 'moment/moment'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AllConsignment = () => {
    const [verify, setverify] = useState([])
    const name = useParams()

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [consign,setConsign] = useState([])
    const [account,setAccount] = useState([])
    const[allConsign,setallConsign] = useState({
        consignmentId:consign._id,
        etas:consign.eta,
        ETB:"",
        Timing:""
    })
    useEffect(()=>{
        const auth = localStorage.getItem('auth')
        if (auth === null) {
        } else {
            const decord = jwtDecode(auth)
            setverify(decord)
        }
    },[])
   

    const [inputlist, setinputlist] = useState([{
        recivername: "",
        cargotype: "",
        cargoquantity: "",
    }])



    const handleinputchanger = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputlist];
        list[index][name] = value;
        setinputlist(list);
    }

    const addMore = (e) => {
        e.preventDefault();
        setinputlist([...inputlist, {
            recivername: "",
            cargotype: "",
            cargoquantity: "",
        }])
    }



    useEffect(() => {
        
        axios.get(`/consignment/oneconsignment/${name.id}`)
        .then((res)=>{
            setConsign(res.data)
            setallConsign({...allConsign,etas:res.data.eta,consignmentId:res.data._id})
        }).catch((res)=>{
  
        })
         axios.get(`/allconsignment/oneconsign/${name.id}`)
        .then((res)=>{
            console.log(res.data);
        }).catch((res)=>{
  
        })
      
    }, [])


    const handleData = (e) => {
        setallConsign({ ...allConsign, [e.target.name]: e.target.value })
    }


    const submit = e => {
        e.preventDefault()  
        axios.post(`/allconsignment/newallconsignment`,{data:allConsign,inputlist:inputlist})
        // axios
        //     .put(`/broker/updatebroker/${name.id}`, broker)
        //     .then(res => {
        //         window.location = '/broker'
        //     })
        //     .catch(res => {
        //         toast.error(res.response.data, {
        //             position: toast.POSITION.TOP_CENTER
        //         })
        //     })
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
                                value={consign.port}
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
                                value={consign.vesselName}
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
                                value={consign.vogNumber}
                                required
                            />
                        </div>
                    </div>
                                
                                    <div className='row mb-3'>
                                    <label htmlFor='' className='col-sm-2 col-form-label'>
                                        ETA
                                    </label>
                                    <div className='col-sm-10'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='etas'
                                            id=''
                                            value={allConsign.etas}
                                            onChange={handleData}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <label htmlFor='' className='col-sm-2 col-form-label'>
                                        ETB
                                    </label>
                                    <div className='col-sm-10'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='ETB'
                                            id='etb'
                                            value={allConsign.ETB}
                                            onChange={handleData}
                                            required
                                        />
                                    </div>
                                </div>
                                {inputlist.map((x, i) => {
                                    return (
                                        <>
                                            <div className='row mb-3'>
                                                <label htmlFor='' className='col-sm-2 col-form-label'>
                                                    Reciver Name
                                                </label>
                                                <div className='col-sm-10'>
                                                    <input
                                                        type='email'
                                                        className='form-control'
                                                        name='recivername'
                                                        id=''
                                                        value={inputlist.recivername}
                                                        onChange={e => handleinputchanger(e, i)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className='row mb-3'>
                                                <label htmlFor='' className='col-sm-2 col-form-label'>
                                                    Cargo Type
                                                </label>
                                                <div className='col-sm-10'>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        name='cargotype'
                                                        id=''
                                                        value={inputlist.cargotype}
                                                        onChange={e => handleinputchanger(e, i)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className='row mb-3'>
                                                <label htmlFor='' className='col-sm-2 col-form-label'>
                                                    Cargo Qunatity
                                                </label>
                                                <div className='col-sm-10'>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        name='cargoquantity'
                                                        id=''
                                                        value={inputlist.cargoquantity}
                                                        onChange={e => handleinputchanger(e, i)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                                }
                                <div className='row mb-3'>
                                    <label htmlFor='' className='col-sm-2 col-form-label'>
                                        Timing
                                    </label>
                                    <div className='col-sm-10'>
                                    <select name="Timing" className='form-control' onChange={handleData} >
                                        <option hidden>--select timer--</option>
                                        <option value='sailed'>sailed</option>  
                                    </select>
                                    </div>
                                </div>
                    <div className='d-flex justify-content-between'>
                        <button type='submit' className='btn btn-primary' onClick={submit}>
                            Add Data
                        </button>
                                <button type="submit" className="btn btn-primary mx-5" onClick={addMore} >
                                    Add more
                                </button> 
                    </div>
                </form>
            </div>
            <ToastContainer className={' mb-7'} />
        </div>
    )
}

export default AllConsignment
