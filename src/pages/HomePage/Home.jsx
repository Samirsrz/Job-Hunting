// import React from "react";

import { Helmet } from "react-helmet-async";
import HomePage from "../../components/HomePage/HomePage";

const Home = () => {
  return (
    <div className="max-w-screen-xl m-auto">
      {/* here add all section of home page,
      every section import here. create home page section inside the home page folder
      */}
      <Helmet><title>Job Hunting | Home</title></Helmet>
 
 <HomePage/>
    
    </div>
  );
};

export default Home;
