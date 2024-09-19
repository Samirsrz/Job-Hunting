import { createBrowserRouter } from "react-router-dom";

import Categories from "../pages/Categories/Categories";
import App from "../App";
import Home from "../pages/HomePage/Home";

import SignUp from "../pages/SignUp/SignUp";
import Jobs from "../pages/Jobs/Jobs";

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
<<<<<<< HEAD
     
=======
      {
        path: "/login",
        element: <Login />,
      },
>>>>>>> 6de546b9f1d9bfa2a50e5a75ae56bfdf7fed9664
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
