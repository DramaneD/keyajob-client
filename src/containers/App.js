import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './App.css';
import Navbar from '../components/Navbar';
import Main from '../containers/Main';

class App extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <Main />
      </div>
    )
  }
}

export default withRouter((App));
