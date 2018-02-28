import React from 'react';
import './Navbar.css';

const Navbar = props => {
  return (
    <nav className="navbar  sticky-top navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" >KeyaJob</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation" >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav ml-auto justify-content-end">
          <li className="nav-item">
            <a className="nav-link" >Post a job <span className="sr-only">(current)</span></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className=""><i className="fa fa-ellipsis-h"></i></span>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" >Blog</a>
              <a class="dropdown-item" >Contact action</a>
              <a class="dropdown-item" >About us</a>
            </div>
            </li>
          <li className="nav-item">
            <a className="nav-link" >Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;