import React from 'react';
import '../../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserListMalls from '../UserListMalls';
import Contact from '../../Footer/Contact.js';
import Footer from '../../Footer/Footer.js';

export default function Malls() {
    return (
    <>
    <h1 className='malls'>Malls</h1>
    <Router>
        <Switch>
          <Route path='/usermalls' component={UserListMalls} />
          
        </Switch>
        <Contact />
        <Footer />
      </Router>
      </>
    );
}