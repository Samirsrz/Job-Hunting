import React, { useEffect, useState } from "react";
import { BsPostcard } from "react-icons/bs";
import { FaSackDollar } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { LuFileInput } from "react-icons/lu";
import AdminRecharts from "../../components/AdminDashboard/AdminRecharts";
import Map from "../../components/AdminDashboard/Map";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
// import Map from "../../components/AdminDashboard/Map";

const AdminStatistic = () => {
  const { user, setLoading } = useAuth();
  const [users, setUsers] = useState();
  const [jobs, setJobs] = useState();
  const [applications, setApplications] = useState();
  const axiosSecure = useAxiosSecure();

  //fatch user data
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosSecure.get("/users"); // Update the endpoint as needed
        setUsers(response.data); // Set the users data
      } catch (error) {
        console.log(error);
        setError(error); // Set error state if there's an error
      } finally {
        setLoading(false); // Set loading to false after the request completes
      }
    };

    fetchUsers(); // Call the fetch function
  }, []);
  //fatch jobs data
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosSecure.get("/jobs");
        setJobs(response.data.data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers(); // Call the fetch function
  }, []);
  //fatch applications data
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosSecure.get("/applications");
        setApplications(response.data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers(); // Call the fetch function
  }, []);

  return (
    <div className="bg-[#f5f6fa] p-10">
      <div className="flex justify-between items-center rounded-lg bg-white p-5">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Welcome Back {user?.name}</h1>
          <p className="text-sm text-gray-700 font-semibold">
            you have <span className="text-blue-700">5 unread</span>{" "}
            notification
          </p>
        </div>
        <div>
          <div className="flex items-center  gap-4">
            <div className="border rounded-full p-3 ">
              <GoBell className="text-xl" />
            </div>
            <div className="stat-figure text-secondary">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </div>
            <div className="pr-2">
              <div className="stat-title">Abu Rahat</div>
              <div className="stat-desc font-semibold text-secondary">
                Admin
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* small cards */}
      <div className="my-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Sales Card */}
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div
            className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-600 to-blue-400 text-white shadow-blue-500/40`}
          >
            <FiUsers className="w-6 h-6 text-white" />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
              User's
            </p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              {users?.length}
            </h4>
          </div>
        </div>
        {/* Users Card */}
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div
            className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green-600 to-green-400 text-white shadow-green-500/40`}
          >
            <BsPostcard className="w-6 h-6 text-white" />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
              Job's
            </p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              {jobs?.length}
            </h4>
          </div>
        </div>
        {/* Total Application */}
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div
            className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400 text-white shadow-orange-500/40`}
          >
            <LuFileInput className="w-6 h-6 text-white" />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
              Application
            </p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              {applications?.length}
            </h4>
          </div>
        </div>
        {/* Total Earning */}
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div
            className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-pink-600 to-pink-400 text-white shadow-pink-500/40`}
          >
            <FaSackDollar className="w-6 h-6 text-white" />
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
              Earning
            </p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              $ 05
            </h4>
          </div>
        </div>
      </div>

      <AdminRecharts />
      {/* <Map /> */}
    </div>
  );
};

export default AdminStatistic;
