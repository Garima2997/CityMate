import React , {useState , useEffect} from 'react';
import { Card, Row, Col ,Button, Jumbotron, Container, Toast } from 'react-bootstrap';
import ApiService from '../../Services/EventApiService.js';
import { useHistory } from 'react-router-dom';
import './Events.css';

function AdminEvent() {

    const [events, fetchEvents] = useState([]);
    const [message, setMessage] = useState(null);
    const [showToast, setShowToast] = useState(true);
    const [isClicked, setIsClicked] = useState(false);

  
    const history = useHistory();

    const toggleShowToast = () => setShowToast(!showToast);
    
    useEffect(() => {
        reloadEventList();
    }, []);

    const reloadEventList = () => {
        ApiService.fetchAllEvents()
            .then((res) => {
                fetchEvents(res.data.result);
            });
    }

    const deleteEvent = (eventId) => {
        ApiService.deleteEvent(eventId)
            .then(res => {
                setMessage('Event deleted successfully.');
                fetchEvents(events.filter(event => event.id !== eventId) );
            }); 
    }

    const updateEvent = (id) => {
        window.localStorage.setItem("eventId", id);
        setIsClicked(!isClicked);
        history.push('/update_event');
    }
   
    const createEvent = () => {
        setIsClicked(!isClicked);
        window.localStorage.removeItem("eventId");
        history.push('/create_event' , isClicked);
    }
    
    

    return (
        <>
        <div>
        <Jumbotron fluid className="shadow jumbotron-image" style={{
            background: "url(./images/adminDashboard.jpg)",
            height: "300px"}}>
        <Container className="text-white text-center mt-4 pt-3 pb-3" >
            <h1><strong>ADMIN DASHBOARD</strong></h1>
            <br />
            <Button variant="outline-danger" onClick={() => createEvent()}> Create Event</Button>
        </Container>
                    
        {message != null &&
            <Toast show={showToast} onClose={toggleShowToast} className="toast">
            <Toast.Header delay={3000}>{message}</Toast.Header>
        </Toast>}
                
                    
        </Jumbotron>
        </div>

        
        {events.map((e , idx) => (
        <Card key={e.id} className="shadow component-space"  style={{ padding: "20" , marginVertical: "78" }}>
        <Row className='no-gutters'>
        <Col>
        <Card.Body>
            <h3><strong>{e.eventName}</strong></h3>
                {e.description}
                            <br />
                            <br />
            <b>Event Date:</b> {' '} {new Intl.DateTimeFormat("en-IN", {    
                                dateStyle: "full"
            }).format(Date.parse(e.eventDate))}
            <br />
            <b>Register Till: </b> {new Intl.DateTimeFormat("en-IN", {
                                dateStyle: "full"
            }).format(Date.parse(e.lastDateToRegister))}
            <br />
            <b>Address: </b> {' '} {e.location}
            <br />
                            <b>Time: </b> {' '} {e.timing}
                            <br />
            <b>Amount: </b> {' '} Rs.{e.amount}                
            
                            
        </Card.Body>
        </Col>
        <Col md={2} lg={2} className="mt-5 pl-5 pt-5">
                        <Button variant="success" onClick={ () => updateEvent(e.id) }>Update</Button>
        </Col>
        <Col  md={2} lg={2} className="mt-5 pl-5 pt-5 ">
            <Button variant="danger" onClick={() => deleteEvent(e.id)}>Delete</Button>
        </Col>
        </Row>
            </Card>
        ))}
        </>
    )
}

export default AdminEvent;
