import Lottie from "lottie-react";
import React from "react";
import RegisterAnnimation from "../../assets/Annimations/RegisterAnnimation.json";

const WelcomeCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 text-[#4a5568] lg:flex  md:flex-row lg:flex-row items-center">
      <div className="space-y-2">
        <h1 className="text-2xl">
          Hi, <span className="font-bold">Abu Rahat Shaum</span>
        </h1>
        <h1 className="text-3xl font-semibold text-wrap">
          Welcome to "Job Hunting"{" "}
        </h1>
        <p className="lg:pr-10">
          We're excited to help you find your dream job. Sign up to access job
          listings, submit applications, and track your career opportunities all
          in one place. Let’s get started on your journey to success!{" "}
        </p>
      </div>
      <div>
        <figure>
          <Lottie
            animationData={RegisterAnnimation}
            className="h-50 w-50"
          ></Lottie>
        </figure>
      </div>
    </div>
  );
};

export default WelcomeCard;
