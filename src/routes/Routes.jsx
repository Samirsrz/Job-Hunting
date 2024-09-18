import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../components/HomePage/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {/* <Navbar /> */}
        <Home/>
      </>
    ),
  },
]);
