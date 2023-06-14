import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
 import queryString from "query-string";
import base_url from "../../Services/TourismApiService";
 
const ViewCurrentHotSpot = () => {
    const [currenthotspot,setCurrentHotSpot]=useState({
	 placeId:"",
	 placeName:"",
	 address:"",
	 timings:"",
	 days:"",
	 description:"",
	 contactDetails:"",
	 entryFee:""
    });
      const { id } = queryString.parse(window.location.search);
    useEffect(() => {
        loadCurrentHotSpot();
        },[])
    const loadCurrentHotSpot = async ()=>{
        const result = await axios.get(`${base_url}/CurrentHotSpot/${id}`);
        console.log(result.data)
        setCurrentHotSpot(result.data)
    }
    return (
        <div className="container py-4">
        
        <h1 className="display-4">Name: {currenthotspot.placeName}</h1>
        <hr/>
        <ul className="list-group w-50">
        <li className="list-group-item"> place name: {currenthotspot.placeName}</li>
        <li className="list-group-item"> address : {currenthotspot.address}</li>
        <li className="list-group-item"> timings : {currenthotspot.timings}</li>
        <li className="list-group-item"> days : {currenthotspot.days}</li>
        <li className="list-group-item"> description: {currenthotspot.description}</li>
        <li className="list-group-item"> contactDetails: {currenthotspot.contactDetails}</li>
        <li className="list-group-item"> entryFee: {currenthotspot.entryFee}</li>
            </ul>
        <br />
        <Link className="btn btn-primary" to="/currentHotspot">back to home</Link>

        </div>
    )
}
export default ViewCurrentHotSpot