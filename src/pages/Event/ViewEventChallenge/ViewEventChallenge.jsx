// const HiringChallengeBanner = () => {
//   return (
//     <div
//       className="relative bg-gray-800 text-white p-6"
//       style={{
//         backgroundImage: "url(https://do-hackathon-company-assets-prod.s3.ap-southeast-1.amazonaws.com/tavant/contest_banner_1536.png)",
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black opacity-50"></div>

//       {/* Content */}
//       <div className="relative max-w-4xl mx-auto">
//         <div className="bg-yellow-500 text-black inline-block px-3 py-1 rounded-full mb-4">
//           Hiring challenge
//         </div>
//         <h1 className="text-3xl font-bold mb-4">Hiring Challenge for Senior Salesforce Developer</h1>
//         <div className="flex items-center mb-4">
//           <div className="bg-gray-700 p-3 rounded-full">
//             <img
//               src="https://do-hackathon-company-assets-prod.s3.ap-southeast-1.amazonaws.com/tavant/contest_banner_1536.png"
//               alt="Tavant Technologies"
//               className="w-10 h-10"
//             />
//           </div>
//           <div className="ml-4">
//             <p className="text-lg">Tavant Technologies</p>
//           </div>
//         </div>
//         <div className="flex flex-wrap gap-2 mb-4">
//           <span className="bg-gray-700 px-3 py-1 rounded-full">Triggers</span>
//           <span className="bg-gray-700 px-3 py-1 rounded-full">Salesforce</span>
//           <span className="bg-gray-700 px-3 py-1 rounded-full">Salesforce CRM</span>
//           <span className="bg-gray-700 px-3 py-1 rounded-full">Salesforce Marketing Cloud</span>
//           <span className="bg-gray-700 px-3 py-1 rounded-full">Salesforce CPQ</span>
//         </div>
//         <div className="flex items-center justify-between mb-4">
//           <p>22 Oct, 12:33 pm - 28 Oct, 12:25 am</p>
//           <p>565 Enrolled</p>
//         </div>
//         <div className="text-right">
//           <p className="text-sm">
//             Powered By <span className="text-green-500">doselect</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HiringChallengeBanner;















import ReactMarkdown from 'react-markdown';
import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaXing, FaLinkedinIn, FaBriefcase, FaFacebook } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useGetEventByIdQuery } from '../../../RTK/Api/FeaturedJobsApi/FeaturedJobsApi';

