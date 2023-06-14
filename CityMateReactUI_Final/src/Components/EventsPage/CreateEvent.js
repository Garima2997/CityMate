import React  from 'react';
import { Form, Col, Button, Card } from 'react-bootstrap';
import ApiService from '../../Services/EventApiService.js';
import Footer from '../Footer/Footer.js';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';


function CreateEvent() {
   
  const { register, handleSubmit, errors , getValues} = useForm();
  const handleError = (errors) => { };

  const validateEventDate = (eventDate) => {

    const date = Date.parse(eventDate);
    const today = new Date();
    console.log(date >  today);
    return date > today;

  }

  const validateLastRegisterDate = () => {

    const eDate = getValues("eventDate");
    const lastDate = getValues("lastDateToRegister");
    console.log(getValues("lastDateToRegister"))
    console.log(eDate + "    " + lastDate);
    console.log(eDate >  lastDate);
    return eDate > lastDate;

  }


  const validation = {
    eventName: { required: "Name is Required" },
    eventDate: {
      required: "EventDate Is Required",
      validate: validateEventDate
    },
    lastDateToRegister: {
      required: "Last Date field is Required",
      validate: validateLastRegisterDate
    },
    location: { required: "Address is Required" },
    timing: { required: "Time is Required" },
    amount: { required: "Amount is Required" },
    description: {required: "Description is required"}
  };


  const history = useHistory();

    const saveEvent = (data) => {
        ApiService.createEvent(data)
          .then(res => {
            history.push('/admin_event' , "Event Created Successfully");
    });
  }
  
  const onSubmit = (data) => {
    saveEvent(data);
  }

 
    return (
        <>
        <h1 className="text-center mt-5"> <b>Create Event </b></h1>
        <Card style={{ width: '45rem' }} className="mx-auto mt-5 mb-5">
        <Card.Body>
        <Form  onSubmit={handleSubmit(onSubmit , handleError )}>
        
        <Form.Group as={ Col}>
        <Form.Label>Event name</Form.Label>
        <Form.Control
                  name="eventName"
                  type="text"
                  placeholder="Event Name"
                  ref={register(validation.eventName)}
        />
        <small className="text-danger"><strong>{errors.eventName && errors.eventName.message}</strong></small>      
        </Form.Group>
                        
        <Form.Group as={Col}  >
        <Form.Label>Event Date</Form.Label>
        <Form.Control
                  name="eventDate"
                  type="date"
                  placeholder="Enter Date"
                  ref={register(validation.eventDate)}           
        />
        <small className="text-danger"><strong>{errors.eventDate && errors.eventDate.message}</strong></small>
        {errors.eventDate && errors.eventDate.type === "validate" && <small className="text-danger"><strong>EventDate should be in future.</strong></small>}
        </Form.Group>
                        
        <Form.Group as={Col} >
        <Form.Label>Last Registration Date</Form.Label>
        <Form.Control                     
                  name="lastDateToRegister"
                  type="date"
                  ref={register(validation.lastDateToRegister )}
        />
       <small className="text-danger"><strong>{errors.lastDateToRegister && errors.lastDateToRegister.message}</strong></small>
        {errors.lastDateToRegister && errors.lastDateToRegister.type === "validate" && <small className="text-danger"><strong>Last Date Should be before Event date</strong></small>}
        </Form.Group>
                        
        <Form.Group as={Col} >
          <Form.Label> Address </Form.Label>
                <Form.Control
                  name="location"
                  type="text"
                  placeholder="Enter Address" 
                  ref={register(validation.location)}
                />
          <small className="text-danger"><strong>{errors.location && errors.location.message}</strong></small>       
        </Form.Group>
                        
        <Form.Group as={Col} >
          <Form.Label>Time</Form.Label>
                <Form.Control
                  type="time"
                  name="timing"
                  ref={register(validation.timing)}
                />
          <small className="text-danger"><strong>{errors.timing && errors.timing.message}</strong></small>
        </Form.Group>
                        

        <Form.Group as={Col} >
          <Form.Label>Amount </Form.Label>
                <Form.Control
                  name="amount"
                  type="number"
                  placeholder="Enter Amount"
                  ref={register(validation.amount)} />
          <small className="text-danger"><strong>{errors.amount && errors.amount.message}</strong></small>
        </Form.Group>
                        
        <Form.Group as={Col} >
          <Form.Label>About</Form.Label>
          <Form.Control as="textarea" rows={3}  ref={register(validation.description)} name="description" />
          <small className="text-danger"><strong>{errors.description && errors.description.message}</strong></small>
        </Form.Group>
                        
       <Button type="submit" className="ml-3" variant="info">Create</Button>
       </Form>
       </Card.Body>
       </Card>
       <Footer />
        </>
    )
}

export default CreateEvent;