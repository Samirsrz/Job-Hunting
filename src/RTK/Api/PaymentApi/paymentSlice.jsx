

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const paymentApi = createApi({
  reducerPath: 'paymentApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }),
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation({
      query: (paymentData) => ({
        url: '/api/payment', // Backend endpoint for Stripe payment
        method: 'POST',
        body: paymentData,
      }),
    }),
  }),
});


export const { useCreatePaymentIntentMutation } = paymentApi;
