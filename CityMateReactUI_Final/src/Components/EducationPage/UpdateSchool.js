import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useHistory ,useParams} from "react-router-dom";
import base_url from "../../Services/EducationApiService.js";

const UpdateSchool = () => {
   let history = useHistory();
   const {id} =useParams();
    const [school,setSchool]=useState({
        imgPath:"",
        schoolName: "",
        principalName: "",
        boardName: "",
        schoolCategory: "",
        location: "",
        telephoneNo:"",
        schoolWebsite:""
    });
    const {imgPath,schoolName, principalName,boardName,schoolCategory,location,telephoneNo,schoolWebsite}=school;
    const onInputChange = e =>{
        setSchool({...school,[e.target.name]:e.target.value});
    };

    useEffect(() => {
        const loadSchool = async ()=>{
            const result = await axios.get(`${base_url}/schools/${id}`);
            setSchool(result.data)
        }
        loadSchool();
    },[id])
    
    const onSubmit = async e =>{
        e.preventDefault();
        await axios.put(`${base_url}/schools/${id}`,school);
        history.push("/edit-schools")
    }

   
    
    return (
        <div className="container" >
        <div className="w-75 mx-auto shadow p-5" >
        <h2 className="text-center mb-4">Update A School</h2>
        <form onSubmit={e => onSubmit(e)} >
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
        placeholder="Enter School Name"
        name="schoolName"
        value={schoolName}
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
        placeholder="Enter Board Name"
        name="boardName"
        value={boardName}
        onChange={e=>onInputChange(e)}
        />
        </div>
        <div className="form-group">
        <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter School Category"
        name="schoolCategory"
        value={schoolCategory}
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
        placeholder="Enter School Website Path"
        name="schoolWebsite"
        value={schoolWebsite}
        onChange={e=>onInputChange(e)}
        />
        </div>
        <button className="btn btn-warning btn-block">Update School</button>
        </form>
        </div>
        </div>
    )
}
export default UpdateSchool