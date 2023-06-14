
import React from 'react';
import '../../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListHospitalComponent from '../ListHospitalComponent';
import AddHospitalComponent from '../AddHospitalComponent';
import EditHospitalComponent from '../EditHospitalComponent'


export default function Hospital() {
    return (
    <>
    <h1 className='hospitals'>Hospital</h1>
    <Router>
        <Switch>
          <Route path='/hospital' component={ListHospitalComponent} />
          <Route path='/add-hospital' component={AddHospitalComponent} />
          <Route path='/edit-hospital' component={EditHospitalComponent} />
        </Switch>
        </Router>
     
      </>
    );
}