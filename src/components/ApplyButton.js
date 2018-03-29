import React from 'react';
import {Link} from 'react-router-dom';
import './ApplyButton.css';

const ApplyButton = props => {
  return(
    <div className="button-container d-flex justify-content-center">
      <button className="button"><Link to=""><span>Apply</span></Link></button>
    </div>
  )
}

export default ApplyButton;
