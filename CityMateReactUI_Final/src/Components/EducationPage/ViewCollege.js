import React,{useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import base_url from "../../Services/EducationApiService.js";

const ViewCollege = () => {
    const [college,setCollege]=useState({
        collegeName: "",
        principalName: "",
        collegeCategory: "",
        courses: "",
        location: "",
        telephoneNo:""
    });

    const { id } = useParams();

    useEffect(() => {
        const loadCollege = async () => {
            const result = await axios.get(`${base_url}/colleges/${id}`);
            setCollege(result.data)
        }
        loadCollege();
        
    }, [id])
    
   
    return (
        <div className="container py-4">
        
        <h1 className="display-4">College Name:{college.collegeName}</h1>
            <hr />
            <div className="d-flex justify-content-center">
            <ul className="list-group w-50">
        <li className="list-group-item"> principal name: {college.principalName}</li>
        <li className="list-group-item"> college category: {college.collegeCategory}</li>
        <li className="list-group-item"> courses: {college.courses}</li>
        <li className="list-group-item"> location: {college.location}</li>
        <li className="list-group-item"> telephoneNo: {college.telephoneNo}</li>
            </ul>
            </div>
            <br />
            <div className="text-center">
            <Link className="btn btn-primary" to="/all-colleges">back to home</Link>
            </div>
        </div>
    )
}
export default ViewCollege