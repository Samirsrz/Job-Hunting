// import React from 'react';
// import Slider from "react-slick";
// import { FaUserAlt } from 'react-icons/fa';
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
// import { BsBriefcaseFill } from 'react-icons/bs'; // Job Offer icon
// import { MdOutlineLiveTv } from 'react-icons/md'; // Webinar Icon

// const UpcomingEvents = () => {
//   const events = [
//     {
//       id: 1,
//       companyLogo: '/mnt/data/bl.PNG', // Example: Your uploaded image
//       title: 'Hiring Challenge for SAP-SD',
//       company: 'Wipro',
//       tags: ['SAP', 'SAP SD', 'IDOCS', 'User Exits'],
//       date: '19 Sep, 11:30 AM',
//       enrolled: 2000,
//       type: 'Hiring challenge',
//       closesIn: '5d',
//       isJobOffer: true
//     },
//     {
//       id: 2,
//       companyLogo: '/mnt/data/bl.PNG',
//       title: 'Switch from service to product-based MAANG companies',
//       company: 'Coding Ninjas',
//       tags: ['Webinar'],
//       date: '24 Sep, 7:30 PM',
//       enrolled: 438,
//       type: 'Webinar',
//       closesIn: '1d',
//       isJobOffer: false
//     },
//     // Add more events as needed
//   ];

//   // Custom Arrows
//   const PrevArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <button className="absolute left-0 z-10 -ml-8 bg-white border rounded-full p-2 shadow-md" onClick={onClick}>
//         <FiChevronLeft size={20} />
//       </button>
//     );
//   };

//   const NextArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <button className="absolute right-0 z-10 -mr-8 bg-white border rounded-full p-2 shadow-md" onClick={onClick}>
//         <FiChevronRight size={20} />
//       </button>
//     );
//   };

//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1
//         }
//       }
//     ]
//   };

//   return (
//     <section className="mt-8">
//       <h2 className="text-2xl font-bold mb-6">Upcoming events and challenges</h2>

//       <div className="flex gap-6">
//         {/* Left illustration */}
//         <div className="flex-shrink-0">
//           <img src="/path/to/illustration.png" alt="Illustration" className="w-40" />
//         </div>

//         {/* Event slider */}
//         <Slider {...settings} className="relative flex-grow">
//           {events.map(event => (
//             <div key={event.id} className="p-4">
//               <div className="border rounded-lg shadow-lg p-4">
//                 <div className="flex items-center justify-between mb-2">
//                   {/* Event Closes In */}
//                   <span className="text-xs text-red-500 font-bold">Entry closes in {event.closesIn}</span>
//                   {/* Event Type */}
//                   <span className="bg-purple-100 text-purple-700 text-xs rounded-full px-3 py-1">{event.type}</span>
//                 </div>

//                 {/* Event Image */}
//                 <img src={event.companyLogo} alt={event.company} className="w-full h-40 object-cover rounded-lg mb-4" />

//                 {/* Event Details */}
//                 <h3 className="font-bold text-lg">{event.title}</h3>
//                 <p className="text-sm text-gray-600">{event.company}</p>

//                 {/* Tags */}
//                 <div className="flex gap-2 flex-wrap mt-2 mb-4">
//                   {event.tags.map((tag, index) => (
//                     <span key={index} className="bg-gray-100 text-gray-600 text-xs rounded-full px-3 py-1">{tag}</span>
//                   ))}
//                 </div>

//                 {/* Date and Enrollment */}
//                 <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
//                   <div className="flex items-center gap-1">
//                     <span>{event.date}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <FaUserAlt size={12} />
//                     <span>{event.enrolled} Enrolled</span>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex justify-between items-center">
//                   {event.isJobOffer ? (
//                     <button className="flex items-center text-purple-600 font-semibold text-sm">
//                       <BsBriefcaseFill className="mr-2" />
//                       Job offer
//                     </button>
//                   ) : (
//                     <button className="flex items-center text-purple-600 font-semibold text-sm">
//                       <MdOutlineLiveTv className="mr-2" />
//                       Learn from experts
//                     </button>
//                   )}
//                   <button className="text-blue-600 font-semibold text-sm">View details</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default UpcomingEvents;














import React from "react";
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";
import eventImage from '../../../../src/assets/events/eventsBannerFallback_1.png'
import eventCompany from '../../../../src/assets/company/ll.gif'
const EventCard = () => {
  return (
    <div className="w-[330px] p-4 bg-white rounded-xl relative border-[2px]">
      {/* Upper part with event details */}
      <div className="relative">
        <img
          src={eventImage} // Add your image path here
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
          <img src={eventCompany} alt="" />
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
    </div>
  );
};

export default EventCard;
