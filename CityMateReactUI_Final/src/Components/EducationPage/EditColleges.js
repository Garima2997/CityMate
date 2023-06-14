import React,{useState,useEffect} from 'react';
import axios from "axios";
import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import base_url from "../../Services/EducationApiService.js";
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import BorderColorIcon from '@material-ui/icons/BorderColor';



function EditColleges() {
  
  const [colleges,setCollege]=useState([]);
  useEffect(()=>{
    loadColleges();
  }, []);
  
  const loadColleges = async () =>{
    const result = await axios.get(`${base_url}/colleges`);
    setCollege(result.data);
  }

  const deleteCollege = async id=>{
await axios.delete(`${base_url}/colleges/${id}`);
loadColleges();
  }
   
  return (
   <div >
    <Link className="btn btn-outline-warning" to="/colleges/add"><AddCircleOutlineIcon/> Add College</Link>
    <table className="table border shadow">
    <thead className="bg-warning" >
    <tr >
      <th scope="col">Id</th>
      <th scope="col">College Name</th>
      <th scope="col" >College Image</th>
      <th scope="col">Principal</th>
      <th scope="col">Category</th>
      <th scope="col">Courses</th>
      <th scope="col">TelephoneNo</th>
      <th scope="col" >CollegeWebsite</th>
     
      <th>Action</th>
    </tr>
  </thead>
  <tbody >
    {
      colleges.map((college,index)=>(
        <tr key={college.id} className="table-warning">
        <th scope='row'>{index +1}</th>
        <td ><img src={college.imgPath} style={{height:"150px",width:"150px"}} alt={college.collegeName}/></td>
        
        <td>{college.collegeName}</td>
        <td>{college.principalName}</td>
        <td>{college.collegeCategory}</td>
        <td>{college.courses}</td>
        <td>{college.telephoneNo}</td>
        <td onClick={()=>window.open(`${college.collegeWebsite}`)} width="50px">{college.collegeWebsite}</td>
        
        <td style={{width:'200px'}}>
        <Link className="btn btn-outline-primary mr-1" to={`/colleges/update/${college.id}`}><BorderColorIcon/></Link>
        <Link className="btn btn-outline-danger" to={`edit-colleges`} onClick={()=>deleteCollege(college.id)}><DeleteIcon/></Link>
        </td>
        </tr>
      ))
    }
  </tbody>
      </table>
  
</div>
  )
}

export default EditColleges;