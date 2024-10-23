import { configureStore } from "@reduxjs/toolkit";
import featuredJobsApi from "../RTK/Api/FeaturedJobsApi/FeaturedJobsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { paymentApi } from "../RTK/Api/PaymentApi/paymentSlice";
import { companyApi } from "../RTK/Api/SponsoredCompaniesApi/SponsoredCompaniesApi";
import { jobsApi } from "../RTK/features/jobsApi";
import savedJobReducer from "../RTK/features/savedJobSlice";

let store = configureStore({
  reducer: {
    savedJob: savedJobReducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
    [companyApi.reducerPath]: companyApi.reducer,
    [featuredJobsApi.reducerPath]: featuredJobsApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(featuredJobsApi.middleware)
      .concat(paymentApi.middleware)
      .concat(companyApi.middleware)
      .concat(jobsApi.middleware),
});
setupListeners(store.dispatch);
export default store;
