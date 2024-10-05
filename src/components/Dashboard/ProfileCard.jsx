import React from "react";
import useAuth from "../../hooks/useAuth";
import { FaUserCheck } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";

const ProfileCard = () => {
  const { user } = useAuth();
  return (
    <div className="">
      {/* <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          className="object-cover object-center w-full h-56"
          src={user?.photoURL}
          alt={user?.displayName}
        />

        <div className="flex items-center px-6 py-3 bg-primary">
          <FaUserCheck className="text-2xl text-white" />

          <h1 className="mx-3 text-lg font-semibold text-white">User</h1>
        </div>

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {user?.displayName}
          </h1>

          <p className="py-2 text-gray-700 dark:text-gray-400">
            Full Stack Web Developer, love hip hop music Author of Building UI.
          </p>

          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <LuPhoneCall />

            <h1 className="px-2 text-sm">+880 123456789</h1>
          </div>

          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <MdOutlineEmail className="text-2xl" />

            <h1 className="px-2 text-sm">{user?.email}</h1>
          </div>
        </div>
      </div> */}

      <div className="flex justify-around bg-white shadow-lg rounded-lg p-6">
        {/* Profile Header */}
        <div className="flex items-center">
          {/* Profile Picture with Progress */}
          {/* <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gray-200 relative">
              Outer Circle for Progress
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-4 border-red-500 flex items-center justify-center">
                  Progress Percentage
                 <img src={user?.photoURL} alt="" />
                </div>
              </div>
            </div>
          </div> */}
          <div
            className="radial-progress bg-gray-200 size-38  flex-1 text-[#EF4444] relative"
            style={{ "--value": "80", "--size": "8.9rem", "--thickness": "5px" } }
            role="progressbar"
          >
            <div className="badge absolute left-12 bottom-0 z-10 text-[#EF4444] font-semibold">30%</div>
            <div className="avatar">
              <div className="w-32 border-8 border-white rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
              
            </div>
          </div>
          {/* Profile Information */}
          <div className="ml-4">
            <div>
              <h2 className="text-lg font-semibold">Abu Rahat Shaum</h2>
              <p className="text-gray-500 text-sm">
                Profile last updated - Today
              </p>
            </div>
            <hr />
            {/* Profile Details */}
            <div className="mt-4 flex ">
              <div>
                {/* Location */}
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500">📍</span>
                  <span className="text-gray-700">Dhaka, INDIA</span>
                </div>
                {/* Experience */}
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-gray-500">🎓</span>
                  <span className="text-gray-700">Fresher</span>
                </div>
              </div>
              <div className="divider divider-horizontal"></div>
              <div>
                {/* Phone Number and Verification */}
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-gray-500">📞</span>
                  <span className="text-gray-700">7555998558</span>
                  <a href="#" className="text-blue-500 text-sm underline">
                    Verify
                  </a>
                </div>
                {/* Email Address */}
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-gray-500">📧</span>
                  <span className="text-gray-700">
                    aburahatshaum889@gmail.com
                  </span>
                  <span className="text-green-500">✔️</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Box */}
        <div className="mt-6 bg-orange-50 p-4 rounded-lg">
          <ul className="space-y-2">
            {/* Action Items with Percentages */}
            <li className="flex justify-between">
              <span>Verify mobile number</span>
              <span className="text-green-500">+10%</span>
            </li>
            <li className="flex justify-between">
              <span>Add preferred location</span>
              <span className="text-green-500">+2%</span>
            </li>
            <li className="flex justify-between">
              <span>Add resume</span>
              <span className="text-green-500">+10%</span>
            </li>
          </ul>
          {/* Add Details Button */}
          <button className="w-full mt-4 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors duration-200">
            Add 11 missing details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
