import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = props => {
  return (
    <nav className="navbar  sticky-top navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand" >KeyaJob</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation" >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav ml-auto justify-content-end">
          <li className="nav-item">
            <Link className="nav-link" to="/jobs/new">Post a job <span className="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item dropdown">
            <Link to="" className="nav-link"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className=""><i className="fa fa-ellipsis-h"></i></span>
            </Link>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/blog" className="dropdown-item" >Blog</Link>
              <Link to="/request/new" className="dropdown-item" >Contact</Link>
              <Link to="/about" className="dropdown-item" >About us</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="nav-link" >Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link" >Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;