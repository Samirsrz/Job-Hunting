

import React from "react";
import { FaCalendarAlt, FaUserAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import eventImage from '../../../../src/assets/events/eventsBannerFallback_1.png';
import eventCompany from '../../../../src/assets/company/ll.gif';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-[0px] top-[50%] bg-white rounded-full p-2 shadow-md transform translate-y-[-50%] z-10 cursor-pointer text-purple-500 hover:text-purple-600"
    onClick={onClick}
  >
    <FaChevronRight size={24} />
  </div>
);

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[-25px] top-[50%] bg-white rounded-full p-2 shadow-md transform translate-y-[-50%] z-10 cursor-pointer text-purple-500 hover:text-purple-600"
    onClick={onClick}
  >
    <FaChevronLeft size={24} />
  </div>
);

const EventCard = () => {
  let events = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; // Sample events data

  // Slick settings for the slider
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2.5, // Show 2.5 cards for better preview
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom prev arrow
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 2, // Show 2 cards on large screens
        }
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 1, // Show 1 card on medium/small screens
        }
      },
      {
        breakpoint: 480, // Small screens
        settings: {
          slidesToShow: 1, // Show 1 card on small screens
          arrows: false, // Hide arrows on small screens for a cleaner look
        }
      }
    ]
  };

  return (
    <div className="mt-11">
      <section className="flex flex-col lg:flex-row mb-6 gap-3 overflow-hidden">

        {/* Sidebar for the title and image */}
        <aside className="w-full lg:w-[30%] text-center mb-4 lg:mb-0 md:p-2">
          <h1 className="font-bold text-xl lg:text-3xl">
            Upcoming events and <br /> challenges
          </h1>
          <div className="w-full flex justify-center">
            <img className="w-[50%] lg:w-[70%]" src="https://static.naukimg.com/s/0/0/i/Events/eventsSwiperLeft-ot.png" alt="" />
          </div>
        </aside>

        {/* Slider wrapper */}
        <div className="w-full lg:w-[70%]">
          <Slider {...settings} className="">
            {events.map((event, index) => (
              <div className="px-2" key={index}> {/* Added padding to create gap between cards */}
                <aside className="p-4 bg-white rounded-xl relative border-[2px]">
                  {/* Upper part with event details */}
                  <div className="relative">
                    <img
                      src={eventImage} // Event image
                      alt="Event"
                      className="rounded-t-xl h-36 w-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-md">
                      Entry closes in 1d
                    </div>
                    <div className="absolute top-2 right-2 bg-gray-100 text-purple-600 text-xs px-2 py-1 rounded-md">
                      Webinar
                    </div>
                  </div>

                  {/* Event content */}
                  <div className="mt-3">
                    <div className="flex gap-3 items-center">
                      <img src={eventCompany} alt="Company" />
                      <div>
                        <h3 className="text-lg font-semibold">
                          Switch from service to product-based MAANG companies
                        </h3>
                        <p className="text-sm text-gray-500">Coding Ninjas</p>
                      </div>
                    </div>
                  </div>

                  {/* Event date and participants */}
                  <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      <span>24 Sep, 7:30 PM</span>
                    </div>
                    <div className="flex items-center">
                      <FaUserAlt className="mr-1" />
                      <span>438 Enrolled</span>
                    </div>
                  </div>

                  {/* Decorative dashed border */}
                  <div className="mt-7"></div>
                  <div className="w-full flex items-center">
                    <div className="h-[25px] w-[25px] bg-white rounded-full absolute left-[-13px] border-r-[2px]"></div>
                    <div className="w-full border border-dashed h-[1px]"></div>
                    <div className="h-[25px] w-[25px] bg-white rounded-full absolute right-[-13px] border-l-[2px]"></div>
                  </div>

                  {/* Footer buttons */}
                  <div className="mt-7 flex justify-between">
                    <button className="text-purple-500 bg-purple-100 px-3 py-1 rounded-md text-xs font-medium">
                      Learn from experts
                    </button>
                    <button className="text-blue-600 font-semibold">View details</button>
                  </div>
                </aside>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default EventCard;
