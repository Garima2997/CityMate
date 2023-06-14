import React from 'react';
import '../../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserListParks from '../UserListParks'
import Contact from '../../Footer/Contact.js';
import Footer from '../../Footer/Footer.js';

export default function Parks() {
    return (
    <>
    <h1 className='parks'>Parks</h1>
    <Router>
        <Switch>
          <Route path='/userparks' component={UserListParks} />
          
          </Switch>
          <Contact />
        <Footer />
      </Router>
      </>
    );
}