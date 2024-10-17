import React, { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ViewAllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const axionsequre = useAxiosSecure();

  //get user information
  try {
    axionsequre.get(`/jobs`).then((res) => setJobs(res.data.data));
  } catch (error) {
    console.log(error);
  }
//  console.log(jobs);

  return (
    <div>
      {jobs?.map((job) => (
        <div key={job._id}>
          <h1>{job.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default ViewAllJobs;
