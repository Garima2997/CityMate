import React, { Component } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import TourCard from "./TourCard";
import "../../App.css";
import axios from 'axios';
import base_url from "../../Services/TourismApiService";
import ImageCard1 from "../../assets/tourismimage/Image-Card1.jpg";
import ImageCard2 from "../../assets/tourismimage/Image-Card2.jpg";
import ImageCard3 from "../../assets/tourismimage/Image-Card3.jpg";
import ImageCard4 from "../../assets/tourismimage/Image-Card4.jpg";
import ImageCard5 from "../../assets/tourismimage/Image-Card5.jpg";
import ImageCard6 from "../../assets/tourismimage/Image-Card6.jpg";
import ImageCard8 from "../../assets/tourismimage/Image-Card8.jpg";
import ImageCard9 from "../../assets/tourismimage/Image-Card9.jpg";
import ImageCard10 from "../../assets/tourismimage/Image-Card10.jpg";
import ImageCard11 from "../../assets/tourismimage/Image-Card11.jpg";
import ImageCard12 from "../../assets/tourismimage/Image-Card12.jpg";
const tourImage = [
  {
    id: 1,
    img: ImageCard2
  },
  {
    id: 2,
    img: ImageCard3
  },
  {
    id: 3,
    img: ImageCard4
  },
  {
    id: 4,
    img: ImageCard5
  },
  {
    id: 5,
    img: ImageCard8,
  },
  {
    id: 6,
    img: ImageCard12,
  },
  {
    id: 7,
    img: ImageCard1,
  },
  {
    id: 8,
    img: ImageCard5,
  },
  {
    id: 9,
    img: ImageCard6,
  },
  {
    id: 10,
    img: ImageCard9,
  },
   {
    id: 11,
    img: ImageCard10,
  },
   {
    id: 12,
    img: ImageCard11,
  }
];


const itemCategories = [
  "All",
  "Historical",
  "Current HotSpot"
  
];

class Package extends Component {
  state = {
    cards: [],
    category: "All",
  };

  componentDidMount() {

    // const historicalPlaces = fetch('http://localhost:7070/CurrentHotspot');
    // const currentHotspot =  fetch('http://localhost:7070/HistoricalPlaces');

   this.tourism();

  }
  tourism = async() => {
     const historicalPlacess= await axios(`${base_url}/HistoricalPlaces`);
      const currentHotspots =  await axios(`${base_url}/CurrentHotSpot`);
      const historicalPlaces = historicalPlacess.data;
      const currentHotspot = currentHotspots.data;
    
    const finalTours = [];
    historicalPlaces.forEach(data => {
      const card = {
        id: 0,
        category: '',
        img: '',
        alt: "",
        title: "",
        subtitle: "",
      };
      card.category = ["Historical"];
      card.id = data.hPlaceId;
      card.address = data.hAddress;
      card.placeName = data.hPlaceName;
      card.timings = data.hTimings;
      card.description = data.hDescription;
      card.contactDetails = data.hContactDetails;
      card.entryFee = data.hentryFee;
      card.days = data.hDays;
      finalTours.push(card);
    });

    currentHotspot.forEach(data => {
       const card = {
        id: 0,
        category: '',
        img: '',
        alt: "",
        title: "",
        subtitle: "",
      };
      card.category = ["Current HotSpot"];
      card.id = historicalPlaces.length + data.placeId;
      card.address = data.address;
      card.placeName = data.placeName;
      card.timings = data.timings;
      card.description = data.description;
      card.contactDetails = data.contactDetails;
      card.entryFee = data.entryFee;
      card.days = data.days;
      finalTours.push(card);
    });
    tourImage.forEach(value => {
      finalTours.forEach(data => {
        if (value.id === data.id) {
          data.img= value.img
        }
      })
    })
    // console.log(JSON.stringify(finalTours));
    
    localStorage.setItem('places', JSON.stringify(finalTours));

    this.setState({ cards: finalTours });

  }

  render() {
    const { cards, category } = this.state;
    return (
      <div className="subComponent-lg" id="packageBody">
        <Container>
          <header className="headerTitle text-center" id="package">
            <h1>Tour Packages</h1>
            <p>A Great Collection of Our Tour Packages</p>
          </header>
          <section className="packageBody text-center">
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === category ? "dark" : "light"}
                onClick={() => this.setState({ category: badge })}
              >
                {badge}
              </Badge>
            ))}

            <Row className="text-left">
              <CardColumns>
                {category !== "All"
                  ? cards.map(tourcard => {
                      return tourcard.category.map(catItem => {
                        return catItem === category ? (
                          <TourCard key={tourcard.id} tourcard={tourcard} />
                        ) : null;
                      });
                    })
                  : cards.map(tourcard => (
                      <TourCard key={tourcard.id} tourcard={tourcard} />
                    ))}
              </CardColumns>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Package;
