import React from 'react';
import '../../../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddParks from '../AddParks';
import ListParks from '../ListParks';
import EditParks from '../EditParks';

export default function Parks() {
    return (
        <>
        <h1 className='parks'>Parks</h1>
        <Router>
            <Switch>
              <Route path='/parks' component={ListParks} />
              <Route path='/add-parks' component={AddParks} />
              <Route path='/edit-parks' component={EditParks} />
            </Switch>
          </Router>
          </>
        );
}