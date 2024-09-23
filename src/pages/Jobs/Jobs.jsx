import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../../components/jobs/JobCard";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/jobs?category=${category}`)
      .then((data) => setJobs(data.data.data));
  }, [category]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/category")
      .then((data) => setCategories(data.data.data));
  }, []);

  return (
    <div>
      <h1 className="text-center text-5xl font-bold mt-10 mb-6">
        Jobs ({jobs?.length})
      </h1>
      <div className="mx-6">
        <h2 className="text-lg font-semibold my-2">Categories</h2>
        <div className="flex flex-row flex-wrap gap-2">
          <button
            className={`btn btn-sm ${category || "bg-primary text-white"}`}
            onClick={() => {
              setCategory("");
            }}
          >
            All
          </button>
          {categories?.map((cat, idx) => (
            <button
              className={`btn btn-sm ${
                category === cat && "bg-primary text-white"
              }`}
              onClick={() => {
                setCategory(cat);
              }}
              key={idx}
            >
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
