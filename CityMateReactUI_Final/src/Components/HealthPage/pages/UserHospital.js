import React from 'react';
import '../../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserListHospital from '../UserListHospital'
import Footer from '../../Footer/Footer'
import Contact from '../../Footer/Contact'

export default function Hospital() {
    return (
    <>
    <h1 className='user_hospital'>List of Hospitals</h1>
    <Router>
        <Switch>
          <Route path='/userhospital' component={UserListHospital} />
           </Switch>
      </Router>
      <Contact />
      <Footer />
      </>
);
}