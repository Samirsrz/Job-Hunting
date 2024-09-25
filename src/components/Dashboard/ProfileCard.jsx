import React from "react";
import useAuth from "../../hooks/useAuth";
import { FaUserCheck } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";

const ProfileCard = () => {
  const { user } = useAuth();
  return (
    <div className="">
      <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
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
      </div>
    </div>
  );
};

export default ProfileCard;
