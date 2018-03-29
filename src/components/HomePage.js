import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import './HomePage.css';

const HomePage = props => {
  return (
    <Route exact path="/" render={() => (
      <Redirect to="/jobs" />
    )} />
  )
}

export default HomePage;