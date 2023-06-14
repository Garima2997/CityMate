import React,{useState} from 'react';
import axios from 'axios';
import {useHistory } from "react-router-dom";
import base_url from "../../Services/TourismApiService";

const AddHistoricalPlaces= () => {
   let history = useHistory();
    const [historicalplaces,setHistoricalPlaces]=useState({
	hPlaceId: "",
	hPlaceName: "",
	hAddress: "",
	hTimings: "",
	hDays: "",
	hDescription: "",
	hContactDetails: "",
	hentryFee: ""
    });
    const {	hPlaceName,hAddress,hTimings,hDays,hContactDetails,hentryFee}=historicalplaces;
    const onInputChange = e =>{
        setHistoricalPlaces({...historicalplaces,[e.target.name]:e.target.value});
    };

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post(`${base_url}/HistoricalPlaces`,historicalplaces);
        history.push("/historicalPlaces")
    }
    return (
       <div className="container">
        <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Historical Place</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
         placeholder="Enter Historical Places Name"
        name="hPlaceName"
        value={hPlaceName}
        onChange={e=>onInputChange(e)}
        />
        </div>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter hAddress"
        name="hAddress"
        value={hAddress}
        onChange={e=>onInputChange(e)}
        />
        </div>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter hTimings"
        name="hTimings"
        value={hTimings}
        onChange={e=>onInputChange(e)}
        />
        </div>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter Days"
        name="hDays"
        value={hDays}
        onChange={e=>onInputChange(e)}
        />
        </div>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter Contact Details"
        name="hContactDetails"
        value={hContactDetails}
        onChange={e=>onInputChange(e)}
        />
        </div>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter Entry Fee"
        name="hentryFee"
        value={hentryFee}
        onChange={e=>onInputChange(e)}
        />
        </div>
        <button className="btn btn-primary btn-block">Add </button>
        </form>
        </div>
        </div>
    )
}
export default AddHistoricalPlaces;