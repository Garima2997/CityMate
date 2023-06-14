
import React,{useState,useEffect} from 'react';
import axios from "axios";
import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import base_url from "../../Services/EducationApiService.js";
import { Link } from 'react-router-dom';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Footer from '../Footer/Footer'
import Contact from '../Footer/Contact.js';
function AllSchools() {

  const [schools,setSchool]=useState([]);
  
  useEffect(() => {
    loadSchools();
  },[]);
  const loadSchools = async () =>{
    const result = await axios.get(`${base_url}/schools`);
    setSchool(result.data);
  }
  return (
    <div >
    <Link className="btn btn-outline-warning" to={`/education`} ><AssignmentReturnIcon/> Back</Link>
      <table className="table border shadow" >
  <thead  className="bg-warning">
    <tr >
      <th scope="col" >Id</th>
      <th scope="col" >School Image</th>
      <th scope="col">School Name</th>
      <th scope="col">Principal</th>
      <th scope="col">Board</th>
      <th scope="col">TelephoneNo</th>
      <th scope="col">School Website</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      schools.map((school,index)=>(
        <tr key={school.id} className="table-warning" style={{width:"500px"}}>
        <th scope='row'>{index +1}</th>
          <td ><img src={school.imgPath} style={{ height: "200px", width: "250px" }} alt={school.schoolName}/></td>
        <td >{school.schoolName}</td>
        <td >{school.principalName}</td>
        <td >{school.boardName}</td>
          <td>{school.telephoneNo}</td>
          <td  style={{color:"blue"}} onClick={()=>window.open(`${school.schoolWebsite}`)}>{school.schoolWebsite}</td>
       
          <td>
          <Link className="btn btn-outline-primary" to={`/schools/view/${school.id}`}><VisibilityIcon /></Link>
          </td>
        </tr>
      ))
    }
  </tbody>
</table>
<Contact /> 
        <Footer />
    </div>
  )
}

export default AllSchools
