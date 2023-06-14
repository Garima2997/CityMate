import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import './ServiceInfo.css';

function ServiceInfo() {
    const data_right = [
        { name: "Education" , img: "./images/education.png", desc: "Find all the necessary information about city schools and colleges" },
        { name: "FunNDine" , img: "./images/dine.png", desc: "Find happening city places like shopping malls, restaurant and parks." },
        { name: "Health" , img: "./images/health.jpeg", desc: "Get Details of city hospitals and pharmacies." },
        { name: "Tourism" , img: "./images/tourism.jpg", desc: "Helps in finding the city historical legacies and current hot spots. " },
        { name: "Events" , img: "./images/events.png", desc: "Register for the events happening in the city hassle free." }
    ]

    return (
            <>
            <br />
            <Container className="border container-transition md-4 bg-white">
                <h1 className="text-center mt-4">Features</h1>
                    <br />
                    {data_right.map((items, idx) =>
                    (  idx%2 === 0 ?   
                        (<Row className="justify-content-center ml-5" key={idx}>
                        <Col xs={6} md={3}>
                            <Image src={items.img} height="150" roundedCircle />
                        </Col>
                            <Col xs={6} md={9} >
                            <div className="mt-5" >
                                    <h3 className="text-success">{ items.name}</h3>
                            <p> { items.desc}</p>
                            </div>
                            
                        </Col>
                        </Row>) :
                        (
                        <Row className="justify-content-center ml-5 " key={ idx }>
                                <Col xs={6} md={9}>
                                <div className="mt-5" >
                                    <h3 className="text-success">{ items.name}</h3>
                            <p> { items.desc}</p>
                                        </div>
                        </Col>
                        <Col xs={6} md={3} >
                        <Image src={ items.img} height="150" roundedCircle />
                        </Col>
                        </Row>
                          
                        )
                    ))}
                <br />
                <br />
            </Container>            
            <br />
            <br />
            <br />
        </>
    )
}

export default ServiceInfo;

