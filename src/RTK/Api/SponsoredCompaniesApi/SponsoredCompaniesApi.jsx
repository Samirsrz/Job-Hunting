import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the RTK Query API
export const companyApi = createApi({
  reducerPath: 'companyApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }),
  endpoints: (builder) => ({
    getSponsoredCompanies: builder.query({
      query: (category) => ({
        url: `/sponsored/companies`,
        params: { category },
      }),
    }),

    getJobsSearch:builder.query({
      query:({location,query})=>{
        const params=new URLSearchParams();
        if (location) params.append('location',location)
        if(query) params.append('type',query)
     
          return `/job/search?${params.toString()}`
      }
    })
  }),
});

// Export the hook
export const { 
  useGetSponsoredCompaniesQuery,
  useGetJobsSearchQuery

 } = companyApi;
