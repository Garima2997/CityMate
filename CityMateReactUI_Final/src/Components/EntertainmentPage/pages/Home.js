import React from 'react';
import '../../../App.css';
import Cards from '../Cards';
import Footer from '../../Footer/Footer';
import Contact from "../../Footer/Contact";
import HeroSection from '../HeroSection';

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