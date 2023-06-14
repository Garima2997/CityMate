import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import queryString from "query-string";
import base_url from "../../Services/TourismApiService";
 
const ViewHistoricalPlaces = () => {
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
     const { id } = queryString.parse(window.location.search);
    useEffect(() => {
        const loadHistoricalPlaces = async ()=>{
            const result = await axios.get(`${base_url}/HistoricalPlaces/${id}`);
            console.log(result.data)
            setHistoricalPlaces(result.data)
        }
        loadHistoricalPlaces();
        },[id])
  
    return (
        <div className="container py-4">
       
        <h1 className="display-4">Name:{historicalplaces.hPlaceName}</h1>
        <hr/>
        <ul className="list-group w-50">
        <li className="list-group-item"> PlaceName {historicalplaces.hPlaceName}</li>
         <li className="list-group-item"> Address {historicalplaces.hAddress}</li>
        <li className="list-group-item"> Timings {historicalplaces.hTimings}</li>
        <li className="list-group-item"> Days {historicalplaces.hDays}</li>
        <li className="list-group-item"> Description {historicalplaces.hDescription}</li>
        <li className="list-group-item"> ContactDetails {historicalplaces.hContactDetails}</li>
        <li className="list-group-item"> Entry Fee {historicalplaces.hentryFee}</li>
        </ul>
        <br />
        <Link className="btn btn-primary" to="/historicalPlaces">back to home</Link>
        </div>
    )
}
export default ViewHistoricalPlaces;