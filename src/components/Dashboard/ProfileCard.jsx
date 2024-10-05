import React from "react";
import useAuth from "../../hooks/useAuth";
import { FaUserCheck } from "react-icons/fa";
import { MdEdit, MdOutlineEmail } from "react-icons/md";
import { LuGraduationCap, LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";

const ProfileCard = () => {
  const { user } = useAuth();

  return (
    <div className="">
      <div className="flex justify-around gap-1 bg-white shadow-lg rounded-lg py-6">
        {/* Profile Header */}
        <div className="flex items-center">
          <div
            className="radial-progress bg-gray-200 size-38   text-[#EF4444] relative"
            style={{
              "--start": "bottom",
              "--value": "50",
              "--size": "8.9rem",
              "--thickness": "5px",
              transform: "rotate(180deg)",
            }}
            role="progressbar"
          >
            <div className="badge absolute left-12 top-0 z-10 text-[#EF4444] font-semibold rotate-180">
              30%
            </div>
            <div className="avatar rotate-180">
              <div className="w-32 border-8 border-white rounded-full">
                <img src={user?.photoURL} alt={user?.displayName} />
              </div>
            </div>
          </div>
          {/* Profile Information */}
          <div className="">
            <div className="mb-5">
              <h2 className="text-2xl font-bold text-[#121224] flex gap-3 items-center">
                Abu Rahat Shaum <MdEdit className="text-gray-500 size-5"/>
              </h2>
              
              <p className="text-gray-500 text-sm">
                Profile last updated -{" "}
                <span className="font-semibold">Today</span>
              </p>
            </div>
            <hr />
            {/* Profile Details */}
            <div className="mt-4 flex ">
              <div className="text-sm">
                {/* Location */}
                <div className="flex items-center space-x-2">
                  <IoLocationOutline className="text-gray-500 size-5" />

                  <span className="text-gray-700">Dhaka, INDIA</span>
                </div>
                {/* Experience */}
                <div className="flex items-center space-x-2 mt-2">
                  <LuGraduationCap className="text-gray-500 size-5" />
                  <span className="text-gray-700">Fresher</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <CiCalendar className="text-gray-500 size-5" />
                  <span className="text-gray-700">Add availability to join</span>
                </div>
              </div>
              <div className="divider divider-horizontal"></div>
              <div>
                {/* Phone Number and Verification */}
                <div className="flex items-center space-x-2 mt-2">
                  <LuPhoneCall className="text-gray-500 size-5" />
                  <span className="text-gray-700">+880 123456789</span>
                </div>
                {/* Email Address */}
                <div className="flex items-center space-x-2 mt-2">
                  <MdOutlineEmail className="text-gray-500 size-5" />
                  <span className="text-gray-700">
                    aburahatshaum889@gmail.com
                  </span>
                  <FaUserCheck className="text-green-500" />
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
              <span>Add mobile number</span>
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
