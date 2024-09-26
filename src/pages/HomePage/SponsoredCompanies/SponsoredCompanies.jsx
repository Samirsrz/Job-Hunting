



// // this compo right not above

import { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import arrow icons
import Slider from "react-slick";
import logo from '../../../../src/assets/company/838020_file.svg'

const SponsoredCompanies = () => {
  const categories = [
    "All",
    "IT Services",
    "Technology",
    "Manufacturing & Production",
    "Healthcare & Life Sciences",
    "Infrastructure, Transport & Real Estate",
    "BFSI",
    "BPM",
    "Consumer, Retail & Hospitality",
    "Professional Services"
  ];

  const [activeCategory, setActiveCategory] = useState("All"); // default active button
  const slidesData = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; // Sample data

  // Custom Arrow Component for Next and Prev Arrows
  const CustomPrevArrow = (props) => {
    const { onClick, currentSlide } = props;
    const showArrow = currentSlide > 0 && slidesData.length > 4; // Show if not on the first slide and enough slides
    return (
      showArrow && (
        <button
          className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-full shadow-md hover:bg-gray-100"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          onClick={onClick}
        >
          <FaChevronLeft className="text-gray-600" size={20} />
        </button>
      )
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick, currentSlide, slideCount } = props;
    const showArrow = currentSlide < slideCount - 4 && slideCount > 4; // Show if not on the last slide and enough slides
    return (
      showArrow && (
        <button
          className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-full shadow-md hover:bg-gray-100"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          onClick={onClick}
        >
          <FaChevronRight className="text-gray-600" size={20} />
        </button>
      )
    );
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4, // 4 columns for large screens
    slidesToScroll: 4, // Scrolls through 4 cards at a time
    rows: 2, // 2 rows of cards
    arrows: true,
    prevArrow: <CustomPrevArrow />, // Custom previous arrow
    nextArrow: <CustomNextArrow />, // Custom next arrow
    responsive: [
      {
        breakpoint: 1024, // For large screens and above
        settings: {
          slidesToShow: 4, // Show 4 slides on large screens
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768, // For medium screens
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // For small screens
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="mt-11 relative"> {/* Added relative position for arrows */}
    <h1 className='font-bold text-center text-3xl my-2'>Sponsored companies</h1>
      <div id="btns" className="flex flex-wrap gap-3 justify-center">
        {categories.map((category, index) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`rounded-3xl border border-black px-4 py-1 transition-colors ${isActive ? "bg-gray-500 text-white" : "bg-transparent text-black"}`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Carousel Slider */}
      <Slider {...settings} className="mt-7">
        {slidesData.map((card, index) => (
          <div key={index} className="p-3">
            <div className="shadow-lg rounded-xl p-4 text-center flex flex-col gap-3 items-center border border-gray-200">
              {/* Company Logo */}
              <div className="flex justify-center mb-2">
                <img src={logo} alt="Shahi" className="w-16 h-16" />
              </div>

              {/* Company Name */}
              <h1 className="text-lg font-semibold">Shahi</h1>

              {/* Rating and Reviews */}
              <div className="flex items-center gap-1 text-gray-600 text-sm">
                <FaStar className="text-yellow-400" />
                <span className="font-semibold">4.1</span>
                <span>|</span>
                <span>1.6K+ reviews</span>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                <button className="px-2 py-1 text-xs rounded-3xl border border-gray-300">Import & Export</button>
                <button className="px-2 py-1 text-xs rounded-3xl border border-gray-300">Textile & Apparel</button>
                <button className="px-2 py-1 text-xs rounded-3xl border border-gray-300">B2B</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SponsoredCompanies;
