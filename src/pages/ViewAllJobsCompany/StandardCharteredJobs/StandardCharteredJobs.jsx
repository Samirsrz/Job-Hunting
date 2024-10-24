// import { useEffect, useState } from 'react';
// import { FaRegBookmark, FaMapMarkerAlt, FaBriefcase, FaRupeeSign, FaStar } from 'react-icons/fa'; // Importing icons
// import { AiFillStar } from 'react-icons/ai'; // Rating star icon
// import { MdOutlineContactPage } from "react-icons/md";
// import companyLogo from '../../../../public/company/32270.gif'
// import { Link } from 'react-router-dom';
// import FilterComponent from '../FilterComponent/FilterComponent';
// import LocationFilterComponent from '../LocationFilterComponent/LocationFilterComponent';
// import ExperienceSlider from '../ExperienceSlider/ExperienceSlider';
// import { IoIosArrowDown } from "react-icons/io";
// import { useGetCompanyBasedJobsQuery } from '../../../RTK/Api/FeaturedJobsApi/FeaturedJobsApi';

// const StandardCharteredJobs = () => {
//     const {data:jobs,isError,isLoading}=useGetCompanyBasedJobsQuery()
//     const [btnDrop, setBtnDrop] = useState(''); // Store selected button
//     const [toggle, setToggle] = useState(false); // Handle toggle visibility
//     console.log(jobs);
//     // Handle toggle function
//     const handleToggle = (e) => {
//         const selectedButton = e.target.innerText; // Get button text
//         // Toggle visibility if the same button is clicked again
//         if (btnDrop === selectedButton && toggle) {
//             setToggle(false);
//         } else {
//             setBtnDrop(selectedButton);
//             setToggle(true);
//         }
//     };

//     if (isError) {
//      return <h1 className='text-center my-6'> something went wrong</h1>
//     }

//     if (isLoading) {
//         return <h2 className='text-center my-6'>Data loading...</h2>
//     }

//     return (
//         <section>
//             <aside className='relative my-3'>
//                 <div id='btns for dropdown' className='flex gap-3 flex-wrap'>
//                     <button
//                         className='px-4 py-2 rounded-3xl border border-black flex items-center gap-1'
//                         onClick={handleToggle}>
//                         Department
//                         <IoIosArrowDown />
//                     </button>
//                     <button
//                         className='px-4 py-2 rounded-3xl border border-black flex items-center gap-1'
//                         onClick={handleToggle}>
//                         Location
//                         <IoIosArrowDown />
//                     </button>
//                     <button
//                         className='px-4 py-2 rounded-3xl border border-black flex items-center gap-1'
//                         onClick={handleToggle}>

//                         Experience
//                         <IoIosArrowDown />

//                     </button>
//                 </div>

//                 {/* Conditional rendering based on button clicked */}
//                 {toggle && btnDrop === 'Department' && (

//                     <div className='absolute z-10'>
//                         <FilterComponent btnDrop={btnDrop} setBtnDrop={setBtnDrop} />
//                     </div>
//                 )}
//                 {toggle && btnDrop === 'Location' && (
//                     <div className='absolute z-10'>
//                         <LocationFilterComponent />
//                     </div>
//                 )}
//                 {toggle && btnDrop === 'Experience' && (
//                     <div className='absolute z-10'>
//                         <ExperienceSlider />
//                     </div>
//                 )}
//             </aside>

//             <section className='grid grid-cols-1 xl:grid-cols-[700px_400px] gap-4'>
//                 <aside className=' grid grid-cols-1 gap-5'>
//                     {/* Job card */}

//                     {jobs && jobs.map((job, index) =>

//                         <div key={index+345} className="bg-white shadow-md rounded-lg p-5 flex flex-col justify-between ">
//                             <div className="flex justify-between flex-col-reverse lg:flex-row">
//                                 <div>
//                                     <h2 className="text-3xl md:text-xl font-semibold text-gray-800">{job.title}</h2>
//                                     <div className="text-sm text-gray-600 flex items-center gap-1">
//                                         <span>{job.companyName}</span>
//                                         <AiFillStar className="text-yellow-400" />
//                                         <span>3.8</span>
//                                         <span className="text-gray-500">({job.ratings})</span>
//                                     </div>
//                                 </div>

