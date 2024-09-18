import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

// Example company logos
const categories = [
  {
    title: "MNCs",
    hiring: "1.9K+ are actively hiring",
    logos: ["/src/assets/company/4467146.gif", "/src/assets/company/4467146.gif", "/src/assets/company/4467146.gif", "/src/assets/company/4467146.gif"],
  },
  {
    title: "Internet",
    hiring: "194 are actively hiring",
    logos: ["/src/assets/company/4467146.gif", "/src/assets/company/4467146.gif", "/src/assets/company/4467146.gif", "/src/assets/company/4467146.gif"],
  },
  {
    title: "Manufacturing",
    hiring: "831 are actively hiring",
    logos: ["/src/assets/company/4467146.gif", "/src/assets/company/4467146.gif", "/src/assets/company/4467146.gif", "/src/assets/company/4467146.gif"],
  },
  {
    title: "Fortune 500",
    hiring: "107 are actively hiring",
    logos: ["/src/assets/company/4467146.gif", "/src/assets/company/4467146.gif", "/src/assets/company/4467146.gif", "/src/assets/company/4467146.gif"],
  },
  {
    title: "Product",
    hiring: "971 are actively hiring",
    logos: ["/src/assets/company/4467146.gif", "/src/assets/company/4467146.gif", "/src/assets/company/4467146.gif"],
  },
];

const CompanyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-8">
      <h2 className="text-center text-2xl font-semibold mb-8">
        Top companies hiring now
      </h2>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="p-4">
            <div className="border rounded-lg p-4 shadow-lg h-full flex flex-col justify-between">
              <div>

                <div className="flex gap-4 items-center">
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>

                  <FaArrowRight/>
                  
                </div>
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
