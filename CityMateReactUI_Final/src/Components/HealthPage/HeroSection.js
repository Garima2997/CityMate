import React from 'react';
import '../../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='./images/healthvideos/video.mp4' autoPlay loop muted />
      <h1>Health is Wealth</h1>
      <p>“Always laugh when you can. It is cheap medicine.”</p>
    </div>
  );
}

export default HeroSection;