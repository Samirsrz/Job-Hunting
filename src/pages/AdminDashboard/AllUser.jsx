import React, { useState } from "react";
import { PiQuestion } from "react-icons/pi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAuth from "./../../hooks/useAuth";
import useAxiosSecure from "./../../hooks/useAxiosSecure";

const AllUser = () => {
  const { loading } = useAuth();
  const [users, setUsers] = useState([]);
  const axiosSequre = useAxiosSecure();

  //fetch user api
  try {
    axiosSequre.get(`/users`).then((data) => setUsers(data.data));
    // loading(false);
  } catch (error) {
    console.log(error);
  }
  // console.log("this is all users", users);
  //handleAdmin
  const handleAdmin = (id) => {
  //  console.log("this is admin ", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to create an admin!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Create it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSequre.put(`/user/${id}`).then((res) => {
          // console.log(res.data);
          if (res.data.deletedCount) {
            Swal.fire({
              title: "created!",
              text: "Your user has been create admin!.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  //handle Delete function
  const handleDelete = (id) => {
  //  console.log("user id ", id);
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
        axiosSequre.delete(`/user/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your user has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  // if (loading) return <p>Loading...</p>;

  return (
    <div className="mt-14">
      <section className="px-8">
        {/* header part  */}
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            Total Users
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            {users.length} Users
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
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900 z-10">
                    {users?.map((user, index) => (
                      <tr key={user._id}>
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
                                      src={user.photo}
                                      alt={user.name}
                                    />
                                    <div>
                                      <h2 className="font-medium text-gray-800 dark:text-white ">
                                        {user.name}
                                      </h2>
                                    </div>
                                  </div>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                              user.role == "admin" &&
                              "bg-emerald-100/60 dark:bg-gray-800 text-emerald-500"
                            } ${
                              user.role == "guest" &&
                              "bg-red-100/60 dark:bg-gray-800 text-red-500"
                            } ${
                              user.role == "host" &&
                              "text-gray-500 bg-gray-100 dark:text-gray-400 gap-x-2 dark:bg-gray-800"
                            }`}
                          >
                            <div className="dropdown dropdown-bottom">
                              <div tabIndex={0} role="button" className=" m-1">
                                <h2 className="text-sm font-normal ">
                                  {user.role}
                                </h2>
                              </div>
                              <ul
                                tabIndex={0}
                                className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
                              >
                                <li
                                  className="z-10"
                                  onClick={() => handleAdmin(user._id)}
                                >
                                  <a>admin</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {user.email}
                        </td>

                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                            <button
                              onClick={() => handleDelete(user._id)}
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
      </section>
    </div>
  );
};

export default AllUser;
