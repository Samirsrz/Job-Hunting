/* eslint-disable react/prop-types */
import Slider from "react-slick";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import companyFeatueredIcon from "../../../../src/assets/company/4156.gif"
import { Link } from "react-router-dom";
// Custom Arrow Components
const NextArrow = ({ onClick, isVisible }) => {
  return isVisible ? (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
      onClick={onClick}
    >
      <IoIosArrowForward size={24} />
    </div>
  ) : null; // Hide the arrow if not visible
};

const PrevArrow = ({ onClick, isVisible }) => {
  return isVisible ? (
    <div
      className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
      onClick={onClick}
    >
      <IoIosArrowBack size={24} />
    </div>
  ) : null;
};

const FeaturedCompanies = () => {
  const [currentSlide, setCurrentSlide] = useState(0); //
  const companies = [1, 1, 1, 1, 1, 1, 1]; // Example company data

  const settings = {
    // dots: true,
    infinite: false, // s
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    nextArrow: (
      <NextArrow
        isVisible={currentSlide < companies.length - 4.5}
      />
    ),
    prevArrow: (
      <PrevArrow
        isVisible={currentSlide > 0}
      />
    ),
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  return (
    <section>
      <div>
        <h1 className="font-bold text-center text-3xl mb-3">Featured companies actively hiring</h1>
        <div id="btns" className="flex justify-center space-x-4 mb-8">
          <button className="border rounded-3xl px-4 py-2 hover:shadow-lg duration-150">
            All
          </button>
          <button className="border rounded-3xl px-4 py-2 hover:shadow-lg duration-150">
            IT services
          </button>
          <button className="border rounded-3xl px-4 py-2 hover:shadow-lg duration-150">
            BSFI
          </button>
        </div>
      </div>

      <div className="relative ">
        <Slider {...settings}>
          {companies.map((card, index) => (
            <div key={index} className="p-4">
              <div className="border text-center space-y-3 p-4 w-full rounded-xl hover:shadow-lg duration-200">
                <div
                  id="company-icon"
                  className="flex justify-center"
                >
                  <img
                    src={companyFeatueredIcon}
                    alt="title image"
                    className="w-full h-20 object-contain"
                  />
                </div>
                <div
                  id="company-title"
                  className="p-4 rounded-lg flex flex-col gap-2 items-center"
                  style={{ background: "rgb(247, 248, 251)" }}
                >
                  <h1>Cognizant</h1>
                  <div className="flex items-center opacity-75">
                    <FaStar className="text-yellow-500" /> <span>3.9</span>
                    <TbMinusVertical />
                    <p>4K+ reviews</p>
                  </div>
                </div>
                <div id="company-content">
                  <p>Leading ITeS company with global presence.</p>
                </div>
                <div>
                  <Link to={'/jobs/viewAllJobsCompany'} className="w-full h-full">
                    <button className="relative rounded-3xl border-none hover:shadow-lg duration-300 text-blue-600 bg-blue-100 font-semibold px-4 py-2">
                     View jobs
                    </button>
                  </Link>
                </div>


              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="text-center" id="view all companies button" >
        <button className="border hover:shadow-md hover:shadow-blue-700 duration-300 border-blue-600 px-4 py-2 rounded-3xl text-blue-600 font-semibold">View all companies</button>
      </div>
    </section>
  );
};

export default FeaturedCompanies;
