// import React from "react";
import "./BiggestContest.css"; // Create a separate CSS file for the animation styles
// import companyContest from "../../../../public/company/838020_file.svg";
import companyContest from "../../../../public/company/ad.jpg";
import { useTranslation } from 'react-i18next';


const BiggestContest = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#b08af1f9] mt-12 relative flex justify-between flex-col lg:flex-row gap-3 items-center lg:h-[200px] rounded-3xl">
      <article className="flex justify-between items-center lg:justify-normal lg:gap-10 bg-[#00000055] px-14 w-full lg:w-[300px] rounded-r-3xl  lg:rounded-r-[70px] rounded-l-3xl overflow-hidden">
        {/* First Column (Top to Bottom Animation) */}
        <div className="flex flex-col gap-3 h-[200px] w-[50%] overflow-hidden">
          <div className="animate-marquee-top flex flex-col gap-3">
            <img
              className="w-[50px] bg-white rounded-lg"
              src={companyContest}
              alt="Company Logo"
            />
            <img
              className="w-[50px] bg-white rounded-lg"
              src={companyContest}
              alt="Company Logo"
            />
            <img
              className="w-[50px] bg-white rounded-lg"
              src={companyContest}
              alt="Company Logo"
            />
            <img
              className="w-[50px] bg-white rounded-lg"
              src={companyContest}
              alt="Company Logo"
            />
          </div>
        </div>

        {/* Second Column (Bottom to Top Animation) */}
        <div className="flex flex-col gap-3 h-[200px] w-[50%] overflow-hidden">
          <div className="animate-marquee-bottom flex flex-col gap-3">
            <img
              className="w-[50px] bg-white rounded-lg"
              src={companyContest}
              alt="Company Logo"
            />
            <img
              className="w-[50px] bg-white rounded-lg"
              src={companyContest}
              alt="Company Logo"
            />
            <img
              className="w-[50px] bg-white rounded-lg"
              src={companyContest}
              alt="Company Logo"
            />
            <img
              className="w-[50px] bg-white rounded-lg"
              src={companyContest}
              alt="Company Logo"
            />
          </div>
        </div>
      </article>

      <article className="text-center lg:text-left ">
        <h1 className="font-bold text-3xl text-white px-3 lg:p-0 tracking-wide">
        {t('Bangladeshsbiggestskillcontesttohelpyoustandouttoreqruiters')} 
        </h1>
        <button className="border mr-2 border-white rounded-3xl px-4 mt-3 py-2 bg-[#d7cceb54] text-white font-semibold tracking-wide">
        {t('winfromaprizepoolof2lacTk')} 
        </button>
        <button className="border border-white rounded-3xl px-4 mt-3 py-2  tracking-wide bg-[#d6c8ee54] text-white font-semibold">
          {" "}
          {t('Boostwithawinner&#39;scertificate')} 
        </button>
      </article>
      <article className="my-3 lg:my-0">
        <button className=" font-semibold text-2xl bg-yellow-200 rounded-2xl px-2 py-2 mr-3">
        {t('Tell')} 
        </button>
      </article>
    </section>
  );
};

export default BiggestContest;
