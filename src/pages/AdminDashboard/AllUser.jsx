import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FcAlphabeticalSortingAz } from "react-icons/fc";
import { PiQuestion } from "react-icons/pi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";

const AllUser = () => {
  //handle Delete function
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete User!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your user has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="mt-14">
      <section className="px-8">
        {/* header part  */}
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            Total Applied Jobs
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            100 Application
          </span>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
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
                          <span>User Name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>User Role</span>

                          <PiQuestion className="text-lg" />
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Email address
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Teams
                      </th>

                      <th scope="col" className="relative py-3.5 px-4">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>

                  {/* table Body ........... */}
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    <tr>
                      <td className="pl-4">1</td>

                      {/* company name  */}
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <div className="flex items-center gap-x-2">
                            <div>
                              <h2 className="font-medium text-gray-800 dark:text-white ">
                                <div className="flex items-center gap-x-2">
                                  <img
                                    className="object-cover w-10 h-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                    alt=""
                                  />
                                  <div>
                                    <h2 className="font-medium text-gray-800 dark:text-white ">
                                      Arthur Melo
                                    </h2>
                                  </div>
                                </div>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                          <h2 className="text-sm font-normal text-emerald-500">
                            Admin
                          </h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        authurmelo@example.com
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button
                            onClick={handleDelete}
                            className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
                          >
                            <RiDeleteBin5Line className="text-xl" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pl-4">2</td>

                      {/* company name  */}
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <div className="flex items-center gap-x-2">
                            <div>
                              <h2 className="font-medium text-gray-800 dark:text-white ">
                                <div className="flex items-center gap-x-2">
                                  <img
                                    className="object-cover w-10 h-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                    alt=""
                                  />
                                  <div>
                                    <h2 className="font-medium text-gray-800 dark:text-white ">
                                      Arthur Melo
                                    </h2>
                                  </div>
                                </div>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-start  px-3 py-1 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800">
                          <h2 className="text-sm font-normal text-red-500">
                            Guest
                          </h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        authurmelo@example.com
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button
                            onClick={handleDelete}
                            className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
                          >
                            <RiDeleteBin5Line className="text-xl" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllUser;
