import React,{useState} from 'react';
import axios from 'axios';
import {useHistory } from "react-router-dom";
import base_url from "../../Services/EducationApiService.js";

const AddCollege = () => {
   let history = useHistory();
    const [college,setCollege]=useState({
        imgPath:"",
        collegeName: "",
        principalName: "",
        collegeCategor:"",
        courses: "",
        location: "",
        telephoneNo:"",
        collegeWebsite:""
    });
    const {imgPath,collegeName, principalName,collegeCategory,courses,location,telephoneNo,collegeWebsite}=college;
    const onInputChange = e =>{
        setCollege({...college,[e.target.name]:e.target.value});
    };

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post(`${base_url}/colleges`,college);
        history.push("/edit-colleges")
    }
    return (
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A College</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter image path"
        name="imgPath"
        value={imgPath}
        onChange={e=>onInputChange(e)}
        />
        </div>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter College Name"
        name="collegeName"
        value={collegeName}
        onChange={e=>onInputChange(e)}
        />
        </div>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter Principal Name"
        name="principalName"
        value={principalName}
        onChange={e=>onInputChange(e)}
        />
        </div>
      
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter College Category"
        name="collegeCategory"
        value={collegeCategory}
        onChange={e=>onInputChange(e)}
        />
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter Courses Name"
        name="courses"
        value={courses}
        onChange={e=>onInputChange(e)}
        />
        </div>
        </div>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter Location"
        name="location"
        value={location}
        onChange={e=>onInputChange(e)}
        />
        </div>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter Telephone No"
        name="telephoneNo"
        value={telephoneNo}
        onChange={e=>onInputChange(e)}
        />
        </div>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter college website path"
        name="collegeWebsite"
        value={collegeWebsite}
        onChange={e=>onInputChange(e)}
        />
        </div>
        <button className="btn btn-primary btn-block">Add College</button>
        </form>
        </div>
        </div>
    )
}
export default AddCollege;