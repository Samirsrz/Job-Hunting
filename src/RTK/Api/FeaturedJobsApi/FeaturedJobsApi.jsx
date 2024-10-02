import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

let featuredJobsApi = createApi({
    reducerPath: 'FeaturedJobsApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }),
    tagTypes: ['FeaturedJobs','Followers'],
    endpoints: (builder) => ({
        getFeaturedJobs: builder.query({
            query: () => '/jobs',
            transformResponse: (res) => res.data,
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
        })
    })
})


export let {

    useGetFeaturedJobsQuery,
    useAddFollowerMutation,
    useGetuserFromFollowersQuery,
    useUnfollowCompanyMutation
} = featuredJobsApi
export default featuredJobsApi