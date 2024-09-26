
import { createBrowserRouter } from "react-router-dom";
import Categories from "../pages/Categories/Categories";
import App from "../App";
import Home from "../pages/HomePage/Home";
import SignUp from "../pages/SignUp/SignUp";
import Jobs from "../pages/Jobs/Jobs";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import ViewsJob from "../pages/UserDashboard/ViewsJob";
import AppliedJobs from "../pages/UserDashboard/AppliedJobs";
import PostJobs from "../pages/HostDashboard/PostJobs";
import Statictis from "../components/Dashboard/Statictis";
import UserProfile from "../pages/UserDashboard/UserProfile";
import AllUser from "../pages/AdminDashboard/AllUser";
import LangProvider from "../providers/LangProvider";
import JobDetails from "./../pages/Jobs/JobDetails";
import ViewAllJobsCompany from "../pages/ViewAllJobsCompany/ViewAllJobsCompany";

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
        element: <Categories></Categories>,
      },
      {
        path: "/signup",
        element: <SignUp />,
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
        path: "/jobs/viewAllJobsCompany",
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
        path: "/dashboard/viewjobs",
        element: <ViewsJob />,
      },
      {
        path: "/dashboard/appliedjobs",
        element: <AppliedJobs></AppliedJobs>,
      },

      {
        path: "/dashboard/post-jobs",
        element: <PostJobs />,
      },
      {
        path: "/dashboard/userprofile", 
        element: <UserProfile />,
      },
      {
        path: "/dashboard/alluser",
        element: <AllUser />,
      },
    ],
  },
]);
