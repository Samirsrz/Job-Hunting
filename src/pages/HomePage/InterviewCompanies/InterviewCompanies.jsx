import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import logo from '../../../../src/assets/company/amazon-ot.png'
import interviewPng from '../../../../src/assets/interview/ab-interview-ot-removebg-preview.png'

// import { IoIosArrowForward } from 'react-icons/io';
// Company interview data
const companies = [
    { name: 'Cognizant', interviews: '1.6K+ Interviews', logo: logo },
    { name: 'TCS', interviews: '2.5K+ Interviews', logo: logo },
    { name: 'Byjus', interviews: '816 Interviews', logo: logo },
    { name: 'Amazon', interviews: '1.7K+ Interviews', logo: logo },
    { name: 'Accenture', interviews: '2K+ Interviews', logo: logo },
    { name: 'Flipkart', interviews: '488 Interviews', logo: logo },
];


// Role data
const roles = [
    { title: 'Software Engineer', questions: '7.2K+ questions' },
    { title: 'Business Analyst', questions: '2.8K+ questions' },
    { title: 'Consultant', questions: '2.4K+ questions' },
    { title: 'Financial Analyst', questions: '894 questions' },
    { title: 'Sales & Marketing', questions: '991 questions' },
    { title: 'Quality Engineer', questions: '1.3K+ questions' },
];

const InterviewCompanies = () => {
    return (
        <section className='mt-7 relative bg-gradient-to-r from-orange-100 to-orange-50 rounded-xl flex flex-col lg:flex-row justify-between lg:h-[410px]'>

            <aside className='text-center flex gap-3 flex-col items-center justify-center p-3'>
                <img  src={interviewPng} className='bg-transparent w-[270px]' alt="" />
                <h1 className='font-bold text-2xl'>Prepare for your <br/> next interview</h1>
            </aside>

            <aside className='w-full lg:w-[70%] flex flex-col lg:flex-row gap-3 lg:absolute top-[-19px] right-3 bottom-[-19px] mt-1 mr-7'>
                <div className="p-6 bg-white rounded-lg shadow-lg lg:h-[440px] flex flex-col justify-between">
                    <h2 className="text-xl font-semibold mb-4 text-center lg:text-balance">Interview questions by company</h2>

                    {/* Company cards container */}
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 ">
                        {companies.map((company, index) => (
                            <div key={index} className="px-4 py-2 border rounded-lg flex justify-between items-center shadow-sm hover:shadow-lg transition-shadow duration-200">
                                <div className="flex items-center space-x-4">
                                    {/* Company logo */}
                                    <img src={company.logo} alt={company.name} className="w-10 h-10 object-contain" />

                                    {/* Company name and interviews */}
                                    <div className=''>
                                        <h3 className="font-medium text-lg">{company.name}</h3>
                                        <p className="text-gray-500">{company.interviews}</p>
                                    </div>
                                </div>

                                {/* Forward arrow */}
                                <IoIosArrowForward className="text-gray-500" />
                            </div>
                        ))}
                    </div>

                    {/* View all companies link */}
                    <div className="mt-4 text-right">
                        <a href="#" className="text-blue-600 font-semibold">
                            View all companies <IoIosArrowForward className="inline-block" />
                        </a>
                    </div>
                </div>

                <div className='lg:h-[440px] mb-3 lg:mb-0 '>
                    <div className="p-6 bg-white rounded-lg shadow-lg w-full lg:w-80 lg:h-full  flex flex-col justify-between">
                        <h2 className="text-xl font-semibold mb-4">Interview questions by role</h2>

                        <div className="space-y-4">
                            {roles.map((role, index) => (
                                <div key={index} className="flex justify-between items-center">
                                    <div className='flex gap-2 items-center border-b-2 pb-2 border-gray-100'>
                                        <h3 className="font-medium text-lg">{role.title}</h3>
                                        <p className="text-gray-500 text-sm">{role.questions}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 text-right">
                            <a href="#" className="text-blue-600 font-semibold text-sm">
                                View all roles <IoIosArrowForward className="inline-block" />
                            </a>
                        </div>
                    </div>


                </div>
            </aside>

        </section>
    );
};

export default InterviewCompanies;
