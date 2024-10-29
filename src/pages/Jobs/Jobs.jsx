import { useEffect, useState } from "react";
import JobCard from "../../components/jobs/JobCard";
import { FaSearch } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import { RxReload } from "react-icons/rx";
import noData from "../../../public/Annimations/no-data.json";
import errorData from "../../../public/Annimations/error.json";
import loadingData from "../../../public/Annimations/loading.json";
import {
  useGetJobsQuery,
  useGetCategoriesQuery,
} from "../../RTK/features/jobsApi";
import { useLocation } from "react-router-dom";
import { axiosCommon } from "../../hooks/useAxiosCommon";

const Jobs = ({ job }) => {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("asc");
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [catCount, setCatCount] = useState(5);
  const location = useLocation();
  const searchJobs = location.state?.jobs || [];
  const [sJobs, setSjobs] = useState(searchJobs);
  // console.log(sJobs,location);

  const {
    data: jobData,
    isFetching: isFetchingJobs,
    isLoading,
    isError,
    refetch,
  } = useGetJobsQuery({
    category,
    sort,
    search,
  });
  let jobs = jobData?.data || [];

  const { data: categoryData } = useGetCategoriesQuery();
  const categories = categoryData?.data || [];

  const fetchSuggestions = async (search) => {
    if (search?.length > 0) {
      try {
        const { data } = await axiosCommon(`/job-suggestions?search=${search}`);

        if (data.success) {
          setSuggestions(data.data);
        }
      } catch (error) {
        console.error("Error fetching job suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    fetchSuggestions(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };

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

  if (isError) {
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

  if (!jobs?.length) {
    return (
      <div className="flex items-center justify-center flex-col py-20">
        <h2 className="text-3xl font-semibold">No job found!</h2>
        <Lottie animationData={noData} className="h-72 w-72 lg:w-96"></Lottie>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      <Helmet>
        <title>Next-Hire | Jobs</title>
      </Helmet>
      <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] relative overflow-hidden">
        <img
          src="https://i.ibb.co.com/tb5pL4S/Career-Banner.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex mx-auto w-full justify-center items-center lg:mt-14 mb-5 flex-wrap gap-2 md:gap-4 lg:gap-6 p-4">
        <div>
          <h2 className="text-base md:text-lg font-semibold mb-1 md:mb-2 dark:text-white">
            Categories
          </h2>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered select-sm border-sky-500 hover:outline-sky-500 hover:border-sky-500"
          >
            <option value="">Default</option>
            {categories?.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h2 className="text-base md:text-lg font-semibold mb-1 md:mb-2 dark:text-white">
            Sort
          </h2>
          <select
            onChange={(e) => setSort(e.target.value)}
            className="select select-bordered select-sm border-sky-500 hover:outline-sky-500 hover:border-sky-500"
          >
            <option value="">Default</option>
            <option value="dsc">Max Salary</option>
            <option value="asc">Min Salary</option>
          </select>
        </div>
        <div>
          <h2 className="text-base md:text-lg font-semibold mb-1 md:mb-2 dark:text-white">
            Search
          </h2>
          <form
            className="flex items-center justify-center w-fit"
            onSubmit={handleSubmit}
          >
            <input
              name="search"
              list="job-suggestions"
              onInput={handleInputChange}
              type="text"
              className="input border-sky-500 hover:outline-sky-500 hover:border-sky-500 input-sm rounded-r-none"
              placeholder="Search Here"
            />
            <button
              type="submit"
              className="btn btn-sm bg-sky-500 border-sky-500 text-white rounded-l-none"
            >
              <FaSearch className="inline" />
            </button>
            <datalist id="job-suggestions">
              {suggestions?.map((suggestion, index) => (
                <option key={index} value={suggestion} />
              ))}
            </datalist>
          </form>
        </div>
      </div>
      {isFetchingJobs && (
        <div className="flex  justify-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-between gap-6 m-6">
        {sJobs?.length > 0
          ? sJobs?.map((job, idx) => <JobCard {...{ job }} key={idx} />)
          : jobs?.map((job, idx) => <JobCard {...{ job }} key={idx} />)}
      </div>
    </div>
  );
};

export default Jobs;
