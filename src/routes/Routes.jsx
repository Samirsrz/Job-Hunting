import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import HomePage from "../components/HomePage/HomePage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {/* <Navbar /> */}
        <HomePage/>
      </>
    ),
  },
]);
