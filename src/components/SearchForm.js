import React from 'react';
import './SearchForm.css';

const SearchForm = props => {
  return (
    <div className="searchSection">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <h3 className="text-center mt-5 mb-5">Search jobs that match your skills and goals!</h3>
        </div>
      </div>
      <div className="row mt-5 mb-5 d-flex justify-content-center">
        <div className="col-md-8">
          <form className="d-flex justify-content-center" onSubmit={this.handleSubmit}>
            <div className="">
              <span><i className="fa fa-search"></i></span>
              <input
              id=""
              type="text"
              name="search"
              className="form-control"
              autoComplete="off"
              placeholder="Search by position, industry, keywords..."/>
            </div>
            
          </form>
        </div>
      </div>
    </div>
    
  );
}

export default SearchForm;