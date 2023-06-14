import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "../../App.css";

const TourCard = ({ tourcard }) => {
  console.log("tour card",tourcard)
  const {id, img, alt, placeName, subtitle } = tourcard;
  return (
    <Card>
      <CardImg top width="100%" src={img} alt={alt} />
      <CardBody>
        <Button outline color="secondary" className="float-right" href={`tour/?id=${id}`}>
          Read more
        </Button>
        <CardTitle>{placeName}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardBody>
    </Card>
  );
};
export default TourCard;
