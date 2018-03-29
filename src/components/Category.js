import React from 'react';
import './Category.css';

const Category = props => {
  return (
    <div className="col-sm-12 col-md-3">
      <h4>Categories</h4>
      <ul class="list-group category-list">
        <a href=""><li class="list-group-item d-flex justify-content-between align-items-center">
          Development
          <span class="badge badge-primary badge-pill">14</span>
        </li></a>
        <a href=""><li class="list-group-item d-flex justify-content-between align-items-center">
          Marketing
          <span class="badge badge-primary badge-pill">2</span>
        </li></a>
        <a href=""><li class="list-group-item d-flex justify-content-between align-items-center">
          Administration
          <span class="badge badge-primary badge-pill">1</span>
        </li></a>
        <a href=""><li class="list-group-item d-flex justify-content-between align-items-center">
          Finance
          <span class="badge badge-primary badge-pill">14</span>
        </li></a>
        <a href=""><li class="list-group-item d-flex justify-content-between align-items-center">
          Human Resources
          <span class="badge badge-primary badge-pill">2</span>
        </li></a>
        <a href=""><li class="list-group-item d-flex justify-content-between align-items-center">
          Consulting
          <span class="badge badge-primary badge-pill">1</span>
        </li></a>
        <a href=""><li class="list-group-item d-flex justify-content-between align-items-center">
          Sales
          <span class="badge badge-primary badge-pill">2</span>
        </li></a>
        <a href=""><li class="list-group-item d-flex justify-content-between align-items-center">
          Management
          <span class="badge badge-primary badge-pill">1</span>
        </li></a>
      </ul>
    </div>
  )
}

export default Category;