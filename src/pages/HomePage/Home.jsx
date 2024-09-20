// import React from "react";


import BiggestContest from "./BiggestContest/BiggestContest";
import CategoryButtons from "./CategoryButtons/CategoryButtons";
import CompanyCarousel from "./CompanyCarousel/CompanyCarousel";
import FeaturedCompanies from "./FeaturedCompanies/FeaturedCompanies";
import HomeSearch from "./HomeSearch/HomeSearch";
import PracticeCustomizedMockInterview from "./PracticeCustomizedMockInterview/PracticeCustomizedMockInterview";

import { Helmet } from "react-helmet-async";


const Home = () => {
  return (
    <div className="max-w-screen-xl m-auto">
      {/* here add all section of home page,
      every section import here. create home page section inside the home page folder
      */}


      <HomeSearch />
      <PracticeCustomizedMockInterview />
      <CategoryButtons />
      <CompanyCarousel />
      <FeaturedCompanies />
      <BiggestContest />
      <Helmet><title>Job Hunting | Home</title></Helmet>

    </div>
  );
};

export default Home;
