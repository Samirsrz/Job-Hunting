import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Lottie from "lottie-react";
import groovyWalkAnimation from "/public/searchingJobs/Animation - 1726837190077.json";

// Job roles data



const DiscoverJobs = () => {
 
  return (
    <section className='mt-16 relative'>
      <div className="flex lg:h-[340px] flex-col md:flex-row justify-between items-center p-2 md:p-4 lg:p-10 bg-gradient-to-r from-orange-100 to-white rounded-xl shadow-lg">
        {/* Left section: Illustration and text */}
        <div className="w-full md:w-1/2 p-4 flex flex-col h-[350px] ">
          <Lottie animationData={groovyWalkAnimation} loop={true} height={100 + 'px'} className='h-full' />

        </div>
        {/* <div className="flex items-center flex-col w-full"> */}
        <div className="flex h-full flex-col items-center gap-5 text-center right-3 w-full md:w-1/2 p-4 border  bg-white rounded-3xl">
         <div className=" h-full space-y-6">
           <h1 className='font-bold text-xl md:text-3xl'> Discover jobs across <br /> popular roles</h1>
          <p>Select a role and we'll show <br /> you relevant jobs for it!</p>
          <div>
            <button className='px-4 py-2 rounded-3xl bg-blue-700 text-white'>Explore</button>
          
          </div>
         </div>
         
        </div>
        {/* </div> */}

      </div>

      <aside>

      </aside>
    </section>
  );
};

export default DiscoverJobs;
