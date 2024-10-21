import { useState, useEffect } from "react";
import JobCard from "../../components/jobs/JobCard";
import { localGetJobs } from "../../libs/localJobs";
import { useGetJobsByIdsQuery } from "../../RTK/features/jobsApi";
import { useSavedJobs } from "../../providers/SavedJobsContext";
import Lottie from "lottie-react";
import { RxReload } from "react-icons/rx";
import noData from "../../../public/Annimations/no-data.json";
import errorData from "../../../public/Annimations/error.json";
import loadingData from "../../../public/Annimations/loading.json";

const SavedJobs = () => {
  const { savedJobs } = useSavedJobs();
  const { data, error, isLoading, refetch } = useGetJobsByIdsQuery(savedJobs, {
    skip: savedJobs.length === 0,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center flex-col py-20">
        <Lottie
          animationData={loadingData}
          className="h-72 w-72 lg:w-96 my-10"
        ></Lottie>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center flex-col py-20">
        <h2 className="text-3xl font-semibold">Something went wrong!</h2>
        <Lottie
          animationData={errorData}
          className="h-44 w-44 lg:w-96 my-10"
        ></Lottie>
        <button onClick={refetch} className="btn btn-error">
          Try Again <RxReload className="inline" />
        </button>
      </div>
    );
  }

  if (!savedJobs?.length) {
    return (
      <div className="flex items-center justify-center flex-col py-20">
        <h2 className="text-3xl font-semibold">No saved job found!</h2>
        <Lottie animationData={noData} className="h-72 w-72 lg:w-96"></Lottie>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center md:font-semibold font-medium md:text-4xl text-2xl lg:my-20 md:my-10 my-6">
        Saved Jobs
      </h1>
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
