import { useState, useEffect } from "react";
import JobCard from "../../components/jobs/JobCard";
import { localGetJobs } from "../../libs/localJobs";
import { useGetJobsByIdsQuery } from "../../RTK/features/jobsApi";
import { useSavedJobs } from "../../providers/SavedJobsContext";

const SavedJobs = () => {
  const { savedJobs } = useSavedJobs();
  const { data, error, isLoading } = useGetJobsByIdsQuery(savedJobs, {
    skip: savedJobs.length === 0,
  });

  if (isLoading) return <p>Loading saved jobs...</p>;
  if (error) return <p>Error loading jobs: {error.message}</p>;

  if (!savedJobs?.length) {
    return <p>No saved jobs found.</p>;
  }

  return (
    <div>
      <h1>Saved Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-between gap-6 m-6">
        {data.data.map((job, idx) => (
          <JobCard
            {...{ job }}
            key={idx}
            cbUnSave={() => {
              setJobIds(localGetJobs());
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SavedJobs;
