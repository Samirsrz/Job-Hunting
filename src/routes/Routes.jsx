import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
      </>
    ),
  },
]);
