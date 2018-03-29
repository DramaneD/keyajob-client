import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './JobList.css';
import JobItem from '../components/JobItem';

class JobList extends Component {
  static PropTypes = {
    jobs: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const jobs = this.props.jobs.map((j, index) => (
      <JobItem key={j.id} {...j} />
    ));
    return (
      <div className="col-sm-12 col-md-9 jobList">
        {jobs}
        <p className="d-flex justify-content-center">
          <a className="btn btn-primary my-2" style={{marginRight: 5}}>Load More</a>
        </p>
      </div>
    )
  }
  
}

export default JobList;