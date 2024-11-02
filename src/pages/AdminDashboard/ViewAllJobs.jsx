import React, { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { PiQuestion } from "react-icons/pi";

const ViewAllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const axionsequre = useAxiosSecure();

  //get user information
  try {
    axionsequre.get(`/jobs`).then((res) => setJobs(res.data.data));
  } catch (error) {
    console.log(error);
  }
  // Handle Delete function
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axionsequre.delete(`/job/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            setApplications((prev) => prev.filter((app) => app._id !== id));
          }
        });
      }
    });
  };

  return (
    <div className="my-8">
      <div className="overflow-auto md:overflow-hidden">
        <div className="flex items-center gap-x-3 mb-5 pt-2 w-full">
          <h2 className="text-lg pl-2 font-medium text-gray-800 dark:text-white">
            Total Job's
          </h2>
          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            {jobs?.length} job(s)
          </span>
        </div>
        <div className="flex flex-col mt-6">
          <div className=" sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    {/* table heading  */}
                    <tr>
                      <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        #
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Company Name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Job Title
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>

                  {/* table Body ........... */}
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900 z-10">
                    {jobs?.map((job, index) => (
                      <tr key={job._id} className="w-full">
                        <td className="pl-4">{index + 1} </td>

                        {/* company name  */}
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <div className="flex items-center gap-x-2">
                              <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  <div className="flex items-center gap-x-2">
                                    <img
                                      className="object-cover w-10 h-10 rounded-full"
                                      src={job.logo}
                                      alt={job.company}
                                    />
                                    <div>
                                      <h2 className="font-medium text-gray-800 dark:text-white ">
                                        {job.title}
                                      </h2>
                                    </div>
                                  </div>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {job.title}
                        </td>

                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                            <button
                              onClick={() => handleDelete(job._id)}
                              className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
                            >
                              <RiDeleteBin5Line className="text-xl" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllJobs;
