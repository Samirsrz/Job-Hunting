import React from "react";
import { BsPersonWorkspace, BsPostcard } from "react-icons/bs";
import { FaSackDollar } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { LuFileInput } from "react-icons/lu";
import useAuth from "./../../hooks/useAuth";
import HostChart from "../../components/HostDashboard/HostChart";
import ImpressionChart from "../../components/HostDashboard/ImpressionChart";

const HostStatisticPage = () => {
  const { user } = useAuth();
  return (
    <div className="mt-10 p-5">
      <div className="flex flex-col justify-between lg:items-center lg:flex-row rounded-lg bg-white p-5">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">
            Welcome Back{" "}
            <span className="text-blue-700">{user?.displayName}</span>
          </h1>
          <p className="text-sm text-gray-700 font-semibold">
            you have <span className="text-blue-700">5 unread</span>{" "}
            notification
          </p>
        </div>

        <div>
          <div className="flex items-center  gap-4 mt-5 lg:mt-0">
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
              <div className="stat-title">{user?.displayName}</div>
              <div className="stat-desc font-semibold text-secondary">Host</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        {/* small cards */}
        <div className="flex-1 mt-3 lg:mt-0">
          <div className="h-24 my-14 grid gap-y-10 gap-x-6 md:grid-cols-3 lg:grid-cols-3">
            {/* jobs Card */}
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
                  02
                </h4>
              </div>
            </div>
            {/* Application Card */}
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              <div
                className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-600 to-blue-400 text-white shadow-blue-500/40`}
              >
                <LuFileInput className="w-6 h-6 text-white" />
                {/* <FiUsers className="w-6 h-6 text-white" /> */}
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  Application
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  10
                </h4>
              </div>
            </div>

            {/* Hired Application */}
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              <div
                className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400 text-white shadow-orange-500/40`}
              >
                <BsPersonWorkspace className="w-6 h-6 text-white" />
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  Hired
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  02
                </h4>
              </div>
            </div>
          </div>
          <div className="hidden md:flex lg:flex mt-72 lg:mt-0 bg-white p-4 shadow-lg rounded-lg">
            <HostChart />
          </div>
        </div>

        {/* sidebar card */}
        <div className="mt-44 lg:my-14">
          <div className="p-4 bg-white shadow-lg rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Get Premium</h2>
            </div>

            {/*Regular Membership */}
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 flex flex-col items-center justify-center text-blue-600 rounded-tr-2xl rounded-bl-2xl text-center font-semibold shadow-lg shadow-blue-500">
                  {" "}
                  <span className="text-2xl font-semibold">$</span> 10
                  {/* <BiDollar className="text-xl font-bold" /> 10 */}
                </div>
                <div>
                  <h3 className="text-md font-semibold">Regular Membership</h3>
                </div>
              </div>
            </div>
            {/*Premium Membership */}
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 flex flex-col items-center justify-center text-blue-600 rounded-tr-2xl rounded-bl-2xl text-center font-semibold shadow-lg shadow-blue-500">
                  {" "}
                  <span className="text-2xl font-semibold">$</span> 100
                  {/* <BiDollar className="text-xl font-bold" /> 10 */}
                </div>
                <div>
                  <h3 className="text-md font-semibold">Premium Membership</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg mt-4 pt-5 shadow-lg  h-48">
            <ImpressionChart className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostStatisticPage;
