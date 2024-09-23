





import { IoIosArrowForward } from "react-icons/io";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Lottie from "lottie-react";
import groovyWalkAnimation from "/public/searchingJobs/Animation - 1726837190077.json";

// Job roles data
const jobRoles = [
  { title: 'Full Stack Developer', jobs: '20.9K+ Jobs' },
  { title: 'Mobile / App Developer', jobs: '2.2K+ Jobs' },
  { title: 'Front End Developer', jobs: '3.4K+ Jobs' },
  { title: 'DevOps Engineer', jobs: '2.3K+ Jobs' },
  { title: 'Engineering Manager', jobs: '1.4K+ Jobs' },
  { title: 'Technical Lead', jobs: '12K+ Jobs' },
  { title: 'Front End Developer', jobs: '3.4K+ Jobs' },
  { title: 'DevOps Engineer', jobs: '2.3K+ Jobs' },
  { title: 'Engineering Manager', jobs: '1.4K+ Jobs' },
  { title: 'Technical Lead', jobs: '12K+ Jobs' },
  { title: 'DevOps Engineer', jobs: '2.3K+ Jobs' },
  { title: 'Engineering Manager', jobs: '1.4K+ Jobs' },
  { title: 'Technical Lead', jobs: '12K+ Jobs' },
  { title: 'Front End Developer', jobs: '3.4K+ Jobs' },
  { title: 'DevOps Engineer', jobs: '2.3K+ Jobs' },
  { title: 'Engineering Manager', jobs: '1.4K+ Jobs' },
  { title: 'Technical Lead', jobs: '12K+ Jobs' },
];

const NextArrow = ({ onClick }) => (
  <div onClick={onClick} className="absolute right-0  cursor-pointer z-10 flex items-center justify-center">
    <IoIosArrowForward className="text-gray-500" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div onClick={onClick} className="absolute left-0 cursor-pointer z-10">
    <IoIosArrowForward className="text-gray-500 rotate-180" />
  </div>
);

const DiscoverJobs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 group (6 cards) at a time
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Adjust behavior for mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className='mt-16 relative'>
      <div className="flex h-[340px] flex-col md:flex-row justify-between items-center p-10 bg-gradient-to-r from-orange-100 to-white rounded-xl shadow-lg">
        {/* Left section: Illustration and text */}
        <div className="w-full md:w-1/2 p-4 flex flex-col ">
          <Lottie animationData={groovyWalkAnimation} loop={true} height={100 + 'px'} className='h-full p-4' />

        </div>
        {/* <div className="flex items-center flex-col w-full"> */}
        <div className="flex h-full flex-col items-center gap-5 text-center right-3 w-full md:w-1/2 p-4 border  bg-white rounded-3xl">
         <div className=" h-full space-y-6">
           <h1 className='font-bold text-3xl'> Discover jobs across <br /> popular roles</h1>
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
