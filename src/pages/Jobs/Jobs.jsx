import JobCard from "../../components/jobs/JobCard";
import { jobCategories } from "./bin/jobCategories";
import { jobData } from "./bin/jobData";
const Jobs = () => {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold mt-10 mb-6">
        Jobs ({jobData?.length})
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
        {jobData?.map((job, idx) => (
          <JobCard {...{ job }} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
