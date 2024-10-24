import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the RTK Query API
export const companyApi = createApi({
  reducerPath: 'companyApi',
  tagTypes:['Company','JobsButtons'],
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }),
  endpoints: (builder) => ({
    getSponsoredCompanies: builder.query({
      query: (category) => ({
        url: `/sponsored/companies`,
        params: { category },
      }),
    }),

    getJobsSearch: builder.query({
      query: ({ location, query }) => {
        const params = new URLSearchParams();
        if (location) params.append('location', location)
        if (query) params.append('type', query)

        return `/job/search?${params.toString()}`
      }
    }),
    getCategoryButtonsJobs: builder.query({
      query: ({ category }) => {
        const params = new URLSearchParams();
        if (category) params.append('category', category)
        return `/category-button?${params.toString()}`
      },
      providesTags:['JobsButtons']
    })
  }),
});

// Export the hook
export const {
  useGetSponsoredCompaniesQuery,
  useGetJobsSearchQuery,
  useGetCategoryButtonsJobsQuery

} = companyApi;
