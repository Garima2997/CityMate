import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useHistory} from "react-router-dom";
 import queryString from "query-string";
 import base_url from '../../Services/TourismApiService';
const UpdateHistoricalPlaces = () => {
   let history = useHistory();
     const { id } = queryString.parse(window.location.search);
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
    const {	hPlaceName,hAddress,hTimings,hDays,hDescription,hContactDetails,hentryFee}=historicalplaces;
    const onInputChange = e =>{
        setHistoricalPlaces({...historicalplaces,[e.target.name]:e.target.value});
    };

    useEffect(() => {
    loadHistoricalPlaces();
    }, [])
    
    const onSubmit = async e =>{
        e.preventDefault();
       const a = await axios.put(`${base_url}/HistoricalPlaces/${id}`,historicalplaces);
       console.log(a)
        history.push("/historicalPlaces")
    }

    const loadHistoricalPlaces = async ()=>{
        const result = await axios.get(`${base_url}/HistoricalPlaces/${id}`);
        setHistoricalPlaces(result.data)
    }
    return (
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update HistoricalPlaces</h2>
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
        placeholder="Enter Address "
        name="hAddress"
        value={hAddress}
        onChange={e=>onInputChange(e)}
        />
        </div>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter Timing"
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
        placeholder="Enter Description"
        name="hDescription"
        value={hDescription}
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
        <button className="btn btn-warning btn-block">Update HistoricalPlaces</button>
        </form>
        </div>
        </div>
    )
}
export default UpdateHistoricalPlaces