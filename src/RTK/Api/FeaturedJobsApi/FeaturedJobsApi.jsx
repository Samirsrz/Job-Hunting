import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

let featuredJobsApi = createApi({
    reducerPath: 'FeaturedJobsApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }),
    tagTypes: ['FeaturedJobs','Followers','CompanyJobs'],
    endpoints: (builder) => ({
        getFeaturedJobs: builder.query({
            query: () => '/featured/jobs',
            // transformResponse: (res) => res.data,
            providesTags: ['FeaturedJobs']
        }),
        addFollower: builder.mutation({
            query: (followerInfo) => ({
                url: `/view-jobs/followers`,
                method: 'POST',
                body: followerInfo
            }),
            invalidatesTags:['Followers']
        }),
        getuserFromFollowers: builder.query({
            query: (email) => `/follower/${email}`,
            providesTags: ['Followers']
        }),
        unfollowCompany: builder.mutation({
            query: (email) => ({
                url: `/user/follower/${email}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Followers']
        }),
        getCompanyBasedJobs:builder.query({
            query:({page,limit,companyName})=>`/company/jobs?page=${page}&limit=${limit}&companyName=${companyName}`,
            providesTags:['CompanyJobs']
        })
    })
})


export let {

    useGetFeaturedJobsQuery,
    useAddFollowerMutation,
    useGetuserFromFollowersQuery,
    useUnfollowCompanyMutation,
    useGetCompanyBasedJobsQuery
} = featuredJobsApi
export default featuredJobsApi