import React, { useState } from "react";
import UserStatictis from "../pages/UserDashboard/UserStatictis";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import AdminStatistic from "../pages/AdminDashboard/AdminStatistic";

const Statictis = () => {
  const { user } = useAuth();
  const [loginUser, setLoginUser] = useState("");
  const axionsequre = useAxiosSecure();
  //get user information
  try {
    axionsequre
      .get(`/user?email=${user?.email}`)
      .then((res) => setLoginUser(res.data));
  } catch (error) {
    console.log(error);
  }
  // console.log(object);
  return (
    <div className="bg-[#f5f6fa] p-10">
      {/* here set all statictis role  */}
      {/* <UserStatictis /> */}
      {loginUser.role == "host" ? <UserStatictis /> : <AdminStatistic />}
    </div>
  );
};

export default Statictis;
