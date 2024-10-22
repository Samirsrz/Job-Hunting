import { TbFidgetSpinner } from "react-icons/tb";
import { imageUpload } from "../../api/utils";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import CompanyAnnimation from "../../../public/Annimations/CompanyAnnimation.json";
const CompanyProfile = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const banner = form.banner.files[0];
    const logo = form.logo.files[0];
    const title = form.title.value;
    const description = form.description.value;
    const tag = form.tag.value;
    try {
      setLoading(true);
      const bannerImage = await imageUpload(banner);
      const logoImage = await imageUpload(logo);

      const companyData = {
        bannerImage,
        logoImage,
        title,
        description,
        tag,
        email: user?.email,
        name: user?.displayName || user?.name,
        role: user?.role,
      };
      //  console.table(companyData)
      const { data } = await axiosSecure.post("/company-data", companyData);
      toast.success("Registered successful");
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row p-3 overflow-x-auto gap-4 justify-center items-center">
      <Helmet>
        <title>Job Hunting | Company Form</title>
      </Helmet>

      <Lottie
        animationData={CompanyAnnimation}
        className="h-96 w-72 lg:w-96"
      ></Lottie>

      {/* <div className="max-w-lg  mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Complete Your Company Profile</h1>
            <form onSubmit={handleSubmit}>
           
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Banner Image</span>
                    </label>
                    <input 
                     required
                        name="banner"
                        type="file" 
                        className="file-input file-input-bordered w-full max-w-xs" 
                       
                    />
                </div>

                
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Logo Image</span>
                    </label>
                    <input  required
                    name="logo"
                        type="file" 
                        className="file-input file-input-bordered w-full max-w-xs" 
                        
                    />
                </div>
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input  required
                    name="companyname"
                        type="text" 
                        className="input input-bordered w-full max-w-xs" 
                        
                    />
                </div>

             
               <div className="flex flex-col lg:flex-row gap-5 ">
               <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input  required
                    name="title"
                        type="text" 
                        className="input input-bordered w-full max-w-xs" 
                        placeholder="Company Title"
                    />
                </div>
               <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Tags</span>
                    </label>
                    <input  required
                    name="tag"
                        type="text" 
                        className="input input-bordered w-full max-w-xs" 
                        placeholder="Tags"
                    />
                </div>
               </div>

             
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea  required
                        name="description"
                        className="textarea textarea-bordered w-full " 
                        placeholder="Company Description"
                        rows="4"
                    />
                </div>
                <div>
              <button
                
                type="submit"
                className="bg-primary w-full lg:[100px] rounded-md py-3 text-white"
              >
                    {loading ? (
                  <TbFidgetSpinner className="animate-spin m-auto"></TbFidgetSpinner>
                ) : (
                  "Continue"
                )}
              </button>
            </div>
            </form>
        </div> */}

      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-3xl w-full p-8 bg-white shadow-2xl rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Complete Your Company Profile
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Banner Image
                </span>
              </label>
              <input
                required
                name="banner"
                type="file"
                className="file-input file-input-bordered w-full py-3 px-4 border-2 border-dashed border-gray-300 rounded-lg"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Logo Image
                </span>
              </label>
              <input
                required
                name="logo"
                type="file"
                className="file-input file-input-bordered w-full py-3 px-4 border-2 border-dashed border-gray-300 rounded-lg"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Company Name
                </span>
              </label>
              <input
                required
                name="companyname"
                type="text"
                className="input input-bordered w-full py-3 px-4 border-2 border-dashed border-gray-300 rounded-lg"
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg font-medium">Title</span>
                </label>
                <input
                  required
                  name="title"
                  type="text"
                  className="input input-bordered w-full py-3 px-4 border-2 border-dashed border-gray-300 rounded-lg"
                  placeholder="Company Title"
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg font-medium">Tags</span>
                </label>
                <input
                  required
                  name="tag"
                  type="text"
                  className="input input-bordered w-full py-3 px-4 border-2 border-dashed border-gray-300 rounded-lg"
                  placeholder="Tags"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Description
                </span>
              </label>
              <textarea
                required
                name="description"
                className="textarea textarea-bordered w-full py-3 px-4 border-2 border-dashed border-gray-300 rounded-lg"
                placeholder="Company Description"
                rows="4"
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-blue-500 w-full rounded-md py-4 text-white font-semibold transition duration-300 hover:bg-blue-600"
              >
                {loading ? (
                  <TbFidgetSpinner className="animate-spin m-auto"></TbFidgetSpinner>
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
