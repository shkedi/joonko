import React from 'react';
import axios from "axios";

// API GET Route
// http://localhost:3001/api/v1/users/jobs;

const Jobs = async () => {
  debugger;
  let jobs;
    try {
      jobs = await axios.get('http://localhost:3001/api/v1/users/jobs')
    } catch (err) {
      console.error(err);
    }
  
  return (
    <div className="jobs">
      {jobs ? jobs.map(job => job): 'Jobs page'}
    </div>
  )
}

export default Jobs;