//                                 {/* Company logo */}
//                                 <img src={job.logo} alt="Company Logo" className="w-full md:w-[80%] lg:w-10 lg:h-10" />
//                             </div>

//                             <div className="flex flex-col md:flex-row items-center gap-4 text-gray-600 my-3">
//                                 <div className="flex items-center gap-1">
//                                     <FaBriefcase />
//                                     <span>{job.years} Yrs</span>
//                                 </div>
//                                 <div className="flex items-center gap-1">
//                                     <FaRupeeSign />
//                                     <span>{job.opening}</span>
//                                 </div>
//                                 <div className="flex items-center gap-1">
//                                     <FaMapMarkerAlt />
//                                     <span>{job.location}</span>
//                                 </div>
//                             </div>

//                             <div className="text-gray-600 text-sm">
//                                 <p className='flex gap-1 items-center'>
//                                     <MdOutlineContactPage /> Preferred candidate profile . .
//                                 </p>
//                                 <div className="text-gray-500 flex flex-wrap gap-1 mt-1">
//                                     {/* <span>NRI</span> <span>·</span>
//                                     <span>Wealth Management</span> <span>·</span>
//                                     <span>HNI</span> <span>·</span>
//                                     <span>HNI Sales</span> <span>·</span>
//                                     <span>Management</span> <span>·</span>
//                                     <span>Relationship</span> <span>·</span>
//                                     <span>Sales</span> */}
//                                     {job.keywords.map(value=> <span key={value}> {value}. </span>)}
//                                 </div>
//                             </div>

//                             <div className="flex justify-between items-center mt-4">
//                                 <span className="text-gray-500 text-sm">{job.time}</span>
//                                 <button className="flex items-center gap-1 text-gray-600">
//                                     <FaRegBookmark />
//                                     <span>Save</span>
//                                 </button>
//                             </div>

//                         </div>

//                     )}
//                 </aside>

//                 <aside className=''>
//                     <div className='w-full border rounded-xl p-4'>
//                         <div className='flex justify-between w-full'>
//                             <div className='space-y-2 w-full flex flex-col justify-center'>
//                                 <h3 className='font-semibold'>Love jobs by Standard Chartered?</h3>
//                                 <p>Register with us and let company recruiters find you</p>
//                                 <div>
//                                     <button className='px-4 py-2 bg-red-500 rounded-3xl text-white font-semibold'>Register Now</button>

//                                 </div>
//                             </div>
//                             <img className='w-[140px]' src="https://static.naukimg.com/s/7/109/assets/images/cp-register.be877ebb.png" alt="" />
//                         </div>
//                     </div>

//                     <div id='reviews' className=' border rounded-xl p-4 mt-3'>
//                         {/* Reviews and other components */}
//                         {/* ... */}

//                         <div className='space-y-3'>
//                             <div className='flex justify-between'>
//                                 <h1 className='font-semibold'>Reviews by Job Profile</h1>
//                                 <Link className='text-blue-600 font-semibold text-[14px]' to={'/'}>View All</Link>
//                             </div>
//                             <div>
//                                 <p className='flex items-center'><FaStar className='text-yellow-300'></FaStar> <span className='opacity-70'>4.1</span> <span className='ml-4'>Senior Manager</span> <span className='opacity-60'>(123)</span></p>
//                                 <p className='flex items-center'><FaStar className='text-yellow-300'></FaStar> <span className='opacity-70'>4.1</span> <span className='ml-4'>Senior Manager</span> <span className='opacity-60'>(123)</span></p>
//                                 <p className='flex items-center'><FaStar className='text-yellow-300'></FaStar> <span className='opacity-70'>4.1</span> <span className='ml-4'>Senior Manager</span> <span className='opacity-60'>(123)</span></p>
//                                 <p className='flex items-center'><FaStar className='text-yellow-300'></FaStar> <span className='opacity-70'>4.1</span> <span className='ml-4'>Senior Manager</span> <span className='opacity-60'>(123)</span></p>
//                                 <p className='flex items-center'><FaStar className='text-yellow-300'></FaStar> <span className='opacity-70'>4.1</span> <span className='ml-4'>Senior Manager</span> <span className='opacity-60'>(123)</span></p>

//                             </div>

