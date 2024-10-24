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
  useGetJobSuggestionsQuery,
} from "../../RTK/features/jobsApi";
import { useLocation } from "react-router-dom";

const Jobs = ({job}) => {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("asc");
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [catCount, setCatCount] = useState(5);
  const location = useLocation();
  const searchJobs = location.state?.jobs || [];
  const [sJobs,setSjobs]=useState(searchJobs)
  // console.log(sJobs,location);
  

  const {
    data: jobData,
    isFetching: isFetchingJobs,
    isError,
    refetch,
  } = useGetJobsQuery({
    category,
    sort,
    search,
  });
  let jobs = jobData?.data || [];

  // if (searchJobs.length>0) {
  //   return jobs=searchJobs
  // }

  const { data: categoryData } = useGetCategoriesQuery();
  const categories = categoryData?.data || [];

  const { data: suggestionData } = useGetJobSuggestionsQuery(search, {
    skip: !search,
  });

  useEffect(() => {
    if (suggestionData?.success) {
      setSuggestions(suggestionData.data);
    }
  }, [suggestionData]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!value) setSearch("");
    else setSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };

  if (isFetchingJobs) {
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
    <div>
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

      <div className="flex mx-auto w-full justify-center items-center lg:mt-14 mb-5 flex-wrap gap-6 ">
        <div className="px-4">
          <h2 className="text-lg font-semibold my-2">Categories</h2>
          <div className="flex flex-row flex-wrap gap-2">
            <button
              className={`btn btn-sm ${category || "bg-primary text-white"}`}
              onClick={() => setCategory("")}
            >
              All
            </button>
            {categories?.slice(0, catCount)?.map((cat, idx) => (
              <button
                className={`btn btn-sm ${
                  category === cat && "bg-primary text-white"
                }`}
                onClick={() => setCategory(cat)}
                key={idx}
              >
                {cat}
              </button>
            ))}
            <button
              className={`btn btn-sm ${
                catCount !== 5
                  ? "bg-orange-500 text-white"
                  : "bg-green-500 text-white"
              }`}
              onClick={() =>
                setCatCount(
                  catCount === categories?.length ? 5 : categories?.length
                )
              }
            >
              {catCount !== categories?.length ? "+ more" : "- less"}
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold my-2">Search</h2>
          <form
            className="flex items-center justify-center w-fit"
            onSubmit={handleSubmit}
          >
            <input
              name="search"
              list="job-suggestions"
              onInput={handleInputChange}
              type="text"
              className="input input-primary input-sm rounded-r-none"
              placeholder="Search Here"
            />
            <button
              type="submit"
              className="btn btn-sm btn-primary rounded-l-none"
            >
              <FaSearch className="inline" />
            </button>
            <datalist id="job-suggestions">
              {suggestions.map((suggestion, index) => (
                <option key={index} value={suggestion} />
              ))}
            </datalist>
          </form>
        </div>
        <div>
          <h2 className="text-lg font-semibold my-2">Sort</h2>
          <div className="flex flex-row flex-wrap gap-2">
            <button
              className={`btn btn-sm ${
                sort === "asc" && "bg-primary text-white"
              }`}
              onClick={() => setSort("asc")}
            >
              Asc Salary
            </button>
            <button
              className={`btn btn-sm ${
                sort === "dsc" && "bg-primary text-white"
              }`}
              onClick={() => setSort("dsc")}
            >
              Dsc Salary
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-between gap-6 m-6">
      { sJobs?.length>0 ? sJobs?.map((job, idx) => (
          <JobCard {...{ job }} key={idx} />
        )):

        jobs?.map((job, idx) => (
          <JobCard {...{ job }} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
