import React, { useState } from "react";
import UserStatictis from "../pages/UserDashboard/UserStatictis";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import AdminStatistic from "../pages/AdminDashboard/AdminStatistic";
import HostStatistic from "../pages/HostDashboard/HostStatistic";

const Statictis = () => {
  const { user, setLoading } = useAuth();
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

  return (
    <div className="bg-[#f5f6fa] p-10">
      {/* here set all statictis role  */}
      {/* <UserStatictis /> */}
      {/* {loginUser.role == "admin" ? <AdminStatistic /> : <UserStatictis />} */}
      {/* {loginUser.role == "admin" && <AdminStatistic />}
      {loginUser.role == "host" && <HostStatistic />}
      {loginUser.role == "guest" && <UserStatictis />} */}
    </div>
  );
};

export default Statictis;