//                             <div id='work place' className=' border rounded-xl p-4'>
//                                 <div className='flex flex-col-reverse gap-3 lg:gap-0 md:flex-row justify-between'>
//                                     <div>
//                                         <p>Write a review & help millions!</p>
//                                         <h5>Rate Standard Chartered as a <br /> workplace</h5>
//                                     </div>
//                                     <div>
//                                         <img className='' src="https://static.naukimg.com/s/7/109/assets/images/write-review-ot.84ba0c93.png" alt="" />
//                                     </div>
//                                 </div>
//                                 <p className='my-4'>
//                                     <Link className='font-semibold text-blue-500 w-full h-full'>Write review </Link>
//                                 </p>

//                             </div>

//                             <div className='flex gap-1 items-center'>
//                                 <img className='w-[15px]' src="https://static.naukimg.com/s/7/109/assets/images/ot-ambition-box.6be916cf.png" alt="" />
//                                 <p>AmbitionBox</p>
//                             </div>
//                         </div>
//                     </div>
//                 </aside>
//             </section>
//         </section>
//     );
// };

// export default StandardCharteredJobs;

import { useEffect, useState } from "react";
import {
  FaRegBookmark,
  FaMapMarkerAlt,
  FaBriefcase,
  FaRupeeSign,
  FaStar,
} from "react-icons/fa"; // Importing icons
import { AiFillStar } from "react-icons/ai"; // Rating star icon
import { MdOutlineContactPage } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useGetCompanyBasedJobsQuery } from "../../../RTK/Api/FeaturedJobsApi/FeaturedJobsApi";
import FilterComponent from "../FilterComponent/FilterComponent";
import LocationFilterComponent from "../LocationFilterComponent/LocationFilterComponent";
import ExperienceSlider from "../ExperienceSlider/ExperienceSlider";
import { Link } from "react-router-dom";

// const StandardCharteredJobs = () => {

//     const [btnDrop, setBtnDrop] = useState(''); // Store selected button
//     const [toggle, setToggle] = useState(false); // Handle toggle visibility
//     const [currentPage, setCurrentPage] = useState(1); // Pagination state
//     const jobsPerPage = 5; // Set the number of jobs per page (you can change this)
//       const { data: jobs, isError, isLoading } = useGetCompanyBasedJobsQuery({
//         page: currentPage,
//         limit: jobsPerPage,
//       });
//     // Calculate the total number of pages
//     const jobs = jobsData?.jobs || [];  // Handle if jobs are undefined
//     const totalPages = Math.ceil((jobsData?.totalJobs || 1) / jobsPerPage); // Calculate total pages from totalJobs

//     // Handle page change
//     const handleNextPage = () => {
//         if (currentPage < totalPages) {
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     const handlePreviousPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     // Toggle dropdowns
//     const handleToggle = (e) => {
//         const selectedButton = e.target.innerText; // Get button text
//         if (btnDrop === selectedButton && toggle) {
//             setToggle(false);
//         } else {
//             setBtnDrop(selectedButton);
//             setToggle(true);
//         }
//     };

//     if (isError) {
//         return <h1 className='text-center my-6'> Something went wrong</h1>;
//     }

//     if (isLoading) {
//         return <h2 className='text-center my-6'>Data loading...</h2>;
//     }

//     return (
//         <section>
//             {/* Filter Section */}
//             <aside className='relative my-3'>
//                 <div id='btns for dropdown' className='flex gap-3 flex-wrap'>
//                     <button
//                         className='px-4 py-2 rounded-3xl border border-black flex items-center gap-1'
//                         onClick={handleToggle}>
//                         Department
//                         <IoIosArrowDown />
//                     </button>
//                     <button
//                         className='px-4 py-2 rounded-3xl border border-black flex items-center gap-1'
//                         onClick={handleToggle}>
//                         Location
//                         <IoIosArrowDown />
//                     </button>
//                     <button
//                         className='px-4 py-2 rounded-3xl border border-black flex items-center gap-1'
//                         onClick={handleToggle}>
//                         Experience
//                         <IoIosArrowDown />
//                     </button>
//                 </div>

//                 {toggle && btnDrop === 'Department' && (
//                     <div className='absolute z-10'>
//                         <FilterComponent btnDrop={btnDrop} setBtnDrop={setBtnDrop} />
//                     </div>
//                 )}
//                 {toggle && btnDrop === 'Location' && (
//                     <div className='absolute z-10'>
//                         <LocationFilterComponent />
//                     </div>
//                 )}
//                 {toggle && btnDrop === 'Experience' && (
//                     <div className='absolute z-10'>
//                         <ExperienceSlider />
//                     </div>
//                 )}
//             </aside>

