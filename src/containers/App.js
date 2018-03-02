import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';

class App extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <Header />
        <div className="container">
          <SearchForm />
        </div>
        
      </div>
    )
  }
}

export default App;
