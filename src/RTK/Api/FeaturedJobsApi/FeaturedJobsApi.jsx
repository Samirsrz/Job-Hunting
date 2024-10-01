import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

let featuredJobsApi=createApi({
    reducerPath:'FeaturedJobsApi',
    baseQuery:fetchBaseQuery({baseUrl:`${import.meta.env.VITE_base_url}`}),
    tagTypes:['FeaturedJobs'],
    endpoints:(builder)=>({
        getFeaturedJobs:builder.query({
            query:()=>'/jobs',
            transformResponse:(res)=> res.data,
            providesTags:['FeaturedJobs']
        })
    })
})


export let {useGetFeaturedJobsQuery}=featuredJobsApi
export default featuredJobsApi