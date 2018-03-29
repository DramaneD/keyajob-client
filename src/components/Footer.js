import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = props => {
  return (
    <div className="footer text-center">
      <div className="row">
        <div className="col-6 offset-3 ">
          <p>
            <ul className="list-unstyled d-flex flex-row justify-content-center">
              <li><a href=""><span><i className="fa fa-instagram"></i></span></a></li>
              <li><a href=""><span><i className="fa fa-facebook-f"></i></span></a></li>
              <li><a href=""><span><i className="fa fa-twitter"></i></span></a></li>
            </ul>
          </p>
          <p className="d-flex flex-column">
            <a href="">About Us</a>
            <Link to="/request/new"><a>Contact</a></Link>
          </p>
          <p><a href="">Terms & Conditions</a></p>
          <p>© KeyaJob 2018</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;