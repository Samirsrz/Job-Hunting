const jobCategories = [
  "Software Development",
  "Data Science",
  "Marketing",
  "Sales",
  "Customer Support",
  "Human Resources",
  "Graphic Design",
  "Project Management",
];

const Jobs = () => {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold mt-10 mb-6">Jobs</h1>
      <div>
        <h2 className="text-lg font-semibold m-2">Categories</h2>
        <div className="flex flex-row flex-wrap gap-2 px-2">
          {jobCategories.map((cat, idx) => (
            <button className="btn btn-sm" key={idx}>
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
