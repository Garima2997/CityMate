import React,{ useState} from 'react'
import { Form, Button,  Col, Toast, Card} from 'react-bootstrap';
import ApiService from "../../Services/EventApiService.js";
import {  useForm } from 'react-hook-form';
import "../../App.css";
import Footer from "../Footer/Footer.js";
import Contact from "../Footer/Contact.js";

const ViewUser = () => {
    const [user, setUser] = useState({
        userId: "",
        name: "",
        email: "",
        phoneNum: "",
        dob: "",
        address: "",
        event: {
            id: "",
            eventName: "",
            eventDate: "",
            lastDateToRegister: "",
            location: "",
            timing: "",
            amount: "",
            description: ""
        }
    });

    const [getDetail, setGetDetail] = useState(false);
    const [message, setMessage] = useState(null);
    const [editFlag, setEditFlag] = useState(false);
    const [showToast, setShowToast] = useState(true);

    const toggleEditFlag = () => {
        setEditFlag(!editFlag);
        setGetDetail(!getDetail);
    }

    const { register, handleSubmit, reset } = useForm();
    const { register: register2,
            handleSubmit: handleSubmit2
             } = useForm();
    const toggleShowToast = () => {
        setShowToast(false);
    }
    
    const responseCancellationMail = () => {
        const eAddress = user.email
        console.log(eAddress);
        const mailResponseObject = {
            emailAddress: eAddress,
            emailMessage: `Registration Cancelled for the Event ${user.event.eventName}.
                           Thankyou ${user.name} , for choosing CityMate.`
        };
        console.log(mailResponseObject);
        ApiService.sendCancellationEmail(mailResponseObject)
            .then(res => {
                setMessage(res.data.message);
            });
    }

    const loadUserById = (data) => {
        console.log("inside load user by id " + JSON.stringify(data));
        const id = parseInt(data.userId);
            ApiService.fetchUserById(id)
                .then((res) => {
                    toggleGetDetail();
                    setUser(res.data.result);
                } ,
                error => {
                    console.log(error.response.status);
                    if (error.response.status === 404) {
                        console.log(error.response.data)
                        setMessage("Invalid Registration Id.");
                        setShowToast(true);
                    }
                   
                  })
    }

    const onSubmit = (data) => {
        console.log(data);
        loadUserById(data);
    }

    const toggleGetDetail = () => setGetDetail(!getDetail);

    const deleteUser = (userId) => {
        ApiService.deleteUser(userId)
            .then(res => {
                setMessage("Cancellation Successful");
                setShowToast(true);
            });
        responseCancellationMail();
        setGetDetail(!getDetail);
        reset({ userId: "" });
    }

    const editUser = (data) => {
        console.log(data);
        const respObject = {
            userId: data.userId,
            name: data.name,
            email: data.email,
            phoneNum: data.phoneNum,
            dob: data.dob,
            address: data.address,
            event: {
                id: user.event.id
            }
        }
        const id = parseInt(data.userId);
        ApiService.updateUser( respObject ,id )
            .then(res => {
                setMessage("Update Successfull!!")
            });
        onSubmit(data);
        
    }
    
    const onSubmitUpdate = (data) => {
        editUser(data);
        toggleEditFlag();
    }
    
    return (
        <>
        <div className="viewUser-bg ">
            <div className="fluid-container ">
            {message != null &&
            <Toast show={showToast} onClose={toggleShowToast} className="toast">
            <Toast.Header >{message}</Toast.Header>
            </Toast>}
        <h1 className="display-4 text-danger">Details</h1>
        <hr />
                
        <Form noValidate key={ 1} onSubmit={handleSubmit(onSubmit)}  onReset={reset} >
        <Form.Group>
        <Form.Label className="col-3 text-white" >Registration Id</Form.Label>
                    <Form.Control
                        className="col-3 ml-3" 
                                name="userId"
                                type="number"
                                placeholder="Enter Registration Number"
                                ref = {register} 
        />
        </Form.Group>
                    <Button type="submit" className="ml-3" variant="info" >Get Details</Button>
                    <Button href="/events" className="ml-3" variant="info" >Back</Button>
        </Form>
        
            {getDetail &&
            <>
            <div className="d-flex justify-content-center ">
            <ul className="list-group w-50 text-center">
            <li className="list-group-item"> <b>Event Name:</b> {user.event.eventName}</li>
            <li className="list-group-item"> <b>Event Date:</b> { user.event.eventDate}</li>
            <li className="list-group-item"> <b>Name:</b> { user.name}</li>
            <li className="list-group-item"> <b>Email:</b> {user.email}</li>
            <li className="list-group-item"> <b>Phone Number:</b> {user.phoneNum}</li>
            <li className="list-group-item"> <b>Date Of Birth:</b> {user.dob}</li>
            <li className="list-group-item"> <b>Address:</b> {user.address}</li>
            
            <li className="list-group-item">
            <Button variant="danger" type="reset" onClick={() => deleteUser(user.userId)} className="float-left " >Cancel Registration</Button>
            <Button variant="success" type="submit" onClick={() => toggleEditFlag()} className= "float-right ">Edit Details</Button>
            </li>
            </ul>
            </div>
            </>
            }

            {editFlag &&
                    <Form noValidate key={2 } onSubmit={handleSubmit2(onSubmitUpdate)} >
                    <Card style={{ width: '40rem' }} className="mx-auto mt-5 mb-5">
                            <Form.Group as={Col}>
                            <Form.Label>Registration Id</Form.Label>
                            <Form.Control
                                name="userId"
                                type="number"
                                defaultValue={user.userId}
                                ref = {register2}
                                readOnly
                            />
                            </Form.Group>
                            <Form.Group as={Col} >
                            <Form.Label >Name</Form.Label>
                            <Form.Control
                                name="name"
                                type="text"
                                ref={register2}
                                defaultValue={user.name}
                            />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                ref={register2}
                                defaultValue={user.email}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                name="phoneNum"
                                type="number"
                                ref={register2}
                                defaultValue={user.phoneNum}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control
                                name="dob"
                                type="date"
                                ref={register2}
                                defaultValue={user.dob}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                name="address"
                                type="text"
                                ref={register2}
                                defaultValue={user.address}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control
                                name="eventName"
                                type="text"
                                ref={register2}
                                defaultValue={user.event.eventName}
                                readOnly
                            />
                    </Form.Group>
                    <Button type="submit" className="ml-3 col-4" variant="success" >Update</Button>
                
                </Card>
                </Form>}
        <br />
            </div>
           
        </div>
         <Contact />
         <Footer />
                </>
    )
}
export default ViewUser