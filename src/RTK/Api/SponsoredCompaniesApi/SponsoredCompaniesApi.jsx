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
  }),
});

// Export the hook
export const { useGetSponsoredCompaniesQuery } = companyApi;
