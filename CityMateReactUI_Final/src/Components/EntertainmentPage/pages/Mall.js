import React from 'react';
import '../../../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListMalls from '../ListMalls';
import AddMalls from '../AddMall';
import EditMalls from '../EditMalls';

export default function Malls() {
  return (
    <>
    <h1 className='malls'>Malls</h1>
    <Router>
        <Switch>
          <Route path='/malls' component={ListMalls} />
          <Route path='/add-malls' component={AddMalls} />
          <Route path='/edit-malls' component={EditMalls} />
        </Switch>
      </Router>
      </>
    );
}