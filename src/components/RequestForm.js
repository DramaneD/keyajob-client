import React from 'react';
import './RequestForm.css';

const RequestForm = props => {
  return (
    <div className="container">
      <div className="request-form">
        <h1 className="text-center">Submit a request</h1>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-xs-12 col-md-5">
            <form>
              <div className="form-group">
                <input type="text" className="" />
                <label className="control-label" for="input">Email Address</label>
                <i className="bar"></i>
              </div>
              <div className="form-group">
                <input type="text" className="" />
                <label className="control-label" for="input">Subject</label>
                <i className="bar"></i>
              </div>
              <div className="form-group">
                <textarea className="" rows="3"></textarea>
                <label className="control-label" for="textarea">Type someting...</label>
                <i className="bar"></i> 
                <small id="fileHelp" class="form-text text-muted">Please enter the details of your request. A member of our support staff will respond as soon as possible..</small>
              </div>
              <div class="form-group">
                <label className="file-upload-input d-flex justify-content-center" for="InputFile">
                  <input type="file" class="form-control-file" id="InputFile" />
                  <i className="fa fa-chain"></i> Add your File here
                </label>
                <small id="fileHelp" class="form-text text-muted">Maximum file size: 5 Mo</small>
              </div>
              <div className="button-container d-flex justify-content-center">
                <button type="submit" className="button"><span>Submit</span></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestForm;