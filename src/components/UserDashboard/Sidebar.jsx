import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { BsFillHouseAddFill } from "react-icons/bs";
import { FaCcApplePay, FaFileImport } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Sidebar = () => {
  const { logOut, user, setLoading, loading } = useAuth();
  const [loginUser, setLoginUser] = useState("");
  const [isActive, setActive] = useState(false);

  const axionsequre = useAxiosSecure();
  setLoading(true);
  //get user information
  try {
    axionsequre
      .get(`/user?email=${user?.email}`)
      .then((res) => setLoginUser(res.data));
    setLoading(false);
  } catch (error) {
    console.log(error);
  }

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  if (setLoading) <p>loading...</p>;

  return (
    <div>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden ">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <img
                // className='hidden md:block rounded-full'
                src="https://i.ibb.co.com/gMWTKhm/nexthire-hiring-logo.jpg"
                alt="logo"
                width="100"
                height="100"
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* sidebar logo  */}
          <div>
            <div className="w-full hidden md:flex px-4 py-4 shadow-lg rounded-lg justify-center items-center mx-auto">
              <Link to="/">
                <p>
                  {" "}
                  <img
                    className="hidden lg:inline md:block rounded-full"
                    src="https://i.ibb.co.com/gMWTKhm/nexthire-hiring-logo.jpg"
                    alt="logo"
                    width="200"
                    height="200"
                  />
                  <span className="font-bold text-pretty text-2xl text-primary">
                    {" "}
                    Next-Hire
                  </span>
                </p>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/* Statistics for Admin , host, guest */}
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <BsGraphUp className="w-5 h-5" />

                <span className="mx-4 font-medium">Statistics</span>
              </NavLink>
              {/* viewJobs for Admin , host */}
              <NavLink
                to="/dashboard/viewjobs"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  } ${loginUser?.role == "guest" && "hidden"}`
                }
              >
                <BsFillHouseAddFill className="w-5 h-5" />

                <span className="mx-4 font-medium">View Jobs</span>
              </NavLink>

              {/*Post jobs ---> Host  */}
              {loginUser?.role == "host" && (
                <div>
                  <NavLink
                    to="/dashboard/post-jobs"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <MdHomeWork className="w-5 h-5" />

                    <span className="mx-4 font-medium">Post Jobs</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/manage_application"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <FaFileImport className="text-2xl" />

                    <span className="mx-4 font-medium">
                      Application Management
                    </span>
                  </NavLink>

                  <NavLink
                    to="/dashboard/payment"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <FaCcApplePay className="w-5 h-5" />

                    <span className="mx-4 font-medium">Payment Management</span>
                  </NavLink>
                </div>
              )}
              {/* create mock interview */}
              
              {loginUser?.role == "host" && (
                <NavLink
                  to="/dashboard/interview-schedule"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  <MdHomeWork className="w-5 h-5" />

                  <span className="mx-4 font-medium">Interview schedule</span>
                </NavLink>
              )}

              {/*applied jobs --> guest  */}
              {loginUser.role == "guest" && (
                <NavLink
                  to="/dashboard/appliedjobs"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                      isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                    }`
                  }
                >
                  <MdHomeWork className="w-5 h-5" />

                  <span className="mx-4 font-medium">Applied Jobs</span>
                </NavLink>
              )}

              {/* All User,Payment Management --> admin*/}
              {loginUser.role == "admin" && (
                <div>
                  <NavLink
                    to="/dashboard/payment"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <FaCcApplePay className="w-5 h-5" />

                    <span className="mx-4 font-medium">Payment Management</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/alluser"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                        isActive
                          ? "bg-gray-300  text-gray-700"
                          : "text-gray-600"
                      }`
                    }
                  >
                    <MdHomeWork className="w-5 h-5" />

                    <span className="mx-4 font-medium">All Users</span>
                  </NavLink>
                </div>
              )}
            </nav>
          </div>
        </div>

        {/* ************************************************************ */}

        <div>
          <hr />

          {/* Profile Menu */}
          <NavLink
            to="/dashboard/userprofile"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <FcSettings className="w-5 h-5" />

            <span className="mx-4 font-medium">Profile</span>
          </NavLink>

          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
