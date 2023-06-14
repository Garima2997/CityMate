import React, { useState , useEffect }from 'react';
import ApiService from '../../Services/EventApiService.js';
import { Card , Jumbotron , Container, Row, Col, Button} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Events.css";
import Footer from "../Footer/Footer.js";
import Contact from "../Footer/Contact.js";
import { Link, useHistory } from 'react-router-dom';


function ListEvents() {

    const [events, fetchEvents] = useState([]);
    const [index, setIndex] = useState(0);
    
    const history = useHistory();

    useEffect(() => {
        reloadEventList();
    }, []);

    const reloadEventList = () => {
        ApiService.fetchAllEvents()
            .then((res) => {
                fetchEvents(res.data.result);
            });
    }

    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <i className="fas fa-arrow-circle-left" aria-hidden="true"></i>
          </div>
        );
    };
    
    const settings = {
        infinite: true,
        lazyload: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        adaptiveHeight: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        variableWidth:true,
        beforeChange: (current, next) => setIndex(next),
        responsive: [
            {
              breakpoint: 480,
              settings: { slidesToShow: 1, slidesToScroll: 1 }
            },
            {
              breakpoint: 600,
              settings: { slidesToShow: 1, slidesToScroll: 1 }
            },
            {
              breakpoint: 1024,
              settings: { slidesToShow: 1, slidesToScroll: 3 }
            }
          ]};
  

    const saveUser = (id) => {
    window.localStorage.setItem("eventId", id);
    history.push("/register");
  }
  

    return (
      <>
        <Jumbotron fluid className="shadow jumbotron-image" style={{ background: "url(./images/eventPage.jpg)"}}>
        <Container className="jumbotron-text">
        <h2><i><strong>Pick Your Events </strong></i></h2>
        <p>
        <i>There are countless events in Chandigarh from genres like comedy, art, food to festivals;
            you can find your pick and have the best time of your life.
            Check out some amazing free events to take away all the fun experiences.
            You can look for all the things to do here and soak in the culture and entertainment scene here.
            With us find out about all the upcoming events near you.</i>
        </p>
        <Button href="/user_details" variant="outline-warning" >View User</Button>
        </Container>
        </Jumbotron>

        <br />
        <br />
        <br />
          
        <div>
          <h2 className="text-center text-danger">Events Near You</h2>
          <br />
          {events.length > 3 &&
            <Slider {...settings} >
              {events.map((e, idx) => (
                <Card key={e.id} className={idx === index ? "slide activeSlide " : "slide "}   >
                  <div className="ribbon">
                    <Card.Img variant="top" src="./images/city_background.jpg" className="img" />
                    <span className="ribbon-text">{e.amount === 0 ? "Free" : `Register At Rs.${e.amount}`}</span>
                  </div>
                          
                  <Card.Body className="card-body code">
                    <Card.Title className="card-title"><h2>{e.eventName}</h2></Card.Title>
                    <Card.Text>
                      <br />
                      <span><b>Event Date:</b> {new Intl.DateTimeFormat("en-IN", {
                        dateStyle: "full"
                      }).format(Date.parse(e.eventDate))}</span>
                      <br />
                      <span><b>Register Till:</b>  {new Intl.DateTimeFormat("en-IN", {
                        dateStyle: "full"
                      }).format(Date.parse(e.lastDateToRegister))}</span>
                    </Card.Text>
                    <hr />
                    <Card.Text><i className="fas fa-map-marker-alt"></i> <i>Location: </i> {e.location}
                      <br /> <i className="far fa-clock"></i> <em>Timing: </em> {e.timing}</Card.Text>
                    <hr />
                    <Card.Text>{e.description}</Card.Text> 
                  </Card.Body>
                  <Card.Footer className="register-color" >
                    <Link to="/register" className="text-white" onClick={() => saveUser(e.id)}> <h5><u><em><b>Register Now </b></em></u></h5></Link>
                  </Card.Footer>
                </Card>
              ))}
            </Slider>} 
                      
          {events.length <= 3 &&
            <Slider dots={true} >
            {events.map((e) => (
              <Card key={e.id}>
                <Row>
                  <Col lg={4} md={2} sm={2}>
                  <div className="ribbon">
                  <Card.Img variant="top" src="./images/city_background.jpg" height="370" />
                  <span className="ribbon-text">Register At Rs.{e.amount}</span>
                  </div>
                  </Col>
                  <Col>
                    <Card.Body className=" code ">

                  <Card.Title className="card-title"><h1>{e.eventName}</h1></Card.Title>
                    <Card.Text><i className="fas fa-calendar-alt" aria-hidden="true"></i>
                    <br />
                      <span><b>Event Date:</b> {new Intl.DateTimeFormat("en-IN", {
                        dateStyle: "full"
                      }).format(Date.parse(e.eventDate))}</span>
                      <br />
                      <span><b>Register Till:</b>  {new Intl.DateTimeFormat("en-IN", {
                        dateStyle: "full"
                      }).format(Date.parse(e.lastDateToRegister))}</span>
                    </Card.Text>
                    <hr />
                    <Card.Text><i className="fas fa-map-marker-alt"></i> <i>Location: </i> {e.location}
                      <br /> <i className="far fa-clock"></i> <em>Timing: </em> {e.timing}</Card.Text>
                    <hr />
                    <Card.Text className="card-text " > {e.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="register-color" >
                    <Link to="/register" className="text-white" onClick={() => saveUser(e.id)}><h5><u><em><b>Register Now </b></em></u></h5></Link>
                  </Card.Footer>
                  </Col>
                   </Row>
                </Card> ))}
           </Slider> }
          </div>
            
            <br />
            <br />
            <br />
        <Contact />
        <Footer />
        </>
    )
}

export default ListEvents;
