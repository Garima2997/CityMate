import React from 'react';
import '../../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserListPharmacy from '../UserListPharmacy';
import Footer from '../../Footer/Footer'
import Contact from '../../Footer/Contact'


export default function Pharmacy() {
  
    return (
    <>
    <h1 className='user_pharmacy'>List of Pharmacies/Chemists</h1>
    
    <Router>
        <Switch>
          <Route path='/userpharmacy' component={UserListPharmacy} />
          </Switch>
        </Router>
        <Contact />
      <Footer />
      </>
    );
}