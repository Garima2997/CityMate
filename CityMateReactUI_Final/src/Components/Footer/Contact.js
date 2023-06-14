import React, { Component } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
// import "../App.css";
import { ReactComponent as Phone } from "../../assets/svg/phone.svg";
import { ReactComponent as MapPin } from "../../assets/svg/map-pin.svg";
import { ReactComponent as Mail } from "../../assets/svg/mail.svg";

class Contact extends Component {
  render() {
    return (
      <>
      <Card className="subComponent-lg" id="contactBody">
        <Container>
          <header className="text-center text-white">
            <h1 className=" text-white" >Contact</h1>
            <p>GET IN TOUCH WITH US</p>
          </header>
          <section className="svg-group text-center">
            <Row>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <Phone width="50" height="55" strokeWidth="1" />
                  <p>0912 345 6789</p>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <MapPin width="55" height="55" strokeWidth="1" />
                  <p>CityMate</p>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <Mail width="55" height="55" strokeWidth="1" />
                  <p>citymateproject@gmail.com</p>
                </div>
              </Col>
            </Row>
          </section>
          <hr />
          <br />
          <section className="msg text-center">
            <Form.Row>
                <Col sm="6">
                  <Form.Control
                    type="text"
                    name="Name"
                    id="reviewer-name"
                    placeholder="Your Name"
                    required
                  />
                  <br />
                  <Form.Control
                    className="mt-3"
                    type="email"
                    name="Email"
                    id="reviewer-email"
                    placeholder="Your Email"
                    required
                  />
                </Col>
                <Col>
                <Form.Control as="textarea"
                    name="Message"
                    id="reviewer-message"
                    rows={4}
                    placeholder="Your Message"
                  />
                  <br/>
                </Col>
                
              </Form.Row>
              <Button variant="outline-light" className="float-none mb-3 ">
                    Send Message
              </Button>
          </section>
        </Container>
        </Card>
        </>
    );
  }
}

export default Contact;
