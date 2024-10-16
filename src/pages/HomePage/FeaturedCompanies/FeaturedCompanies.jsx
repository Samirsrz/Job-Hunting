



// /* eslint-disable react/prop-types */
// import Slider from "react-slick";
// import { useState } from "react";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { useGetFeaturedJobsQuery } from "../../../RTK/Api/FeaturedJobsApi/FeaturedJobsApi";
// import { Blocks } from "react-loader-spinner";
// import CommonJobCard from "../../CommonJobCard/CommonJobCard";


// // Custom Arrow Components
// const NextArrow = ({ onClick, isVisible }) => {
//   return isVisible ? (
//     <div
//       className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
//       onClick={onClick}
//     >
//       <IoIosArrowForward size={24} />
//     </div>
//   ) : null; // Hide the arrow if not visible
// };

// const PrevArrow = ({ onClick, isVisible }) => {
//   return isVisible ? (
//     <div
//       className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
//       onClick={onClick}
//     >
//       <IoIosArrowBack size={24} />
//     </div>
//   ) : null;
// };

// const FeaturedCompanies = () => {
//   let { data: featuredJobs, isError, error, isLoading } = useGetFeaturedJobsQuery()
//   //console.log(error);
//   const { t } = useTranslation();
//   const [currentSlide, setCurrentSlide] = useState(0); //


//   //console.log(featuredJobs);

//   const settings = {
//     // dots: true,
//     infinite: false, // s
//     speed: 500,
//     slidesToShow: 4.5,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow isVisible={currentSlide < featuredJobs?.length - 4.5} />,
//     prevArrow: <PrevArrow isVisible={currentSlide > 0} />,
//     beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3.5,
//           slidesToScroll: 1,
//           infinite: false,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2.5,
//           slidesToScroll: 1,
//           infinite: false,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1.5,
//           slidesToScroll: 1,
//           infinite: false,
//         },
//       },
//     ],
//   };

//   if (isLoading) {
//     return <div className="flex justify-center"> <Blocks
//       height="80"
//       width="80"
//       color="#4fa94d"
//       ariaLabel="blocks-loading"
//       wrapperStyle={{}}
//       wrapperClass="blocks-wrapper"
//       visible={true}
//     /></div>
//   }

//   if (isError) {
//     return <h1>somethin went wrong</h1>
//   }

//   console.log(featuredJobs);


//   return (
//     <section>
//       <div>
//         <h1 className="font-bold text-center text-3xl mb-3">
//           {t("Featuredcompaniesactivelyhiring")}{" "}
//         </h1>
//         <div id="btns" className="flex justify-center space-x-4 mb-8">
//           <button className="border rounded-3xl px-4 py-2 hover:shadow-lg duration-150">
//             All
//           </button>
//           <button className="border rounded-3xl px-4 py-2 hover:shadow-lg duration-150">
//             IT services
//           </button>
//           <button className="border rounded-3xl px-4 py-2 hover:shadow-lg duration-150">
//             BSFI
//           </button>
//         </div>
//       </div>

//       <div className="relative ">
//         <Slider {...settings}>
//           {featuredJobs?.length > 0 && featuredJobs.map((card, index) => (
//             <CommonJobCard key={index} card={card}/>
//           ))}
//         </Slider>
//       </div>
//       <div className="text-center" id="view all companies button">
//         <div>
//           <Link to={'/view-all-companies'}>        
//            <button className="border hover:shadow-md hover:shadow-blue-700 duration-300 border-blue-600 px-4 py-2 rounded-3xl text-blue-600 font-semibold">
//             View all companies
//           </button>
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FeaturedCompanies;













// /* eslint-disable react/prop-types */
// import Slider from "react-slick";
// import { useState } from "react";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { useGetFeaturedJobsQuery } from "../../../RTK/Api/FeaturedJobsApi/FeaturedJobsApi";
// import { Blocks } from "react-loader-spinner";
// import CommonJobCard from "../../CommonJobCard/CommonJobCard";

// // Custom Arrow Components
// const NextArrow = ({ onClick, isVisible }) => {
//   return isVisible ? (
//     <div
//       className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
//       onClick={onClick}
//     >
//       <IoIosArrowForward size={24} />
//     </div>
//   ) : null; // Hide the arrow if not visible
// };

// const PrevArrow = ({ onClick, isVisible }) => {
//   return isVisible ? (
//     <div
//       className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
//       onClick={onClick}
//     >
//       <IoIosArrowBack size={24} />
//     </div>
//   ) : null;
// };

