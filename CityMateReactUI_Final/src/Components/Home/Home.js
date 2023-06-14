import React from 'react';
import About from '../About/About.js';
import Header from '../Header/Header.js';
import ServiceInfo from '../CityMateService/ServiceInfo.js';
import Footer from '../Footer/Footer'
import Contact from '../Footer/Contact.js';

function Home() {
    return (
        <>
        <Header />
        <About />
        <ServiceInfo />
        <Contact />
        <br />    
        <Footer />     
        </>
    )
}

export default Home;
