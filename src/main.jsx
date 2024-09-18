import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routes.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
