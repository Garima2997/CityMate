import React from 'react';
import '../../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListRestaurant from '../ListRestaurant'
import AddRestaurant from '../AddRestaurant'
import EditRestaurant from '../EditRestaurant'

export default function Restaurants() {
    return (
    <>
    <h1 className='restaurants'>Restaurants and Cafe's</h1>
    <Router>
        <Switch>
          <Route path='/restaurant' component={ListRestaurant} />
          <Route path='/add-restaurant' component={AddRestaurant} />
          <Route path='/edit-restaurant' component={EditRestaurant} />
        </Switch>
      </Router>
      </>
    );
}