import { createBrowserRouter } from "react-router-dom";
import Categories from "../pages/Categories/Categories";
import App from "../App";
import Home from "../pages/HomePage/Home";
import SignUp from "../pages/SignUp/SignUp";
import Jobs from "../pages/Jobs/Jobs";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import AppliedJobs from "../pages/UserDashboard/AppliedJobs";
import PostJobs from "../pages/HostDashboard/PostJobs";
import UserProfile from "../pages/UserDashboard/UserProfile";
import AllUser from "../pages/AdminDashboard/AllUser";
import LangProvider from "../providers/LangProvider";
import JobDetails from "./../pages/Jobs/JobDetails";
import ViewAllJobsCompany from "../pages/ViewAllJobsCompany/ViewAllJobsCompany";
import Login from "../pages/Login/Login";
import CompanyProfile from "../components/companyForm/CompanyProfile";
import Statictis from "../DashboardLayout/Statictis";
import AdminStatistic from "../pages/AdminDashboard/AdminStatistic";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LangProvider>
        <App></App>
      </LangProvider>
    ),
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/jobs/:id",
        element: <JobDetails />,
      },
      {
        path: "/jobs/viewAllJobsCompany/:id",
        element: <ViewAllJobsCompany />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <LangProvider>
        <DashboardLayout />
      </LangProvider>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Statictis />,
      },
      {
        path: "/dashboard/appliedjobs",
        element: <AppliedJobs />,
      },

      {
        path: "/dashboard/post-jobs",
        element: <PostJobs />,
      },
      {
        path: "/dashboard/company-profile",
        element: <CompanyProfile />,
      },
      {
        path: "/dashboard/userprofile",
        element: <UserProfile />,
      },
      //admin route
      {
        path: "/dashboard/adminstatictis",
        element: <AdminStatistic />,
      },
      {
        path: "/dashboard/alluser",
        element: <AllUser />,
      },
    ],
  },
]);