const ViewEventChallenge = () => {

  let {id}=useParams()
  console.log(id);

  let {data:event,error,isLoading}=useGetEventByIdQuery(id)
  console.log(event);

  if (isLoading) {
    return <h1>Loading.....</h1>
  }
  
  return (
    <section>
      <div
        className="relative bg-gray-800 text-white p-6"
        style={{
          backgroundImage: `url(${event.coverPhoto})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-yellow-500 text-black inline-block px-3 py-1 rounded-full mb-4">
            Hiring challenge
          </div>
          <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
          <div className="flex items-center mb-4">
            <div className="bg-gray-700 p-3 rounded-full">
              <img
                src={event.logo}
                alt="Tavant Technologies"
                className="w-10 h-10"
              />
            </div>
            <div className="ml-4">
              <p className="text-lg">{event.companyName}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-700 px-3 py-1 rounded-full">Triggers</span>
            <span className="bg-gray-700 px-3 py-1 rounded-full">Salesforce</span>
            <span className="bg-gray-700 px-3 py-1 rounded-full">Salesforce CRM</span>
            <span className="bg-gray-700 px-3 py-1 rounded-full">Salesforce Marketing Cloud</span>
            <span className="bg-gray-700 px-3 py-1 rounded-full">Salesforce CPQ</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <p>22 Oct, 12:33 pm - 28 Oct, 12:25 am</p>
            <p>{event.enrolled} Enrolled</p>
          </div>
          <div className="text-right">
            <p className="text-sm">
              Powered By <span className="text-green-500">doselect</span>
            </p>
          </div>
        </div>
      </div>








      <nav className="flex items-center justify-between p-4 bg-white shadow-md flex-wrap lg:gap-0 gap-7">
        <div className="flex space-x-4">
          <a href="#about" id='#about' className="text-gray-700 hover:text-red-500 hover:underline">About</a>
          <a href="#Rewards" className="text-gray-700 hover:text-red-500 hover:underline">Rewards</a>
          <a href="#organize" className="text-gray-700 hover:text-red-500 hover:underline">Organizer</a>
        </div>

        <div className='flex items-center gap-2'>
          <h1 id='about'>Entry closes in 6d</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
            Get Software
          </button>
        </div>

      </nav>


      <aside>
        <div className=" bg-gray-100 ">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            
          

            <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
            <p className="mb-4">
              Tavant Technologies is seeking talented Salesforce Senior Software Engineers to join their team. If you are a Salesforce developer, this is an excellent opportunity to prove your SFDC expertise.
            </p>
            <h2 className="text-xl font-semibold mb-2">Steps in the Hiring Challenge:</h2>
            <ul className="list-disc list-inside mb-4">
              <li>Register for the Hiring Challenge through this page.</li>
              <li>You will receive an email with a test link before the challenge starts on 21st October 2024.</li>
              <li>You can start this challenge anytime between 21st October, 11:00 AM IST, and 27th October, 11:59 PM IST.</li>
              <li>If you perform well, Tavant's team will contact you for the next rounds.</li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">Rules to follow:</h2>
            <p>You will get a link in your email to start the challenge.</p>
          </div>
        </div>

        {/* rewards */}

        <div id='Rewards' className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <div className="bg-yellow-400 p-2 rounded-full">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m0 0a9 9 0 11-4-4 9 9 0 014 4z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold ml-3">Here's what you can win!</h2>
          </div>
          <p className="text-gray-700">
            You have the opportunity to join Tavant Technologies as a Senior Salesforce Developer by taking part in this challenge. In this role, you will be instrumental in designing, developing, and deploying software applications.
          </p>
        </div>


        {/* eligibility */}

        <div className=" p-6 bg-white shadow-md rounded-lg">
          
          <h1 className="text-2xl font-bold mb-4">Eligibility Criteria</h1>
          <p className="mb-4">You should register for this Contest if:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Minimum 3 years of hands-on experience in Trigger, Apex, Visualforce, and web services (both SOAP and REST), as well as Salesforce.com configuration.</li>
            <li>Salesforce Lightning. Extensive experience developing Lightning Components - both within the Salesforce Lightning Design System and by writing custom Lightning Components in JavaScript within the Aura framework.</li>
            <li>Working knowledge on force.com sites will be an advantage, Force.com Migration Tool, Web Services/SOA & Metadata APIs.</li>
            <li>Salesforce.com Development, Administration and Operational Support required.</li>
            <li>Web development skills including JSON, XML, HTML, CSS, JavaScript Scripting Languages, DHTML, SOAP, and AJAX.</li>
            <li>Strong SDLC & Quality process experience Salesforce.com Certified Force.com Developer.</li>
            <li>Minimum of 3 years hands-on experience in Salesforce Application Development.</li>
            <li>Lightning (AURA and LWC Project experience).</li>
            <li>Integration (at least in REST API) experience in Projects, experience in developing custom Apex Classes and Apex Triggers.</li>
            <li>Sales Cloud/Service Cloud/Community cloud experience (exposure).</li>
            <li>Good communication skills.</li>
            <li>Good attitude towards upskilling in new areas of SF platform.</li>
          </ul>
        </div>

        {/* last part */}

        <div id='organize' className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-2">{event.companyName}</h1>
      <div className="flex items-center mb-4">
        <span className="text-yellow-500">★ ★ ★ ★ ☆</span>
        <span className="ml-2 text-gray-600">(3.9 based on 954 reviews)</span>
      </div>
      <p className="text-gray-700 mb-4">
        Tavant Technologies is a digital products and solutions company providing impactful results to its customers across a wide range of industries such as Consumer Lending, Aftermarket, Media & Entertainment, and Retail in North America, Europe, and Asia-Pacific. Our solutions, powered by Artificial Intelligence and Machine Learning algorithms, help improve operational efficiency, productivity, speed, and accuracy in the interconnected world.
      </p>
      <a href="#" className="text-blue-500 hover:underline">Read more</a>
      <div className="mt-4">
        <p><strong>Founded:</strong> 2000 (24 yrs old)</p>
        <p><strong>Company Size:</strong> 1001-5000 employees</p>
        <p><strong>Industry:</strong> IT Services & Consulting</p>
        <p><strong>Type:</strong> Private</p>
        <p><strong>Contact:</strong> <a href="mailto:support@doselect.com" className="text-blue-500 hover:underline">support@doselect.com</a></p>
      </div>
    </div>


      </aside>


      <aside>
      <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Share the contest</h2>
        <div className="flex space-x-4">
          <FaFacebook className="text-blue-600 cursor-pointer" />
          <FaTwitter className="text-blue-400 cursor-pointer" />
          <FaXing className="text-gray-600 cursor-pointer" />
          <FaLinkedinIn className="text-blue-700 cursor-pointer" />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Hiring now</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 p-2 rounded-full">
                <FaBriefcase className="text-gray-800" />
              </div>
              <div>
                <p className="font-medium">Data Vault Engineer | Ta...</p>
                <p className="text-sm text-gray-600">10-20 years</p>
                <p className="text-sm text-gray-600">Hybrid - Bengaluru, Hy...</p>
              </div>
            </div>
            <span className="text-sm text-blue-600">Opportunity | Engineering Manager | T...</span>
          </div>

          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 p-2 rounded-full">
                <FaBriefcase className="text-gray-800" />
              </div>
              <div>
                <p className="font-medium">Engineering Manager | T...</p>
                <p className="text-sm text-gray-600">10-20 years</p>
                <p className="text-sm text-gray-600">Hybrid - Bengaluru, Hy...</p>
              </div>
            </div>
            <span className="text-sm text-blue-600">Opportunity | Engineering Manager | T...</span>
          </div>
        </div>
      </div>

      <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg">View all openings</button>
    </div>
      </aside>
    </section>

  );
};

export default ViewEventChallenge;






// import React, { useState, useEffect } from "react";

// const ViewEventChallenge = ({ id }) => {
//   const [challenge, setChallenge] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`/eventChallenge/${id}.json`);
        
//         if (!response.ok) {
//           throw new Error(`Failed to fetch: ${response.statusText}`);
//         }
        
//         const data = await response.json();
//         setChallenge(data);
//       } catch (err) {
//         setError(err.message);
//         console.error("Error fetching event challenge:", err);
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!challenge) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="event-challenge">
//       <img src={challenge.logo} alt={`${challenge.companyName} logo`} />
//       <img src={challenge.coverPhoto} alt={`${challenge.companyName} cover`} />
//       <h1>{challenge.title}</h1>
//       <p>{challenge.about}</p>
//       <p>Time: {challenge.time}</p>
//       <p>Date: {challenge.date}</p>
//       <p>Enrolled: {challenge.enrolled}</p>
//       <p>Criteria: {challenge.Criteria}</p>
//       <p>Industry: {challenge.Industry}</p>
//       <p>Company Type: {challenge.CompanyType}</p>
//       <p>Tags: {challenge.tags.join(", ")}</p>
//       <p>Reviews: {challenge.reviews}</p>
//       <p>Ratings: {challenge.ratings}</p>
//     </div>
//   );
// };

// export default ViewEventChallenge;
