


import React from 'react';
import './BiggestContest.css'; // Create a separate CSS file for the animation styles
import companyContest from '../../../../src/assets/company/838020_file.svg'

const BiggestContest = () => {
  return (
    <section className="bg-[#5900f4f9] mt-12 relative flex justify-between flex-col lg:flex-row gap-3 items-center lg:h-[200px] rounded-3xl">
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

      <article className='text-center lg:text-left '  >
        <h1 className='font-bold text-3xl text-white px-3 lg:p-0'>Bangladesh &rsquo;s  biggest skill contest <br/> to help you stand out to reqruiters</h1>
        <button className='border border-white rounded-3xl px-4 mt-3 py-2 bg-[#5900f454] text-white font-semibold'>win from a prize pool of 2 lac Tk</button>
        <button className='border border-white rounded-3xl px-4 mt-3 py-2 bg-[#5900f454] text-white font-semibold'> Boost with a winner&#39;s certificate</button>
      </article>
      <article className= 'my-3 lg:my-0'>
        <button className='font-bold text-3xl bg-yellow-400 rounded-3xl px-4 py-2 mr-3'>Tell me more</button>
      </article>
    </section>
  );
};

export default BiggestContest;
