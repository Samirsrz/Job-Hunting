import { TbFidgetSpinner } from "react-icons/tb";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { imageUpload } from "../../api/utils";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const PostJobs = () => {
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const category = form.category.value;
    const company = form.company.value;
    const title = form.title.value;
    const type = form.type.value;
    const salary = form.salary.value;
    const location = form.location.value;
    const description = form.description.value;
    const experience = form.experience.value;
    const image = form.image.files[0];

    try {
      setLoading(true);
      const logo = await imageUpload(image);
      const jobData = {
        category,
        company,
        title,
        type,
        salary,
        location,
        description,
        logo,
        experience,
      };
 //     console.log("this is post data info", jobData);

      const { data } = await axiosSecure.post(`/jobs/new`, jobData);

      if (data.success) toast.success("Posted your job");
      else {
        throw new Error(data.message);
      }
      setLoading(false);
      form.reset();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

    form.reset();
    setLoading(false);
  };

  return (
    <div>
      <Helmet>
        <title>Next-Hire | Post-Jobs</title>
      </Helmet>
      <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
        <h1 className="lg:text-5xl my-7 font-bold">~~Post-Jobs Form~~</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="company" className="block text-gray-600">
                  Company Name
                </label>

                <input
                  required
                  placeholder="Company Name"
                  className="w-full px-4 py-3 border-primary focus:outline-blue-800 rounded-md"
                  name="company"
                  id="company"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="Job-Title" className="block text-gray-600">
                  Job Title
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-primary focus:outline-blue-800 rounded-md "
                  name="title"
                  id="title"
                  type="text"
                  placeholder="Job-title"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="category" className="block text-gray-600">
                  Category
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-primary focus:outline-blue-800 rounded-md"
                  name="category"
                  id="category"
                >
                  {/* <option defaultValue="" disabled selected>Select a category</option> */}
                  <option>Design</option>
                  <option>Telecommunication</option>
                  <option>Tourism</option>
                  <option>Engineering</option>
                  <option>Finance</option>
                  <option>Education</option>
                  <option>Advertising</option>
                  <option>Business/Development</option>
                  <option>Healthcare</option>
                  <option>Customer Service</option>
                  <option>Supply Chain</option>
                  <option>Human Resources</option>
                  <option>Internship</option>
                  <option>Startup</option>
                  <option>Banking & Finance</option>
                  <option>Data Science</option>
                  <option>Remote</option>
                  <option>Software & IT</option>
                  <option>Project Mgmt</option>
                  <option>Analytics</option>

                </select>
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="job-type" className="block text-gray-600">
                  Job-Type
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-primary focus:outline-blue-800 rounded-md"
                  name="type"
                  id="type"
                >
                  {/* <option defaultValue="" disabled selected>Select job type</option> */}

                  <option>Part-Time Remote</option>
                  <option>Full-Time Remote</option>
                  <option>Part-Time Desk</option>
                  <option>Full-Time Desk</option>
                </select>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between gap-2">
                <div className="space-y-1 w-full text-sm">
                  <label htmlFor="salary" className="block text-gray-600">
                    Salary
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-primary focus:outline-blue-800 rounded-md "
                    name="salary"
                    id="salary"
                    type="number"
                    placeholder="$"
                    required
                  />
                </div>

                <div className="p-3">
                  <label htmlFor="image" className="block mb-2 text-sm">
                    Select Company Logo:
                  </label>
                  <input
                    required
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                  />
                </div>
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="job-type" className="block text-gray-600">
                  Experience
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-primary focus:outline-blue-800 rounded-md"
                  name="experience"
                  id="experience"
                >
                  <option>fresher</option>
                  <option>1-year</option>
                  <option>2-year</option>
                  <option>3-year</option>
                  <option>4-year</option>
                </select>
              </div>

              <div className="justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label htmlFor="location" className="block text-gray-600">
                    Location
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-primary focus:outline-blue-800 rounded-md "
                    name="location"
                    id="location"
                    type="text"
                    placeholder="Location"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="description" className="block text-gray-600">
                  Description
                </label>

                <textarea
                  id="description"
                  className="block rounded-md focus:rose-300 w-full h-36 px-4 py-3 text-gray-800  border border-primary focus:outline-blue-800 "
                  name="description"
                ></textarea>
              </div>
            </div>
          </div>

          <Link to="/dashboard/payment"></Link>

          <button
            disabled={loading}
            type="submit"
            className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-primary"
          >
            {loading ? (
              <TbFidgetSpinner className="animate-spin m-auto" />
            ) : (
              " Save & Continue"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostJobs;
