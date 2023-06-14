import React,{useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import base_url from "../../Services/EducationApiService.js";

const ViewSchool = () => {
    const [school,setSchool]=useState({
        schoolName: "",
        principalName: "",
        boardName: "",
        schoolCategory: "",
        location: "",
        telephoneNo:""
    });
    const { id } = useParams();
    
    useEffect(() => {
        const loadSchool = async ()=>{
            const result = await axios.get(`${base_url}/schools/${id}`);
            setSchool(result.data)
        }
        loadSchool();
        // eslint-disable-next-line
    }, [id])
    
   
    return (
        <div className="container py-4">
        
        <h1 className="display-4">School Name:{school.schoolName}</h1>
            <hr />
        <div className="d-flex justify-content-center">
        <ul className="list-group w-50">
        <li className="list-group-item"> principal name: {school.principalName}</li>
        <li className="list-group-item"> board name: {school.boardName}</li>
        <li className="list-group-item"> school category: {school.schoolCategory}</li>
        <li className="list-group-item"> location: {school.location}</li>
        <li className="list-group-item"> telephoneNo: {school.telephoneNo}</li>
        </ul>
        </div>
        <br />
            <div className="text-center" >
            <Link className="btn btn-primary justify-content-center" to="/all-schools">back to home</Link>
        </div>
        
        </div>
    )
}
export default ViewSchool