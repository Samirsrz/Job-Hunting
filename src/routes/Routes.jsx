import { createBrowserRouter } from "react-router-dom";

import Categories from "../pages/Categories/Categories";
import App from "../App";
import Home from "../pages/HomePage/Home";

import SignUp from "../pages/SignUp/SignUp";
import Jobs from "../pages/Jobs/Jobs";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
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
        path: "/login",
        element: <Login/>,
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
