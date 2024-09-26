import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../../components/jobs/JobCard";
import { FaSearch } from "react-icons/fa";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("asc");
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [catCount, setCatCount] = useState(5);
  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/jobs?category=${category}&sort=${sort}&search=${search}`
      )
      .then((data) => setJobs(data.data.data));
  }, [category, sort, search]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/category")
      .then((data) => setCategories(data.data.data));
  }, []);

  const fetchSuggestions = async (search) => {
    if (search.length > 0) {
      try {
        const response = await fetch(
          `http://localhost:8000/job-suggestions?search=${search}`
        );
        const data = await response.json();

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
    if (!value) setSearch("");
    else fetchSuggestions(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };

  return (
    <div>
      <h1 className="text-center text-5xl font-bold mt-10 mb-6">
        Jobs ({jobs?.length})
      </h1>
      <div className="flex flex-wrap gap-6 mx-6">
        <div>
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
            {categories?.slice(0, catCount)?.map((cat, idx) => (
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
            <button
              className={`btn btn-sm ${
                catCount !== 5
                  ? "bg-orange-500 text-white"
                  : "bg-green-500 text-white"
              }`}
              onClick={() => {
                setCatCount(
                  catCount === categories?.length ? 5 : categories?.length
                );
              }}
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
              onClick={() => {
                setSort("asc");
              }}
            >
              Asc Salary
            </button>
            <button
              className={`btn btn-sm ${
                sort === "dsc" && "bg-primary text-white"
              }`}
              onClick={() => {
                setSort("dsc");
              }}
            >
              Dsc Salary
            </button>
          </div>
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
