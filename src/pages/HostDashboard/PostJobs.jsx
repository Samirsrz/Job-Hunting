import { TbFidgetSpinner } from "react-icons/tb";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { imageUpload } from "../../api/utils";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaCreditCard } from "react-icons/fa";

const PostJobs = () => {
  const [loading, setLoading] = useState(false);
const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
  const [paymentDone, setPaymentDone] = useState(false);
  const [fetching, setIsFetching] = useState(false)
  useEffect(() => {
    const fetchPaymentInfo = async () => {
   //   if (!user?.email || loading) return;
  
      try {
        setIsFetching(true);
        const response = await axiosSecure.get(
          `${import.meta.env.VITE_API_URL}/api/payment/${user?.email}`
        );
  
       
     if(response.data){
      setPaymentDone(true)
     }
     else{
      setPaymentDone(false)
     }
        
     console.log(paymentDone);
      } catch (error) {
        console.error("Error fetching payment data:", error);
        //toast.error('Error fetching payment data');
      } finally {
        setIsFetching(false);
      }
    };
  
    fetchPaymentInfo();
  }, [user?.email, loading]);
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!paymentDone){
      return toast.error('Please take subscription before posting')
     
    }
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
      // form.reset();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

    // form.reset();
    setLoading(false);
  };

  return (
    <div>
      <Helmet>
        <title>Next-Hire | Post-Jobs</title>
      </Helmet>
      <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl lg:mt-5">
        <h1 className="lg:text-5xl my-7 font-bold">Job Post Form</h1>

        <form onSubmit={handleSubmit} className="mt-8 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="company"
                  className="block font-semibold text-gray-600"
                >
                  Company Name
                </label>

                <input
                  required
                  placeholder="Company Name"
                  className="w-full px-4 py-3 focus:outline-blue-800 rounded-md"
                  name="company"
                  id="company"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label
                  htmlFor="Job-Title"
                  className="block font-semibold text-gray-600"
                >
                  Job Title
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border focus:outline-blue-800 rounded-md "
                  name="title"
                  id="title"
                  type="text"
                  placeholder="Job-title"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label
                  htmlFor="category"
                  className="block font-semibold text-gray-600"
                >
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
                <label
                  htmlFor="job-type"
                  className="block font-semibold text-gray-600"
                >
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

            <div className=" space-y-6">
              <div className="flex flex-col lg:space-y-0 lg:flex-row justify-between items-start gap-2">
                <div className="space-y-1 w-full text-sm">
                  <label
                    htmlFor="salary"
                    className="block font-semibold text-gray-600"
                  >
                    Salary
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border focus:outline-blue-800 rounded-md "
                    name="salary"
                    id="salary"
                    type="number"
                    placeholder="$"
                    required
                  />
                </div>

                <div className="ml-0 lg:ml-3">
                  <label
                    htmlFor="image"
                    className="block font-semibold mb-2 text-sm"
                  >
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
                <label
                  htmlFor="job-type"
                  className="block font-semibold text-gray-600"
                >
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
                  <label
                    htmlFor="location"
                    className="block font-semibold text-gray-600"
                  >
                    Location
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border focus:outline-blue-800 rounded-md "
                    name="location"
                    id="location"
                    type="text"
                    placeholder="Location"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1 text-sm">
                <label
                  htmlFor="description"
                  className="block font-semibold text-gray-600"
                >
                  Description
                </label>

                <textarea
                  id="description"
                  className="block rounded-md focus:rose-300 w-full h-36 px-4 py-3 text-gray-800  border focus:outline-blue-800 "
                  name="description"
                ></textarea>
              </div>
            </div>
          </div>

        


<div className="max-w-md mx-auto bg-white shadow-lg rounded-lg animate-bounce overflow-hidden mt-10">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          {paymentDone ? "Thank you for subscribing!" : "Subscription Needed"}
        </h2>
        <p className="mt-4 text-gray-600">
          {paymentDone 
            ? "Your subscription is active. Enjoy our features!"
            : "Please complete your payment to activate your subscription and access exclusive features."}
        </p>

      
        {!paymentDone && (
          <div className="mt-6">
            <Link
              to="/dashboard/payment"
              className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300 ease-in-out"
            >
              <FaCreditCard className="mr-2" />
              Pay Now
            </Link>
          </div>
        )}
      </div>

      {!paymentDone && (
        <div className="px-6 py-4 bg-gray-100 border-t text-gray-500 text-sm">
          Secure and fast payments are powered by trusted providers.
        </div>
      )}
    </div>


          <button
            disabled={loading}
            type="submit"
            className="w-full p-3 mt-5 text-center font-semibold text-white transition duration-200 rounded shadow-md bg-primary"
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
