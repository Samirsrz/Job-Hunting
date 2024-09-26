import { createBrowserRouter } from "react-router-dom";

import Categories from "../pages/Categories/Categories";
import App from "../App";
import Home from "../pages/HomePage/Home";

import SignUp from "../pages/SignUp/SignUp";
import Jobs from "../pages/Jobs/Jobs";

import Login from "../pages/Login/Login";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import ViewsJob from "../pages/UserDashboard/ViewsJob";
import AppliedJobs from "../pages/UserDashboard/AppliedJobs";
import PostJobs from "../pages/HostDashboard/PostJobs";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage/>,

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

    ],
  },

 {
   path: '/dashboard',
   element: <DashboardLayout/>,
   children: [
    {
      path:"/dashboard/viewjobs",
      element:<ViewsJob></ViewsJob>
    },
    {
      path:"/dashboard/appliedjobs",
      element:<AppliedJobs></AppliedJobs>
    },

    {
      path:"/dashboard/post-jobs",
      element: <PostJobs/>
    }

   ]
 }
 





]);
