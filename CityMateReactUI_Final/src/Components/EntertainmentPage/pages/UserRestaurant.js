import React from 'react';
import '../../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserListRestaurant from '../UserListRestaurant'
import Contact from '../../Footer/Contact.js';
import Footer from '../../Footer/Footer.js';


export default function Restaurants() {
    return (
    <>
    <h1 className='restaurants'>Restaurants and Cafe's</h1>
    <Router>
        <Switch>
          <Route path='/userrestaurant' component={UserListRestaurant} />
        </Switch>
        <Contact />
        <Footer />
      </Router>
      </>
    );
}