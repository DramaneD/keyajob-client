import React, {Component} from 'react' ;
import {Link} from 'react-router-dom';
import './JobItem.css';
import PropTypes from 'prop-types';

class JobItem extends Component {
  static PropTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    companyBrand: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    favorite: PropTypes.bool.isRequired,
    category: PropTypes.string.isRequired,
    jobType: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    createdAt: PropTypes.string.isRequired
  }
  render() {
    const {title, companyBrand, companyName, favorite, category, jobType, createdAt} = this.props;
    const tags = this.props.tags.map((tag, index) => (
      <li className="tag" key={index}><span><i className="fa fa-tags"></i></span>{tag}</li>
    ));
    return (
      <div className="row d-flex justify-content-between">
          <div className="col-12">
            <div className="jobItem">
              <div className="row">
                <div className="col-2 job-meta">
                  <span><i className="fa fa-star-o">{favorite}</i></span>
                  <span><img className="img-fluid" style={{width: 60}} src={companyBrand} alt={title} /></span>
                </div>
                <div className="col-8">
                  <div className="job-details">
                    <h5 style={{display: "inline-block"}}><Link to="/job/123">{title}</Link></h5>
                    <ul className="list-unstyled d-flex flex-row flex-wrap">
                      <li className="category Development">{category}</li>
                      <li className="job-type"><span><i className="fa fa-clock-o"></i></span>{jobType}</li>
                      <li>
                        <ul className="list-unstyled d-flex flex-row flex-wrap">
                          {tags} 
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-12 col-md-2">
                  <p className="text-md-right text-sm-left">{companyName}</p>
                  <p className="text-md-right text-sm-left">{createdAt}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default JobItem;