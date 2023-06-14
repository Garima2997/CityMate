import React,{useState,useEffect} from 'react';
import axios from "axios";
// import './AdminiApp.css';
// import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import base_url from "../../Services/TourismApiService";
import {useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';

function AllCurrentHotSpot() {
  let history = useHistory();
  const [currenthotspot,setCurrentHotSpot] =useState([]);
  useEffect(()=>{
    loadCurrentHotSpot();
  },[]);
  const loadCurrentHotSpot = async () =>{
   const result = await axios.get(`${base_url}/currenthotspot`);
    
    setCurrentHotSpot(result.data);
  }
  return (
    <div >
    <Link className="btn btn-outline-warning" to={`/Tourism`} ><AssignmentReturnIcon/> Back</Link>
      <table className="table border shadow">
  <thead  className="bg-warning">
    <tr >
      <th scope="col">placeId</th>
      <th scope="col">placeName</th>
      <th scope="col">address</th>
      <th scope="col">timings</th>
      <th scope="col">days</th>
      <th scope="col">description</th>
      <th scope="col">contactDetails</th>
      <th scope="col">entryFee</th>
    </tr>
  </thead>
  <tbody>
    {
      currenthotspot.map((currenthotspot,index)=>(
        <tr key={currenthotspot.id} className="table-warning">
        <th scope='row'>{index +1}</th>
        <td >{currenthotspot.placeName}</td>
        <td >{currenthotspot.address}</td>
        <td >{currenthotspot.timings}</td>
        <td >{currenthotspot.days}</td>
        <td >{currenthotspot.description}</td>
        <td>{currenthotspot.contactDetails}</td>
        <td>{currenthotspot.entryFee}</td>
        </tr>
      ))
    }
  </tbody>
</table>
    </div>
  )
}

export default AllCurrentHotSpot;
