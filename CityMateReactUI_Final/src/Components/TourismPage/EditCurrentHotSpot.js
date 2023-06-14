import React,{useState,useEffect} from 'react';
import axios from "axios";
import base_url from "../../Services/TourismApiService";
import { Link} from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import BorderColorIcon from '@material-ui/icons/BorderColor';


function EditCurrentHotSpot() {
  
  const [currenthotspot,setCurrentHotSpot]=useState([]);
  useEffect(()=>{
    loadCurrentHotSpot();
  }, []);
  
  const loadCurrentHotSpot = async () => {
    const result = await axios.get(`${base_url}/CurrentHotSpot`);
    console.log("result", result.data);

    setCurrentHotSpot(result.data);
  }
   
  

  const deleteCurrentHotSpot = async id=>{
      await axios.delete(`${base_url}/CurrentHotSpot/${id}`);
      loadCurrentHotSpot();
  }
   
  return (
   <div >
    <Link className="btn btn-outline-warning" to="/addCurrentHotSpot"><AddCircleOutlineIcon/> Add Current HotSpot</Link>
    <table className="table border shadow">
    <thead className="bg-warning">
    <tr >
      <th scope="col">Id</th>
      <th scope="col">placeName</th>
      <th scope="col">address</th>
      <th scope="col">timings</th>
      <th scope="col">days</th>
      <th scope="col">description</th>
      <th scope="col">contactDetails</th>
      <th scope="col">entryFee</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody >
    {
      currenthotspot.map((currenthotspot,index)=>(
      // console.log("S",currenthotspot),
        <tr key={currenthotspot.id} className="table-warning">
        <th scope='row'>{index +1}</th>
        <td>{currenthotspot.placeName}</td>
        <td>{currenthotspot.address}</td>
        <td>{currenthotspot.timings}</td>
        <td>{currenthotspot.days}</td>
        <td>{currenthotspot.description}</td>
        <td>{currenthotspot.contactDetails}</td>
        <td>{currenthotspot.entryFee}</td>
        <td style={{width:'200px'}}>
        <Link className="btn btn-primary" to={`/view/currenthotspot?id=${currenthotspot.placeId}`}><VisibilityIcon/></Link>
        <Link className="btn btn-outline-primary" to={`/update/currentHotspot?id=${currenthotspot.placeId}`}><BorderColorIcon/></Link>
        <Link className="btn btn-outline-danger" to={`/currentHotspot`} onClick={()=>deleteCurrentHotSpot(currenthotspot.placeId)}><DeleteIcon/></Link>
        </td>
        </tr>
      ))
    }
  </tbody>
</table>
</div>
  )
}

export default EditCurrentHotSpot;