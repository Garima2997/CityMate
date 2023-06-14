import React,{useState,useEffect} from 'react';
import axios from "axios";
import base_url from "../../Services/TourismApiService";
import { Link} from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import BorderColorIcon from '@material-ui/icons/BorderColor';


function EditHistoricalPlaces() {
  
  const [historicalplaces,setHistoricalPlaces]=useState([]);
  useEffect(()=>{
    loadHistoricalPlaces();
  },[]);
  const loadHistoricalPlaces = async () =>{
    const result = await axios.get(`${base_url}/HistoricalPlaces`);
    console.log(result.data)
    
    setHistoricalPlaces(result.data);
  }

  const deleteHistoricalPlaces = async id=>{
    await axios.delete(`${base_url}/HistoricalPlaces/${id}`);
    loadHistoricalPlaces();
  }
   
  return (
   <div >
    <Link className="btn btn-outline-warning" to="/addHistoricalPlaces"><AddCircleOutlineIcon/> Add Historical Places</Link>
    <table className="table border shadow">
    <thead className="bg-warning">
    <tr >
      <th scope="col">PlaceId</th>
      <th scope="col">PlaceName</th>
      <th scope="col">Address</th>
      <th scope="col">Timings</th>
      <th scope="col">Days</th>
      <th scope="col">Description</th>
      <th scope="col">ContactDetails</th>
      <th scope="col">Entry Fee</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody >
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
        <td style={{width:'200px'}}>
        <Link className="btn btn-primary" to={`/view/historicalHotspot?id=${historicalplaces.hPlaceId}`}><VisibilityIcon/></Link>
        <Link className="btn btn-outline-primary" to={`/update/historicalHotspot?id=${historicalplaces.hPlaceId}`}><BorderColorIcon/></Link>
        <Link className="btn btn-danger" to={`historicalPlaces`} onClick={()=>deleteHistoricalPlaces(historicalplaces.hPlaceId)}><DeleteIcon/></Link>
        </td>
        </tr>
      ))
    }
  </tbody>
</table>
</div>
  )
}

export default EditHistoricalPlaces;