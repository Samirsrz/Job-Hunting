import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import ViewAllJobs from "../pages/AdminDashboard/ViewAllJobs";
import ViewHostJobs from "../pages/HostDashboard/ViewHostJobs";

const ViewJobs = () => {
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
    <div>
      {loginUser.role == "admin" && <ViewAllJobs />}
      {loginUser.role == "host" && <ViewHostJobs/>}
    </div>
  );
};

export default ViewJobs;
