import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import logo from "../../../../public/company/838020_file.svg";
import { useTranslation } from "react-i18next";
import { useGetSponsoredCompaniesQuery } from "../../../RTK/Api/SponsoredCompaniesApi/SponsoredCompaniesApi";

const SponsoredCompanies = () => {
  const { t } = useTranslation();
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
    "Professional Services",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const {
    data: companies = [],
    error,
    isLoading,
  } = useGetSponsoredCompaniesQuery(activeCategory);

  // console.log('compamy', companies);

  const CustomPrevArrow = (props) => {
    const { onClick, currentSlide } = props;
    const showArrow = currentSlide > 0 && companies.length > 4;
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
    const showArrow = currentSlide < slideCount - 4 && slideCount > 4;
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
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // For large screens and above
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768, // For medium screens
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
          slidesToScroll: 2,
          rows: 1, // Display only 1 row for better layout
        },
      },
      {
        breakpoint: 480, // For small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading companies.</div>;
  }

  return (
    <section className="mt-16 relative">
      <h1 className="font-bold text-center text-3xl my-8">
        {t("Sponsoredcompanies")}
      </h1>
      <div id="btns" className="flex flex-wrap gap-3 justify-center">
        {categories.map((category, index) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`rounded-3xl border border-black px-4 py-1 transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-transparent text-black"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Conditional rendering based on the number of companies */}
      {companies.length <= 8 ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-7 mx-auto max-w-7xl">
          {companies.map((company, index) => (
            <div key={index} className="p-3">
              <div className="shadow-lg rounded-xl p-4 text-center flex flex-col gap-3 items-center border border-gray-200">
                <div className="flex justify-center mb-2">
                  <img
                    src={company.logo || logo}
                    alt={company.companyName}
                    className="w-16 h-16"
                  />
                </div>

                <div className="text-center flex flex-col gap-3 items-center h-[164px] overflow-hidden">
                  <h1 className="text-lg font-semibold">
                    {company.companyName}
                  </h1>
                  <div className="flex items-center gap-1 text-gray-600 text-sm">
                    <FaStar className="text-yellow-400" />
                    <span className="font-semibold">{company.rating}</span>
                    <span>|</span>
                    <span>{company.reviews} reviews</span>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center mt-2">
                    {company.tags.map((cat, i) => (
                      <button
                        key={i}
                        className="px-2 py-1 text-xs rounded-3xl border border-gray-300"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Slider {...settings} className="mt-7">
          {companies.map((company, index) => (
            <div key={index} className="p-3 h-full">
              <div className="h-full shadow-lg rounded-xl p-4 text-center flex flex-col gap-3 items-center border border-gray-200">
                <div className="flex justify-center mb-2">
                  <img
                    src={company.logo || logo}
                    alt={company.companyName}
                    className="w-16 h-16"
                  />
                </div>

                <div className="text-center flex flex-col gap-3 items-center h-[164px] overflow-hidden">
                  <h1 className="text-lg font-semibold">
                    {company.companyName}
                  </h1>
                  <div className="flex items-center gap-1 text-gray-600 text-sm">
                    <FaStar className="text-yellow-400" />
                    <span className="font-semibold">{company.rating}</span>
                    <span>|</span>
                    <span>{company.reviews} reviews</span>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center mt-2">
                    {company.tags.map((cat, i) => (
                      <button
                        key={i}
                        className="px-2 py-1 text-xs rounded-3xl border border-gray-300"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
};

export default SponsoredCompanies;
