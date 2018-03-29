import React from 'react';
import MultiStep from '../components/Multistep';
import {steps} from '../components/GroupSteps';

const JobPostForm = props => {
  return (
    <MultiStep steps={steps} />
  )
}

export default JobPostForm;