//             {/* Jobs Section */}
//             <section className='grid grid-cols-1 xl:grid-cols-[700px_400px] gap-4'>
//                 <aside className=' grid grid-cols-1 gap-5'>
//                     {/* Job cards */}
//                     {jobs && jobs.map((job, index) => (
//                         <div key={index + 345} className="bg-white shadow-md rounded-lg p-5 flex flex-col justify-between ">
//                             <div className="flex justify-between flex-col-reverse lg:flex-row">
//                                 <div>
//                                     <h2 className="text-3xl md:text-xl font-semibold text-gray-800">{job.title}</h2>
//                                     <div className="text-sm text-gray-600 flex items-center gap-1">
//                                         <span>{job.companyName}</span>
//                                         <AiFillStar className="text-yellow-400" />
//                                         <span>3.8</span>
//                                         <span className="text-gray-500">({job.ratings})</span>
//                                     </div>
//                                 </div>
//                                 <img src={job.logo} alt="Company Logo" className="w-full md:w-[80%] lg:w-10 lg:h-10" />
//                             </div>

//                             <div className="flex flex-col md:flex-row items-center gap-4 text-gray-600 my-3">
//                                 <div className="flex items-center gap-1">
//                                     <FaBriefcase />
//                                     <span>{job.years} Yrs</span>
//                                 </div>
//                                 <div className="flex items-center gap-1">
//                                     <FaRupeeSign />
//                                     <span>{job.opening}</span>
//                                 </div>
//                                 <div className="flex items-center gap-1">
//                                     <FaMapMarkerAlt />
//                                     <span>{job.location}</span>
//                                 </div>
//                             </div>

//                             <div className="text-gray-600 text-sm">
//                                 <p className='flex gap-1 items-center'>
//                                     <MdOutlineContactPage /> Preferred candidate profile . .
//                                 </p>
//                                 <div className="text-gray-500 flex flex-wrap gap-1 mt-1">
//                                     {job.keywords.map((value) => <span key={value}> {value}. </span>)}
//                                 </div>
//                             </div>

//                             <div className="flex justify-between items-center mt-4">
//                                 <span className="text-gray-500 text-sm">{job.time}</span>
//                                 <button className="flex items-center gap-1 text-gray-600">
//                                     <FaRegBookmark />
//                                     <span>Save</span>
//                                 </button>
//                             </div>
//                         </div>
//                     ))}

//                     {/* Pagination */}
//                     <div className="flex justify-center items-center my-4">
//                         <button
//                             onClick={handlePreviousPage}
//                             disabled={currentPage === 1}
//                             className={`px-4 py-2 rounded-lg border ${currentPage === 1 ? 'opacity-50' : ''}`}
//                         >
//                             Previous
//                         </button>
//                         <span className="mx-4 text-lg">{currentPage}</span>
//                         <button
//                             onClick={handleNextPage}
//                             disabled={currentPage === totalPages}
//                             className={`px-4 py-2 rounded-lg border ${currentPage === totalPages ? 'opacity-50' : ''}`}
//                         >
//                             Next
//                         </button>
//                     </div>
//                 </aside>

//                 {/* Right-hand side content stays as is */}
//                 <aside>
//                     {/* Register section */}
//                     <div className='w-full border rounded-xl p-4'>
//                         <div className='flex justify-between w-full'>
//                             <div className='space-y-2 w-full flex flex-col justify-center'>
//                                 <h3 className='font-semibold'>Love jobs by Standard Chartered?</h3>
//                                 <p>Register with us and let company recruiters find you</p>
//                                 <div>
//                                     <button className='px-4 py-2 bg-red-500 rounded-3xl text-white font-semibold'>Register Now</button>
//                                 </div>
//                             </div>
//                             <img className='w-[140px]' src="https://static.naukimg.com/s/7/109/assets/images/cp-register.be877ebb.png" alt="" />
//                         </div>
//                     </div>
//                 </aside>
//             </section>
//         </section>
//     );
// };

// export default StandardCharteredJobs;

