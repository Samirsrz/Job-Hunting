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
  }),
});

export const { useGetJobsByIdsQuery } = jobsApi;
