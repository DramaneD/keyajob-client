import React from 'react';

const JobForm = props => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-12 col-xs-12 col-md-5">
          <form>
            <div className="form-group">
              <input type="text" className="" />
              <label className="control-label" for="input">Job Title</label>
              <i className="bar"></i>
            </div>
            <div className="form-group">
              <select className="">
                <option>Job Type</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Contract</option>
                <option>On Going</option>
              </select>
              <label className="control-label" for="select"></label>
              <i className="bar"></i>
            </div>
            <div className="form-group">
              <select className="">
                <option>Categories</option>
                <option>Development</option>
                <option>Design</option>
                <option>Finance</option>
                <option>Maketing</option>
              </select>
              <label className="control-label" for="select"></label>
              <i className="bar"></i>
            </div>

            <div className="form-group">
              <select className="">
                <option>Tags</option>
                <option>User Experience</option>
                <option>Front End</option>
                <option>User Interface</option>
                <option>JavaScript</option>
              </select>
              <label className="control-label" for="select"></label>
              <i className="bar"></i>
            </div>
            <div className="form-group">
              <input type="text" className="" />
              <label className="control-label" for="input">Application Url</label>
              <i className="bar"></i>
            </div>
            <div className="form-group">
              <textarea className="" rows="3"></textarea>
              <label className="control-label" for="textarea">Description</label>
              <i className="bar"></i>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default JobForm;