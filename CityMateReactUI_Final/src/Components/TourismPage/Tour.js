import React from "react";
import { Container, Row } from "reactstrap";
import "../../App.css";
import queryString from "query-string";
import { Button } from "react-bootstrap";


const Tour = () => {
  const { id } = queryString.parse(window.location.search);
  const tours = JSON.parse(localStorage.getItem('places'));
  return (
    <div className="subComponent">
      <Container>
      <section className="tour-cover item-center">
        <img src={tours[id-1].img} alt="" />
          <h1>{ tours[id-1].placeName}</h1>
        {/* <h4>Batangas Resort</h4> */}
      </section>
      <section className="tour-info">
        <Row>
          <div className="tour-desc">
              <p>
              {tours[id-1].description}
              </p>
            </div>
                  
        </Row>
      </section>
    </Container>
    <section className="reviews">
      <Container>
          <p>Address :{tours[id - 1].address}</p>
          <p>Timing :{tours[id - 1].timings}</p>
          <p>Days :{tours[id - 1].days}</p>
          <p>EntryFee :{tours[id - 1].entryFee}</p>
          <p>ContactDetails :{ tours[id-1].contactDetails}</p>
        </Container>
        <Button href="/tourism" className="float-right"> Back </Button>
      
      </section>
     
      
  </div>
  );
}

export default Tour;
