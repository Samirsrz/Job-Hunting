

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import DepartmentsHiring from './DepartmentsHiring/DepartmentsHiring';
import StandardCharteredJobs from './StandardCharteredJobs/StandardCharteredJobs';
import company from "../../../src/assets/company/standard-chartered_1920x534.jpg"
import logoCompany from'../../../src/assets/company/32270.gif'
const ViewAllJobsCompany = () => {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState('jobs'); // Default is 'jobs'

    // Function to change active tab
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className="w-full font-sans">
            {/* Background Section */}
            <div className="relative text-left">
                <img src={company} alt="Optum Header" className="w-full h-auto" />

                {/* Company Info */}
                <div className="flex flex-col lg:flex-row p-6 bg-white rounded-lg shadow-lg relative md:-top-12">

                    {/* Company Logo */}
                    <img
                        src={logoCompany}
                        alt="Company Logo"
                        className="w-[100px] h-20 rounded-2xl mr-6 mt-[-60px]"
                    />

                    {/* Company Details */}
                    <div className="flex-grow">
                        <div className='flex gap-3 items-center'>
                            <h2 className="text-2xl font-bold text-orange-600">Standard Chartered</h2>
                            <span className="text-lg flex items-center gap-2"><FaStar className='text-yellow-400' /> 4.0 (3.6K reviews)</span>
                        </div>
                        <div>
                            <p>Here for good </p>
                            <div className='space-x-1'>
                                <button className='px-2 py-1 text-xs rounded-3xl border border-gray-300'>Banking</button>
                                <button className='px-2 py-1 text-xs rounded-3xl border border-gray-300'>Financial Services</button>
                                <button className='px-2 py-1 text-xs rounded-3xl border border-gray-300'>NGO / Social Services / Industry Associations</button><br />
                                <button className='px-2 py-1 text-xs rounded-3xl border border-gray-300'>Analytics / KPO / Research</button>
                                <button className='px-2 py-1 text-xs rounded-3xl border border-gray-300'>IT Services & Consulting</button>
                                <button className='px-2 py-1 text-xs rounded-3xl border border-gray-300'>Private</button>
                                <button className='px-2 py-1 text-xs rounded-3xl border border-gray-300'>Foreign MNC</button>
                                <button className='px-2 py-1 text-xs rounded-3xl border border-gray-300'>B2C</button>
                            </div>
                        </div>
                    </div>

                    {/* Follow Button */}
                    <div className="text-right flex gap-4 items-center">
                        <span className="block text-gray-600">60.4K followers</span>
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">+ Follow</button>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <aside className=' max-w-6xl mx-auto mt-5'>
                <div className='text-gray-500 flex gap-7 border-b-2 '>
                    <p 
                        className={`cursor-pointer ${activeTab === 'overview' ? 'text-blue-600 border-b-2 pb-2 border-blue-600' : ''}`} 
                        onClick={() => handleTabChange('overview')}
                    >
                        Overview
                    </p>
                    <p 
                        className={`cursor-pointer ${activeTab === 'whyjoinus' ? 'text-blue-600 border-b-2 pb-2 border-blue-600' : ''}`} 
                        onClick={() => handleTabChange('whyjoinus')}
                    >
                        Why Join Us
                    </p>
                    <p 
                        className={`cursor-pointer ${activeTab === 'jobs' ? 'text-blue-600 border-b-2 pb-2 border-blue-600' : ''}`} 
                        onClick={() => handleTabChange('jobs')}
                    >
                        Jobs
                    </p>
                </div>

                {/* Tab Content */}
                <div className='mt-7'>
                    {activeTab === 'overview' && (
                        <div>
                            {/* Overview Data */}
                            <h2 className="text-xl font-semibold">Company Overview</h2>
                            <p>
                                Standard Chartered is a leading international banking group with a history of over 160 years.
                                Our purpose is to drive commerce and prosperity through our unique diversity.
                            </p>
                        </div>
                    )}

                    {activeTab === 'whyjoinus' && (
                        <div>
                            {/* Why Join Us Data */}
                            <h2 className="text-xl font-semibold">Why Join Us</h2>
                            <p>
                                We believe in building a culture of inclusion where everyone feels that they belong and can maximize their potential.
                            </p>
                        </div>
                    )}

                    {activeTab === 'jobs' && (
                        <div>
                            {/* Jobs Section */}
                            <DepartmentsHiring />
                            <StandardCharteredJobs />
                        </div>
                    )}
                </div>
            </aside>
            {/* <FilterComponent/> */}
        </section>
    );
};

export default ViewAllJobsCompany;
