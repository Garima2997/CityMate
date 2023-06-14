import React, { Component } from "react";
import { Container, Row, Col , Card } from "react-bootstrap";
// import "../App.css";
import { ReactComponent as Facebook } from "../../assets/svg/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/svg/twitter.svg";
import { ReactComponent as Linkedin } from "../../assets/svg/linkedin.svg";
import { ReactComponent as Instagram } from "../../assets/svg/instagram.svg";

class Footer extends Component {
  render() {
    return (
      <>
        <Card className="subComponent-lg" id="footerBody" style={{
          background: "hsl(300, 53%, 26%)"   }}>
        <Container>
          <header className="headerTitle text-center mt-3 text-white">
            <p className="text-white">
              <b>Follow Us On</b>
            </p>
          </header>
          <footer className="svg-group text-center">
            <Row>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="https://www.facebook.com/tourismchandigarh/?ref=hl" >
                    <Facebook width="30" height="30" strokeWidth="2" />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="https://twitter.com/chdtourism?lang=en">
                    <Twitter width="30" height="30" strokeWidth="2" />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="https://www.linkedin.com/company/chandigarh-tourism/?originalSubdomain=in">
                    <Linkedin width="30" height="30" strokeWidth="2" />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="https://www.instagram.com/chandigarhtourism/">
                    <Instagram width="30" height="30" strokeWidth="2" />
                  </a>
                </div>
              </Col>
            </Row>
            <hr style ={{  color : "0.5px solid white"}} />
            <p className="text-white">copyright 2021 | CityMate</p>
          </footer>
          </Container>
          </Card>
      </>
    );
  }
}

export default Footer;
