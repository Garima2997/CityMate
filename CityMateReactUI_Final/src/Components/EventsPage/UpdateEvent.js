import React , {useState , useEffect} from 'react';
import { Form, Col, Button, Card } from 'react-bootstrap';
import ApiService from '../../Services/EventApiService.js';
import Footer from '../Footer/Footer.js';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';


function UpdateEvent() {

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


  const { register, handleSubmit, errors , getValues} = useForm();
  const handleError = (errors) => { };
  

  const validateLastRegisterDate = () => {

    const eDate = getValues("eventDate");
    const lastDate = getValues("lastDateToRegister");
    console.log(getValues("lastDateToRegister"))
    console.log(eDate + "    " + lastDate);
    console.log(eDate >  lastDate);
    return eDate > lastDate;

  }

  const validation = {
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

  useEffect(() => {
        loadEvent();
    }, []);

    const loadEvent = () => {
        ApiService.fetchEventById(window.localStorage.getItem("eventId"))
            .then((res) => {
                setEvents(res.data.result);
            });
    }
  
  const saveEvent = (data) => {
        ApiService.updateEvent(data)
          .then(res => {
                history.push('/admin_event');
            });
  }
  
  const onSubmit = (data) => {
    saveEvent(data);
    console.log(data);
  }
   
    return (
        <>
        <h1 className="text-center mt-5"> <b>Update Event </b></h1>
        <Card style={{ width: '45rem' }} className="mx-auto mt-5 mb-5">
        <Card.Body>
        <Form  onSubmit={handleSubmit(onSubmit , handleError)}>
        
        <Form.Group as={ Col} controlId="validationCustom01">
        <Form.Label>Event Id</Form.Label>
        <Form.Control
                  name="id"
                  defaultValue={events.id}
                  type="number"
                  ref={ register}
                  readOnly
        />
        </Form.Group>
              

        <Form.Group as={ Col} controlId="validationCustom01">
        <Form.Label>Event name</Form.Label>
        <Form.Control
                  name="eventName"
                  defaultValue={events.eventName}
                  type="text"
                  placeholder="Event Name"
                  ref={ register}
                  readOnly
        />
        </Form.Group>
                        
        <Form.Group as={Col}  >
        <Form.Label>Event Date</Form.Label>
        <Form.Control
                  defaultValue={events.eventDate}
                  name="eventDate"
                  type="date"
                  placeholder="Enter Date"
                  ref={ register}
                  readOnly
        />
        </Form.Group>
                        
        <Form.Group as={Col} >
        <Form.Label>Last Registration Date</Form.Label>
        <Form.Control
                  defaultValue= {events.lastDateToRegister}
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
                  type="text"
                  placeholder="Enter Address"
                  defaultValue={events.location}
                  name="location"
                  ref={register(validation.location)}
                />
         <small className="text-danger"><strong>{errors.location && errors.location.message}</strong></small>
        </Form.Group>
                        
        <Form.Group as={Col} >
          <Form.Label>Time</Form.Label>
                <Form.Control
                  type="time"
                  defaultValue={events.timing}
                  name="timing"
                  ref={ register(validation.timing)}
                />
          <small className="text-danger"><strong>{errors.timing && errors.timing.message}</strong></small>
        </Form.Group>
                        

        <Form.Group as={Col} >
          <Form.Label>Amount </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Amount"
                  defaultValue={events.amount}
                  name="amount"
                  ref={register(validation.amount)}
                />
                <small className="text-danger"><strong>{errors.amount && errors.amount.message}</strong></small>
        </Form.Group>
                        
        <Form.Group as={Col} >
          <Form.Label>About</Form.Label>
                <Form.Control as="textarea"
                  rows={3}
                  defaultValue={events.description}
                  name="description"
                  ref={register(validation.description)}
                />
          <small className="text-danger"><strong>{errors.description && errors.description.message}</strong></small>      
       </Form.Group>
                        
       <Button type="submit" className="ml-3" variant="info" >Update</Button>
       </Form>
       </Card.Body>
       </Card>
       <Footer />
        </>
    )
}

export default UpdateEvent;
