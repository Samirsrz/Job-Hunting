import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../../components/jobs/JobCard";
import { jobCategories } from "./bin/jobCategories";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/jobs")
      .then((data) => setJobs(data.data.data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-5xl font-bold mt-10 mb-6">
        Jobs ({jobs?.length})
      </h1>
      <div className="mx-6">
        <h2 className="text-lg font-semibold my-2">Categories</h2>
        <div className="flex flex-row flex-wrap gap-2">
          {jobCategories?.map((cat, idx) => (
            <button className="btn btn-sm" key={idx}>
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-between gap-6 m-6">
        {jobs?.map((job, idx) => (
          <JobCard {...{ job }} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
