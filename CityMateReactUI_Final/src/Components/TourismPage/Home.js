import React, { Component } from "react";
import "../../App.css";
import Hero from "./Hero";
import About from "./About";
import Package from "./Package";
import Services from "./Services";
import Contact from "../Footer/Contact";
import Footer from "../Footer/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <video />
        <Hero />
        <About />
        <Package />
        <Services />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
