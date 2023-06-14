import React from 'react';
import '../../App.css';
import { Button } from 'reactstrap';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
       <video className="video-container" src='./images/entertaimentvideo/video1.mp4' autoPlay loop muted />
      <h1>Find all your entertainments here</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          outline color="warning"
          href="#card" >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;