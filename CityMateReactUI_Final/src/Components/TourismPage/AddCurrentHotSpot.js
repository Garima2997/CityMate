import React,{useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import base_url from "../../Services/TourismApiService";

const AddCurrentHotSpot = () => {
   let history = useHistory();
    const [currenthotspot,setCurrentHotSpot]=useState({
	 placeId:"",
	 placeName:"",
	 address:"",
	 timings:"",
	 days:"",
	 contactDetailscription:"",
	 contactDetails:"",
	 entryFee:""
    });
    const {placeName,address,timings,days,contactDetails,entryFee}=currenthotspot;
    const onInputChange = e =>{
        setCurrentHotSpot({...currenthotspot,[e.target.name]:e.target.value});
    };

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post(`${base_url}/CurrentHotSpot`,currenthotspot);
        history.push("/currentHotspot")
    }
    return (
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add CurrentHotSpot</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter Current HotSpot Name"
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
        <button className="btn btn-primary btn-block">Add</button>
        </form>
        </div>
        </div>
    )
}
export default AddCurrentHotSpot;