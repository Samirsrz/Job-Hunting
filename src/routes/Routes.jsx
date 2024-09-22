import { createBrowserRouter } from "react-router-dom";

import Categories from "../pages/Categories/Categories";
import App from "../App";
import Home from "../pages/HomePage/Home";

import SignUp from "../pages/SignUp/SignUp";
import Jobs from "../pages/Jobs/Jobs";
import ErrorPage from "../components/ErrorPage/ErrorPage";

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
]);
