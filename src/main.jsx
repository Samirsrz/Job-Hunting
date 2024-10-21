import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./i18n.js";
import "swiper/css";
import "swiper/css/effect-cards";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import store from "./store/store.jsx";
import { SavedJobsProvider } from "./providers/SavedJobsContext.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <HelmetProvider>
        <I18nextProvider>
          <SavedJobsProvider>
            <AuthProvider>
              <RouterProvider router={router} />
              <Toaster />
            </AuthProvider>
          </SavedJobsProvider>
        </I18nextProvider>
      </HelmetProvider>
    </StrictMode>
  </Provider>
);
