import React from 'react';
import CompagnyForm from '../components/CompagnyForm';
import JobForm from '../components/JobForm';
import ConfirmJobPost from '../components/ConfirmJobPost';

const steps = [
  {name: 'Compagny Details', component: <CompagnyForm />},
  {name: 'Job Details', component: <JobForm />},
  {name: 'Done', component: <ConfirmJobPost />}
]

export {steps}