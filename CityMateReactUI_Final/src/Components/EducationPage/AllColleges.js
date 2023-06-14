
import React,{useState,useEffect} from 'react';
import axios from "axios";
import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import base_url from "../../Services/EducationApiService.js";
import {Link } from "react-router-dom";
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Footer from '../Footer/Footer'
import Contact from '../Footer/Contact.js';
function AllColleges() {

  const [colleges,setCollege]=useState([]);
  useEffect(()=>{
    loadColleges();
  }, []);
  
  const loadColleges = async () =>{
    const result = await axios.get(`${base_url}/colleges`);
    setCollege(result.data);
  }
  return (
    <div >
    <Link className="btn btn-outline-warning" to={`/education`} ><AssignmentReturnIcon/> Back</Link>
      <table className="table border shadow">
      <thead className="bg-warning">
    <tr>
      <th scope="col">Id</th>
      <th scope="col" >College Image</th>
      <th scope="col">College Name</th>
      <th scope="col">Principal</th>
      <th scope="col">Courses</th>
      <th scope="col">TelephoneNo</th>
      <th scope="col">College Website</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      colleges.map((college,index)=>(
        <tr key={college.id} className="table-warning">
        <th scope='row'>{index +1}</th>
          <td ><img src={college.imgPath} style={{ height: "200px", width: "250px" }} alt={ college.collegeName}/></td>
        <td>{college.collegeName}</td>
        <td>{college.principalName}</td>
        <td>{college.courses}</td>
        <td>{college.telephoneNo}</td>
        <td  style={{color:"blue"}} onClick={()=>window.open(`${college.collegeWebsite}`)}>{college.collegeWebsite}</td>
       
        <td><Link className="btn btn-outline-primary" to={`/colleges/view/${college.id}`}><VisibilityIcon/></Link></td>
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

export default AllColleges;
