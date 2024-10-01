import { configureStore } from "@reduxjs/toolkit";
import featuredJobsApi from "../RTK/Api/FeaturedJobsApi/FeaturedJobsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

let store = configureStore({
    reducer: {
        [featuredJobsApi.reducerPath]: featuredJobsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(featuredJobsApi.middleware)
})
setupListeners(store.dispatch);
export default store