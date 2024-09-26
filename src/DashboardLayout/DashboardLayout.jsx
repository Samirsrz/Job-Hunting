import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="container m-auto min-h-screen md:flex ">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 md:ml-64">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
