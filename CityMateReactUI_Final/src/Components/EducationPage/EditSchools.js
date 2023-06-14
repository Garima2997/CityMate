
import React,{useState,useEffect} from 'react';
import axios from "axios";
import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import base_url from "../../Services/EducationApiService.js";
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import BorderColorIcon from '@material-ui/icons/BorderColor';


function EditSchools() {
  
  const [schools,setSchool]=useState([]);
  useEffect(()=>{
    loadSchools();
  }, []);
  
  const loadSchools = async () =>{
    const result = await axios.get(`${base_url}/schools`);
    setSchool(result.data);
  }

  const deleteSchool = async id=>{
  await axios.delete(`${base_url}/schools/${id}`);
  loadSchools();
  }
   
  return (
   <div >
    <Link className="btn btn-outline-warning" to="/schools/add"><AddCircleOutlineIcon/> Add School</Link>
    <table className="table border shadow">
    <thead className="bg-warning">
    <tr >
      <th scope="col">Id</th>
      <th scope="col" >School Image</th>
      <th scope="col">School Name</th>
      <th scope="col">Principal</th>
      <th scope="col">Board</th>
      <th scope="col">Category</th>
      <th scope="col">Location</th>
      <th scope="col">TelephoneNo</th>
      <th scope="col">SchoolWebsite</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody >
    {
      schools.map((school,index)=>(
        <tr key={school.id} className="table-warning">
        <th scope='row'>{index +1}</th>
          <td ><img src={school.imgPath} style={{ height: "150px", width: "150px" }} alt={ school.schoolName}/></td>
        
        <td>{school.schoolName}</td>
        <td>{school.principalName}</td>
        <td>{school.boardName}</td>
        <td>{school.schoolCategory}</td>
        <td>{school.location}</td>
        <td>{school.telephoneNo}</td>
        <td  style={{color:"blue"}} onClick={()=>window.open(`${school.schoolWebsite}`)}>{school.schoolWebsite}</td>
        
        <td style={{width:'200px'}}>
        <Link className="btn btn-outline-primary" to={`/schools/update/${school.id}`}><BorderColorIcon/></Link>
        <Link className="btn btn-outline-danger" to={`edit-schools`} onClick={()=>deleteSchool(school.id)}><DeleteIcon/></Link>
        </td>
        </tr>
      ))
    }
  </tbody>
</table>
</div>
  )
}

export default EditSchools