// const FeaturedCompanies = () => {
//   let { data: featuredJobs, isError, error, isLoading } = useGetFeaturedJobsQuery();
//   const { t } = useTranslation();
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [selectedCategory, setSelectedCategory] = useState("All"); // Default selection

//   const settings = {
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4.5,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow isVisible={currentSlide < featuredJobs?.length - 4.5} />,
//     prevArrow: <PrevArrow isVisible={currentSlide > 0} />,
//     beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3.5,
//           slidesToScroll: 1,
//           infinite: false,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2.5,
//           slidesToScroll: 1,
//           infinite: false,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1.5,
//           slidesToScroll: 1,
//           infinite: false,
//         },
//       },
//     ],
//   };

//   if (isLoading) {
//     return (
//       <div className="flex justify-center">
//         <Blocks
//           height="80"
//           width="80"
//           color="#4fa94d"
//           ariaLabel="blocks-loading"
//           wrapperStyle={{}}
//           wrapperClass="blocks-wrapper"
//           visible={true}
//         />
//       </div>
//     );
//   }

//   if (isError) {
//     return <h1>Something went wrong</h1>;
//   }

//   console.log(featuredJobs);

//   return (
//     <section>
//       <div>
//         <h1 className="font-bold text-center text-3xl mb-3">
//           {t("Featuredcompaniesactivelyhiring")}{" "}
//         </h1>
//         <div id="btns" className="flex justify-center space-x-4 mb-8">
//           {["All", "IT services", "BSFI"].map((category) => (
//             <button
//               key={category}
//               className={`border rounded-3xl px-4 py-2 hover:shadow-lg duration-150 ${
//                 selectedCategory === category
//                   ? "bg-blue-600 text-white"
//                   : ""
//               }`}
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="relative">
//         <Slider {...settings}>
//           {featuredJobs?.length > 0 &&
//             featuredJobs.map((card, index) => (
//               <CommonJobCard key={index} card={card} />
//             ))}
//         </Slider>
//       </div>
//       <div className="text-center" id="view all companies button">
//         <div>
//           <Link to={'/view-all-companies'}>
//             <button className="border hover:shadow-md hover:shadow-blue-700 duration-300 border-blue-600 px-4 py-2 rounded-3xl text-blue-600 font-semibold">
//               View all companies
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedCompanies;





import Slider from "react-slick";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetFeaturedJobsQuery } from "../../../RTK/Api/FeaturedJobsApi/FeaturedJobsApi";
import { Blocks } from "react-loader-spinner";
import CommonJobCard from "../../CommonJobCard/CommonJobCard";

// Custom Arrow Components
const NextArrow = ({ onClick, isVisible }) => (
  isVisible ? (
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300" onClick={onClick}>
      <IoIosArrowForward size={24} />
    </div>
  ) : null
);

const PrevArrow = ({ onClick, isVisible }) => (
  isVisible ? (
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300" onClick={onClick}>
      <IoIosArrowBack size={24} />
    </div>
  ) : null
);

const FeaturedCompanies = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { data: featuredJobs, isError, isLoading } = useGetFeaturedJobsQuery(selectedCategory);
console.log(featuredJobs);
console.log(selectedCategory);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    nextArrow: <NextArrow isVisible={currentSlide < featuredJobs?.length - 4.5} />,
    prevArrow: <PrevArrow isVisible={currentSlide > 0} />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3.5, slidesToScroll: 1, infinite: false } },
      { breakpoint: 768, settings: { slidesToShow: 2.5, slidesToScroll: 1, infinite: false } },
      { breakpoint: 600, settings: { slidesToShow: 1.5, slidesToScroll: 1, infinite: false } },
    ],
  };

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Blocks height="80" width="80" color="#4fa94d" ariaLabel="blocks-loading" />
      </div>
    );
  }

  if (isError) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <section>
      <div>
        <h1 className="font-bold text-center text-3xl mb-3">{t("Featuredcompaniesactivelyhiring")}</h1>
        <div id="btns" className="flex justify-center space-x-4 mb-8">
          {["All", "IT Services", "Technology"].map((category) => (
            <button
              key={category}
              className={`border rounded-3xl px-4 py-2 hover:shadow-lg duration-150 ${selectedCategory === category ? "bg-blue-600 text-white" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <Slider {...settings}>
          {featuredJobs?.length > 0 && featuredJobs.map((card, index) => (
            <CommonJobCard key={index} card={card} />
          ))}
        </Slider>
      </div>

      <div className="text-center">
        <Link to={'/view-all-companies'}>
          <button className="border hover:shadow-md hover:shadow-blue-700 duration-300 border-blue-600 px-4 py-2 rounded-3xl text-blue-600 font-semibold">
            View all companies
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedCompanies;
