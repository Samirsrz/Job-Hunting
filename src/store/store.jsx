import { configureStore } from "@reduxjs/toolkit";
import featuredJobsApi from "../RTK/Api/FeaturedJobsApi/FeaturedJobsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { companyApi } from "../RTK/Api/SponsoredCompaniesApi/SponsoredCompaniesApi";

let store = configureStore({
    reducer: {
        [featuredJobsApi.reducerPath]: featuredJobsApi.reducer,
        [companyApi.reducerPath]:companyApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(featuredJobsApi.middleware) 
    .concat(companyApi.middleware)
})
setupListeners(store.dispatch);
export default store