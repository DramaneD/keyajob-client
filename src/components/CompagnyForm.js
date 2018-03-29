import React from 'react';
import '../components/CompagnyForm.css';

const CompagnyForm = props => {
  return (
     <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-12 col-xs-12 col-md-5">
          <form>
            <div className="form-group">
              <input type="text" className="" />
              <label className="control-label" for="input">Compagny Name</label>
              <i className="bar"></i>
            </div>
            <div className="form-group">
              <input type="text" className="" />
              <label className="control-label" for="input">Compagny Website Url (Optional)</label>
              <i className="bar"></i>
            </div>
            <div className="form-group">
              <input type="text" className="" />
              <label className="control-label" for="input">Facebook Url (Optional)</label>
              <i className="bar"></i>
            </div>
            <div className="form-group">
              <input type="text" className="" />
              <label className="control-label" for="input">Twitter Url (Optional)</label>
              <i className="bar"></i>
            </div>
            <div className="form-group">
              <input type="text" className="" />
              <label className="control-label" for="input">Linkedin Url (Optional)</label>
              <i className="bar"></i>
            </div>
            <div className="form-group">
              <input type="text" className="" />
              <label className="control-label" for="input">Logo Url (Optional)</label>
              <i className="bar"></i>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CompagnyForm;