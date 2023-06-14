import React from 'react';
import '../../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListPharmacyComponent from '../ListPharmacyComponent';
import AddPharmacyComponent from '../AddPharmacyComponent';
import EditPharmacyComponent from '../EditPharmacyComponent'


export default function Pharmacy() {
    return (
    <>
    <h1 className='pharmacys'>Pharmacy</h1>
    <Router>
        <Switch>
          <Route path='/pharmacy' component={ListPharmacyComponent} />
          <Route path='/add-pharmacy' component={AddPharmacyComponent} />
          <Route path='/edit-pharmacy' component={EditPharmacyComponent} />
        </Switch>
        </Router>
   
      </>
    );
}