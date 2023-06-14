import React, { useState, useEffect } from 'react';
import ApiService from '../../Services/EventApiService.js';
import { Form, Button, Card, Col, Toast } from 'react-bootstrap';
import Footer from '../Footer/Footer.js';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';


function RegisterUser() {

    const [events, setEvents] = useState({
        id:"",
        eventName: "",
        eventDate: "",
        lastDateToRegister:"",
        location: "",
        timing: "",
        amount: "",
        description:""
    });

    const [message, setMessage] = useState(null);
    const [showToast, setShowToast] = useState(true);

    const toggleShowToast = () => setShowToast(!showToast);
  

    const { register, handleSubmit, errors , getValues } = useForm();
    const handleError = (errors) => { };

    const validateDoB = () => {
        const dateOfBirth = Date.parse(getValues("dob"));
        const today = new Date();
        console.log(dateOfBirth)
        return dateOfBirth < today;
    }


    const validation = {
        name: { required: "Name is Required" },
        email: {
          required: "Email Is Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
          }
        },
        phoneNum: {
            required: "Phone number is Required",
            pattern: {
                value: /^\d{10}$/i,
                message: "Enter 10 digit phone number"
              }
        },
        dob: {
            required: "Date of Birth is Required",
            validate: validateDoB
        },
        address: { required: "Address is Required" }
      };

    const history = useHistory();

    useEffect(() => {
        loadEvent();
    }, []);

    const loadEvent = () => {
        ApiService.fetchEventById(window.localStorage.getItem("eventId"))
            .then((res) => {
                setEvents(res.data.result);
            });
    }
 
   
    const saveUser = (data) => {
        const respObject = {
            name: data.name,
            email: data.email,
            phoneNum: data.phoneNum,
            dob: data.dob,
            address: data.address,
            event: {
                id: events.id
            }
        }
        console.log(JSON.stringify(respObject))
        ApiService.registerUser(respObject)
            .then(res => {
                responseMail(res.data.result);
            })
        
        history.push("/events");
    }
    
    const responseMail = (id) => {
        const eAddress = getValues("email");
        console.log("REGISTRATION ID: " + id);
        console.log(eAddress);
        const mailResponseObject = {
            emailAddress: eAddress,
            emailMessage: `Your Registration for the event ${events.eventName} on ${events.eventDate} is confirmed.
                           REGISTRATION ID: ${id}
                           Please keep this Registration Id for future reference.
                           Thankyou ${getValues("name")} , for choosing CityMate.`
        };
        console.log(mailResponseObject);
        ApiService.sendEmail(mailResponseObject)
            .then(res => {
                setMessage(res.data.message);
            });
    }

    const onSubmit = (data) => {
        saveUser(data);
        // setTimeout(() => {
        //     responseMail(user);
        // }, 15000);
    }

    return (
        <>
        {message != null &&
        <Toast show={showToast} onClose={toggleShowToast} className="toast bg-success">
        <Toast.Header delay={3000}>{message}</Toast.Header>
        </Toast>}
        <h1 className="text-center mt-5"> <b>Registration Form</b></h1>
        <Card style={{ width: '45rem' }} className="mx-auto mt-5 mb-5">
        <Card.Body>
        <Form noValidate onSubmit={handleSubmit(onSubmit, handleError)}>
        
        <Form.Group as={ Col}>
        <Form.Label>Name</Form.Label>
        <Form.Control
                                name="name"
                                type="text"
                                placeholder="Enter Name"
                                ref = {register(validation.name)} 
                            />
        <small className="text-danger"><strong>{errors.name && errors.name.message}</strong></small>
        </Form.Group>
                        
        <Form.Group as={Col}  >
        <Form.Label>Email</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="Enter Email"
                                ref={register(validation.email)}
        />
        <small className="text-danger"><strong>{errors.email && errors.email.message}</strong></small>
        </Form.Group>
                        
        <Form.Group as={Col}>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
                                name="phoneNum"
                                type="number"
                                ref = {register(validation.phoneNum)}
        />
        <small className="text-danger"><strong>{errors.phoneNum && errors.phoneNum.message}</strong></small>
        </Form.Group>
                        
        <Form.Group as={Col} >
        <Form.Label> Date Of Birth </Form.Label>
        <Form.Control
                                type="date"
                                name="dob"
                                ref={register(validation.dob)} />
        <small className="text-danger"><strong>{errors.dob && errors.dob.message}</strong></small>
        {errors.dob && errors.dob.type === "validate" && <small className="text-danger"><strong>Enter valid Date of Birth</strong></small>}
        </Form.Group>
                        
        <Form.Group as={Col} >
          <Form.Label>Address</Form.Label>
        <Form.Control
                                type="text"
                                name="address"
                                ref={register(validation.address)}
        />
        <small className="text-danger"><strong>{errors.address && errors.address.message}</strong></small>
        </Form.Group>
                        

        <Form.Group as={Col} >
          <Form.Label>Event Name </Form.Label>
            <Form.Control type="text" name="eventName" defaultValue={events.eventName} ref={ register} readOnly />
        </Form.Group>  
                        
       <Button type="submit" className="ml-3" variant="info" >Register</Button>
       </Form>
       </Card.Body>
       </Card>
       <Footer />
        </>
    )
}

export default RegisterUser;
