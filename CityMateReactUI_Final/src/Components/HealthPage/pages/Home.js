import React from 'react';
import '../../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../../Footer/Footer.js'
import Contact from '../../Footer/Contact.js'

function Home() {
  return (
    <>
     <HeroSection />
      <Cards />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;