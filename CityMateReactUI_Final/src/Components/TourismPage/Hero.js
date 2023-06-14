import React from "react";
import { Button } from "reactstrap";
// import VideoPlayer from 'react-video-js-player';
import "../../App.css";
import videoplayback from "./TourismVideo/videoplayback.mp4";

const Hero = () => (
  <div>
    <main className="cover-page" id="hero">
      <section className="wrapped-page">
        <div className="hero-container">
        <video style = {{
          width: "100%"}} autoPlay loop muted > 
          <source src={videoplayback} type = "video/mp4" />
          </video>
          <h1>Travel Across Chandigarh</h1>
          <h3>Tours | Travel | Guide</h3>
          <Button 
             className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              outline color="warning" href="#package">
            Explore
          </Button>
        </div>
      </section>
    </main>
  </div>
);

export default Hero;
