import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useHistory ,useParams} from "react-router-dom";
import base_url from "../../Services/EducationApiService.js";

const UpdateCollege = () => {
   let history = useHistory();
   const {id} = useParams();
    const [college,setCollege]=useState({
        imgPath:"",
        collegeName: "",
        principalName: "",
        collegeCategory: "",
        courses: "",
        location: "",
        telephoneNo:"",
        collegeWebsite:""
    });
    const {imgPath,collegeName, principalName,collegeCategory,courses,location,telephoneNo,collegeWebsite}=college;
    const onInputChange = e =>{
        setCollege({...college,[e.target.name]:e.target.value});
    };

    // const loadCollege = async ()=>{
    //     const result = await axios.get(`${base_url}/colleges/${id}`);
    //     setCollege(result.data) 
    // }

    useEffect(() => {
        const loadCollege = async () => {
            const result = await axios.get(`${base_url}/colleges/${id}`);
            setCollege(result.data)
        };
        loadCollege();
    }, [id]);
    
    
    const onSubmit = async e =>{
        e.preventDefault();
        await axios.put(`${base_url}/colleges/${id}`,college);
        history.push("/edit-colleges")
    }

    
    
    return (
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update A College</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter Image Path"
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
        </div>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter courses name"
        name="courses"
        value={courses}
        onChange={e=>onInputChange(e)}
        />
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
        placeholder="Enter College Website Path"
        name="collegeWebsite"
        value={collegeWebsite}
        onChange={e=>onInputChange(e)}
        />
        </div>
        <button className="btn btn-warning btn-block">Update College</button>
        </form>
        </div>
        </div>
    )
}
export default UpdateCollege