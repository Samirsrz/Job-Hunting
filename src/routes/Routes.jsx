import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Categories from './../Page/Categories';
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
      </>
    ),
  },
  {
    path: "/categories",
    element: <Categories></Categories>
  },
  {
    path:'signup',
    element: <SignUp/>
  }
]);
