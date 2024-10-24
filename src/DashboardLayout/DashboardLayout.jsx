import { Outlet } from "react-router-dom";
import Sidebar from "../components/UserDashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="container m-auto min-h-screen md:flex ">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 md:ml-56 lg:px-10 bg-gray-100">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
