// import React from "react";


import BiggestContest from "./BiggestContest/BiggestContest";
import CategoryButtons from "./CategoryButtons/CategoryButtons";
import CompanyCarousel from "./CompanyCarousel/CompanyCarousel";
import DiscoverJobs from "./DiscoverJobs/DiscoverJobs";
import FeaturedCompanies from "./FeaturedCompanies/FeaturedCompanies";
import HomeSearch from "./HomeSearch/HomeSearch";
import PracticeCustomizedMockInterview from "./PracticeCustomizedMockInterview/PracticeCustomizedMockInterview";

import { Helmet } from "react-helmet-async";
import SponsoredCompanies from "./SponsoredCompanies/SponsoredCompanies";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";
import EventCard from "./UpcomingEvents/UpcomingEvents";
import InterviewCompanies from "./InterviewCompanies/InterviewCompanies";
import ViewAllJobsCompany from "../ViewAllJobsCompany/ViewAllJobsCompany";



const Home = () => {
  return (

    <div className="container max-w-screen-xl m-auto">
 
      {/* here add all section of home page,
      every section import here. create home page section inside the home page folder
      */}


      <HomeSearch />
      <PracticeCustomizedMockInterview />
      <CategoryButtons />
      <CompanyCarousel />
      <FeaturedCompanies />
      <BiggestContest />
      <DiscoverJobs />
      <SponsoredCompanies />
    
        <EventCard />
    
    <div className="h-[15px]">

    </div>
        <InterviewCompanies />
    


      <Helmet><title>Job Hunting | Home</title></Helmet>

    </div>
  );
};

export default Home;
