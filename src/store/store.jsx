import { configureStore } from "@reduxjs/toolkit";
import featuredJobsApi from "../RTK/Api/FeaturedJobsApi/FeaturedJobsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { paymentApi } from "../RTK/Api/PaymentApi/paymentSlice";

let store = configureStore({
    reducer: {
     
        [featuredJobsApi.reducerPath]: featuredJobsApi.reducer,
        [paymentApi.reducerPath]: paymentApi.reducer,
   
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(featuredJobsApi.middleware) 
    .concat(paymentApi.middleware),
});
setupListeners(store.dispatch);
export default store