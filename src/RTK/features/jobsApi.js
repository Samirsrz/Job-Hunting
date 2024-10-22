import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getJobsByIds: builder.query({
      query: (ids) => {
        const queryString = ids.map((id) => `ids=${id}`).join("&");
        return `/jobsByIds?${queryString}`;
      },
    }),
    getJobs: builder.query({
      query: ({ category, sort, search }) =>
        `/jobs?category=${category}&sort=${sort}&search=${search}`,
    }),
    getCategories: builder.query({
      query: () => "/category",
    }),
    getJobSuggestions: builder.query({
      query: (search) => `/job-suggestions?search=${search}`,
    }),
  }),
});

export const {
  useGetJobsByIdsQuery,
  useGetCategoriesQuery,
  useGetJobSuggestionsQuery,
  useGetJobsQuery,
} = jobsApi;
