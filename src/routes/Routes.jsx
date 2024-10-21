import { createBrowserRouter } from "react-router-dom";
import Categories from "../pages/Categories/Categories";
import App from "../App";
import Home from "../pages/HomePage/Home";
import Ai from "../pages/Ai/ai";
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
import AdminStatistic from "../pages/AdminDashboard/AdminStatistic";

import VeiwCompanyJob from "../pages/ViewAllJobsCompany/ViewCompanyJob/VeiwCompanyJob";
import ViewAllCompanies from "../pages/ViewAllCompanies/ViewAllCompanies";
import PrivateRoute from "./PrivateRoute";
import ViewEventChallenge from "../pages/Event/ViewEventChallenge/ViewEventChallenge";

import Payment from "../pages/Payment/Payment";
import PaymentRecieve from "../pages/Payment/PaymentRecieve";

import InterviewSchedule from "../../src/pages/InterviewSchedule/InterviewSchedule";
import ManageApplication from "../pages/HostDashboard/ManageApplication";
import UserStatictis from "../pages/UserDashboard/UserStatictis";
import ViewHostJobs from "../pages/HostDashboard/ViewHostJobs";
import ViewAllJobs from "../pages/AdminDashboard/ViewAllJobs";
import HostStatisticPage from "../pages/HostDashboard/HostStatisticPage";
import HostProfile from "../components/HostDashboard/HostProfile";

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
        path: "/ai",
        element: <Ai />,
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
        element: (
          <PrivateRoute>
            {" "}
            <Jobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/jobs/viewAllJobsCompany/:id",
        element: <ViewAllJobsCompany />,
      },
      {
        path: "/view-company-job/:id",
        element: <VeiwCompanyJob />,
      },
      {
        path: "view-all-companies",
        element: <ViewAllCompanies />,
      },
      {
        path: "/event/details/:id",
        element: <ViewEventChallenge />,
      },
      {
        path: "view-all-companies",
        element: <ViewAllCompanies />,
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
      //user Route,
      {
        path: "/dashboard/userstatistic",
        element: <UserStatictis />,
      },
      {
        path: "/dashboard/appliedjobs",
        element: <AppliedJobs />,
      },
      {
        path: "/dashboard/interview-schedule",
        element: <InterviewSchedule />,
      },
      {
        path: "/dashboard/userprofile",
        element: <UserProfile />,
      },

      //Host Route done*********
      {
        path: "/dashboard/host-profile",
        element: <HostProfile />,
      },
      {
        path: "/dashboard/host-statistic",
        element: <HostStatisticPage />,
      },
      {
        path: "/dashboard/post-jobs",
        element: <PostJobs />,
      },
      {
        path: "/dashboard/viewhostjobs",
        element: <ViewHostJobs />,
      },
      {
        path: "/dashboard/company-profile",
        element: <CompanyProfile />,
      },
      {
        path: "/dashboard/payment",
        element: <Payment />,
      },

      //admin route done**********
      {
        path: "/dashboard/adminstatictis",
        element: <AdminStatistic />,
      },
      {
        path: "/dashboard/alluser",
        element: <AllUser />,
      },
      {
        path: "/dashboard/viewalljobs",
        element: <ViewAllJobs />,
      },
      {
        path: "/dashboard/manage_application",
        element: <ManageApplication />,
      },
      {
        path: "/dashboard/payment-form",
        element: <PaymentRecieve />,
      },
    ],
  },
]);
