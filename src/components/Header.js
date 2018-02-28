import React from 'react';
import './Header.css';

const Header = props => {
  return (
    <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Good job for right person</h1>
          <p className="lead text-muted">We collect awesome job witch fit your career vison for better life.
Connecting employer to right candidate and cadidate to job they want is our goal 
at JobBoard .</p>
          <p>
            <a className="btn btn-primary my-2" style={{marginRight: 5}}>Post A Job</a>
            <a className="btn btn-outline-secondary my-2">Job Alert</a>
          </p>
        </div>
      </section>
  )
}

export default Header;