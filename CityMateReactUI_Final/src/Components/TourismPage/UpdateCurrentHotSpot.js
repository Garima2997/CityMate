import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useHistory } from "react-router-dom";
 import base_url from "../../Services/TourismApiService";
 import queryString from "query-string";
const UpdateCurrentHotSpot = () => {
   let history = useHistory();
   const { id } = queryString.parse(window.location.search);
   console.log(id);
    const [currenthotspot,setCurrentHotSpot]=useState({
	 placeId:"",
	 placeName:"",
	 address:"",
	 timings:"",
	 days:"",
	 contactDetails:"",
	 entryFee:""
    });
    const {	 placeName,address,timings,days,contactDetails,entryFee}=currenthotspot;
    const onInputChange = e =>{
        setCurrentHotSpot({...currenthotspot,[e.target.name]:e.target.value});
    };
    
    useEffect(() => {
        const loadCurrentHotSpot = async ()=>{
            const result = await axios.get(`${'aman'}/currenthotspot/${id}`);
            setCurrentHotSpot(result.data)
        }

        loadCurrentHotSpot();
    }, [id])
    
    const onSubmit = async e =>{
        e.preventDefault();
        await axios.put(`${base_url}/CurrentHotSpot/${id}`,currenthotspot);
        history.push("/currentHotspot")
    }
    
    return (
        <div className="container" >
        <div className="w-75 mx-auto shadow p-5" >
        <h2 className="text-center mb-4">Update CurrentHotSpot</h2>
        <form onSubmit={e => onSubmit(e)} >
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter CurrentHotSpot Name"
        name="placeName"
        value={placeName}
        onChange={e=>onInputChange(e)}
        />
        </div>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter Address"
        name="address"
        value={address}
        onChange={e=>onInputChange(e)}
        />
        </div>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter Timings"
        name="timings"
        value={timings}
        onChange={e=>onInputChange(e)}
        />
        </div>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter Days"
        name="days"
        value={days}
        onChange={e=>onInputChange(e)}
        />
        </div>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter contactDetails"
        name="contactDetails"
        value={contactDetails}
        onChange={e=>onInputChange(e)}
        />
        </div>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter Contact Details"
        name="contactDetails"
        value={contactDetails}
        onChange={e=>onInputChange(e)}
        />
        </div>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter Entry Fee"
        name="entryFee"
        value={entryFee}
        onChange={e=>onInputChange(e)}
        />
        </div>
        <button className="btn btn-warning btn-block">Update</button>
        </form>
        </div>
        </div>
    )
}
export default UpdateCurrentHotSpot;