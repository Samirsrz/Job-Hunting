import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './i18n.js';

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import { I18nextProvider } from "react-i18next";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <I18nextProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
      </I18nextProvider>
      
    </HelmetProvider>
  </StrictMode>
);
