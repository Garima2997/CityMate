
import React,{useState,useEffect} from 'react';
import axios from "axios";
// import './AdminiApp.css';
// import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import base_url from "../../Services/TourismApiService";
import {useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';

function AllHistoricalPlaces() {
  let history = useHistory();
  const [historicalplaces,setHistoricalPlaces]=useState([]);
  useEffect(()=>{
    loadHistoricalPlaces();
  },[]);
  const loadHistoricalPlaces = async () =>{
    const result = await axios.get(`${base_url}/historicalplaces`);
    setHistoricalPlaces(result.data);
  }
  return (
    <div >
    <Link className="btn btn-outline-warning" to={`/Tourism`} ><AssignmentReturnIcon/> Back</Link>
      <table className="table border shadow">
  <thead className="bg-warning">
    <tr>
      <th scope="col">hPlaceId</th>
      <th scope="col">hPlaceName</th>
      <th scope="col">hAddress</th>
      <th scope="col">hTimings</th>
      <th scope="col">hDays</th>
      <th scope="col">hDescription</th>
      <th scope="col">hContactDetails</th>
      <th scope="col">hentryFee</th>
    </tr>
  </thead>
  <tbody>
    {
      historicalplaces.map((historicalplaces,index)=>(
        <tr key={historicalplaces.id} className="table-warning">
        <th scope='row'>{index +1}</th>
        <td>{historicalplaces.hPlaceName}</td>
        <td>{historicalplaces.hAddress}</td>
        <td>{historicalplaces.hTimings}</td>
        <td>{historicalplaces.hDays}</td>
        <td>{historicalplaces.hDescription}</td>
        <td>{historicalplaces.hContactDetails}</td>
        <td>{historicalplaces.hentryFee}</td>
        </tr>
      ))
    }
  </tbody>
</table>
    </div>
  )
}

export default AllHistoricalPlaces;
