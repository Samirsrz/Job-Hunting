import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },




    { path: '/login', element: <Login /> },
    { path: '/signup', element: <SignUp /> },





  ]);