/* eslint-disable react/prop-types */
import { useState } from "react";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import logo1 from '../../../../src/assets/company/4467146.gif'; 
// Example company logos
const categories = [
  {
    title: "MNCs",
    hiring: "1.9K+ are actively hiring",
    logos: [
      logo1,
      logo1,
      logo1,
      logo1,
    ],
  },
  {
    title: "Internet",
    hiring: "194 are actively hiring",
    logos: [
      logo1,
      logo1,
      logo1,
      logo1,
    ],
  },
  {
    title: "Manufacturing",
    hiring: "831 are actively hiring",
    logos: [
      logo1,
      logo1,
      logo1,
      logo1,
    ],
  },
  {
    title: "Fortune 500",
    hiring: "107 are actively hiring",
    logos: [
      logo1,
      logo1,
      logo1,
      logo1,
    ],
  },
  {
    title: "Product",
    hiring: "971 are actively hiring",
    logos: [
      logo1,
      logo1,
      logo1,
    ],
  },
];

// Custom Arrow Components
const NextArrow = ({ onClick, hide }) => {
  return (
    <div
      className={`absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 ${
        hide ? "hidden" : ""
      }`}
      onClick={onClick}
    >
      <IoIosArrowForward size={24} />
    </div>
  );
};

const PrevArrow = ({ onClick, hide }) => {
  return (
    <div
      className={`absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 ${
        hide ? "hidden" : ""
      }`}
      onClick={onClick}
    >
      <IoIosArrowBack size={24} />
    </div>
  );
};

const CompanyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Handle changes when a slide changes
  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
  };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    beforeChange: handleBeforeChange,
    nextArrow: <NextArrow hide={currentSlide === categories.length - 1} />, // Hide if at last slide
    prevArrow: <PrevArrow hide={currentSlide === 0} />, // Hide if at first slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  };

  return (
    <div className="py-8 relative">
      <h2 className="font-bold text-center text-3xl mb-8">
        Top companies hiring now
      </h2>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="p-4" style={{ width: "auto" }}>
            <div className="border rounded-lg p-4 shadow-lg h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  {category.title}
                  <IoIosArrowForward className="opacity-45 ml-2" />
                </h3>
                <p className="text-gray-500">{category.hiring}</p>
              </div>
              <div className="flex gap-2 mt-4">
                {category.logos.map((logo, idx) => (
                  <img
                    key={idx}
                    src={logo}
                    alt="Company Logo"
                    className="w-12 h-12 object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CompanyCarousel;