const StandardCharteredJobs = ({ companyName }) => {
  const [btnDrop, setBtnDrop] = useState(""); // Store selected button
  const [toggle, setToggle] = useState(false); // Handle toggle visibility
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const jobsPerPage = 5; // Set the number of jobs per page
  // console.log(companyName);

  // Fetch paginated jobs data from the API using RTK Query
  const {
    data: jobsData,
    isError,
    isLoading,
  } = useGetCompanyBasedJobsQuery({
    page: currentPage,
    limit: jobsPerPage,
    companyName: companyName,
  });

  const jobs = jobsData?.jobs || []; // Handle if jobs are undefined
  const totalPages = Math.ceil((jobsData?.totalJobs || 1) / jobsPerPage); // Calculate total pages from totalJobs

  // Handle page change
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // console.log(jobsData);

  // Toggle dropdowns
  const handleToggle = (e) => {
    const selectedButton = e.target.innerText; // Get button text
    if (btnDrop === selectedButton && toggle) {
      setToggle(false);
    } else {
      setBtnDrop(selectedButton);
      setToggle(true);
    }
  };

  // Error handling
  if (isError) {
    return <h1 className="text-center my-6"> Something went wrong</h1>;
  }

  // Loading state
  if (isLoading) {
    return <h2 className="text-center my-6">Data loading...</h2>;
  }

  if (jobs.length == 0) {
    return (
      <h1 className="text-center font-bold text-gray-400 text-4xl my-7">
        No data found in this company name
      </h1>
    );
  }

  return (
    <section className="max-w-7xl">
      {/* Filter Section */}
      <aside className="relative my-3">
        <div id="btns for dropdown" className="flex gap-3 flex-wrap mt-10">
          <button
            className="px-4 py-2 rounded-3xl border border-black flex items-center gap-1"
            onClick={handleToggle}
          >
            Department
            <IoIosArrowDown />
          </button>
          <button
            className="px-4 py-2 rounded-3xl border border-black flex items-center gap-1"
            onClick={handleToggle}
          >
            Location
            <IoIosArrowDown />
          </button>
          <button
            className="px-4 py-2 rounded-3xl border border-black flex items-center gap-1"
            onClick={handleToggle}
          >
            Experience
            <IoIosArrowDown />
          </button>
        </div>

        {toggle && btnDrop === "Department" && (
          <div className="absolute z-10">
            <FilterComponent btnDrop={btnDrop} setBtnDrop={setBtnDrop} />
          </div>
        )}
        {toggle && btnDrop === "Location" && (
          <div className="absolute z-10">
            <LocationFilterComponent />
          </div>
        )}
        {toggle && btnDrop === "Experience" && (
          <div className="absolute z-10">
            <ExperienceSlider />
          </div>
        )}
      </aside>

      {/* Jobs Section */}
      <section className="flex gap-4">
        <aside className=" flex-1 mt-5">
          {/* Job cards */}
          {jobs &&
            jobs.map((job, index) => (
              <Link
                className="h-max"
                key={job._id || index}
                to={`/view-company-job/${job._id}`}
              >
                {" "}
                <div className="bg-white shadow-md mt-5 rounded-lg p-5 flex flex-col justify-between ">
                  <div className="flex justify-between flex-col-reverse lg:flex-row">
                    <div>
                      <h2 className="text-3xl md:text-xl font-semibold text-gray-800">
                        {job.title}
                      </h2>
                      <div className="text-sm text-gray-600 flex items-center gap-1">
                        <span>{job.companyName}</span>
                        <AiFillStar className="text-yellow-400" />
                        <span>3.8</span>
                        <span className="text-gray-500">({job.ratings})</span>
                      </div>
                    </div>
                    <img
                      src={job.logo}
                      alt="Company Logo"
                      className="w-full md:w-[80%] lg:w-10 lg:h-10"
                    />
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-4 text-gray-600 my-3">
                    <div className="flex items-center gap-1">
                      <FaBriefcase />
                      <span>{job.years} Yrs</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaRupeeSign />
                      <span>{job.opening}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  <div className="text-gray-600 text-sm">
                    <p className="flex gap-1 items-center">
                      <MdOutlineContactPage /> Preferred candidate profile . . .
                    </p>
                    <div className="text-gray-500 flex flex-wrap gap-1 mt-1">
                      {job.keywords.map((value) => (
                        <span key={value}> {value}. </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-gray-500 text-sm">{job.time}</span>
                    <button className="flex items-center gap-1 text-gray-600">
                      <FaRegBookmark />
                      <span>Save</span>
                    </button>
                  </div>
                </div>
              </Link>
            ))}

          {/* Pagination */}
          {jobsData.jobs.length >= 5 && (
            <div className="flex justify-center items-center my-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg border ${
                  currentPage === 1 ? "opacity-50" : ""
                }`}
              >
                Previous
              </button>
              <span className="mx-4 text-lg">
                {currentPage} of {jobsData?.totalJobs / jobsPerPage}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg border ${
                  currentPage === totalPages ? "opacity-50" : ""
                }`}
              >
                Next
              </button>
            </div>
          )}
        </aside>

        {/* Right-hand side content */}

        <aside className="w-[400px]">
          {/* Register section */}
          <div className="w-full border rounded-xl p-4">
            <div className="flex justify-between w-full">
              <div className="space-y-2 w-full flex flex-col justify-center">
                <h3 className="font-semibold">
                  Love jobs by Standard Chartered?
                </h3>
                <p>Register with us and let company recruiters find you</p>
                <div>

                  <button className="px-4 py-2 bg-red-500 rounded-3xl text-white font-semibold">
                   
                    <Link to={"/signup"}>  Register Now</Link>
                  </button>
                </div>
              </div>
              <img
                className="w-[140px]"
                src="https://static.naukimg.com/s/7/109/assets/images/cp-register.be877ebb.png"
                alt=""
              />
            </div>
          </div>

          <div id="reviews" className=" border rounded-xl p-4 mt-3">
            {/* Reviews and other components */}

            <div className="space-y-3">
              <div className="flex justify-between">
                <h1 className="font-semibold">Reviews by Job Profile</h1>
                <Link
                  className="text-blue-600 font-semibold text-[14px]"
                  to={"/"}
                >
                  View All
                </Link>
              </div>
              <div>
                <p className="flex items-center">
                  <FaStar className="text-yellow-300"></FaStar>{" "}
                  <span className="opacity-70">4.1</span>{" "}
                  <span className="ml-4">Senior Manager</span>{" "}
                  <span className="opacity-60">(123)</span>
                </p>
                <p className="flex items-center">
                  <FaStar className="text-yellow-300"></FaStar>{" "}
                  <span className="opacity-70">4.1</span>{" "}
                  <span className="ml-4">Senior Manager</span>{" "}
                  <span className="opacity-60">(123)</span>
                </p>
                <p className="flex items-center">
                  <FaStar className="text-yellow-300"></FaStar>{" "}
                  <span className="opacity-70">4.1</span>{" "}
                  <span className="ml-4">Senior Manager</span>{" "}
                  <span className="opacity-60">(123)</span>
                </p>
                <p className="flex items-center">
                  <FaStar className="text-yellow-300"></FaStar>{" "}
                  <span className="opacity-70">4.1</span>{" "}
                  <span className="ml-4">Senior Manager</span>{" "}
                  <span className="opacity-60">(123)</span>
                </p>
                <p className="flex items-center">
                  <FaStar className="text-yellow-300"></FaStar>{" "}
                  <span className="opacity-70">4.1</span>{" "}
                  <span className="ml-4">Senior Manager</span>{" "}
                  <span className="opacity-60">(123)</span>
                </p>
              </div>

              <div id="work place" className=" border rounded-xl p-4">
                <div className="flex flex-col-reverse gap-3 lg:gap-0 md:flex-row justify-between">
                  <div>
                    <p>Write a review & help millions!</p>
                    <h5>
                      Rate Standard Chartered as a <br /> workplace
                    </h5>
                  </div>
                  <div>
                    <img
                      className=""
                      src="https://static.naukimg.com/s/7/109/assets/images/write-review-ot.84ba0c93.png"
                      alt=""
                    />
                  </div>
                </div>
                <p className="my-4">
                  <Link className="font-semibold text-blue-500 w-full h-full">
                    Write review{" "}
                  </Link>
                </p>
              </div>

              <div className="flex gap-1 items-center">
                <img
                  className="w-[15px]"
                  src="https://static.naukimg.com/s/7/109/assets/images/ot-ambition-box.6be916cf.png"
                  alt=""
                />
                <p>AmbitionBox</p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </section>
  );
};

export default StandardCharteredJobs;
