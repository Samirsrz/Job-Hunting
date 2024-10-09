import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaBriefcase, FaMoneyBillWave, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';


const VeiwCompanyJob = () => {
    let [viewJob, setViewJob] = useState({})
    let { id } = useParams()
    console.log(id);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await axios.get(`${import.meta.env.VITE_API_URL}/company/collection/jobs/${id}`);
                setViewJob(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [id]);

    console.log(viewJob);

    return (
        <section>
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 flex items-center justify-between space-x-6">
                {/* Left Section */}
                <div className="flex flex-row-reverse w-full justify-between">

                    <div className='w-full'>
                        {/* Job title */}
                        <div className='flex justify-between flex-row-reverse w-full'>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Standard_Chartered.svg/800px-Standard_Chartered.svg.png"
                                alt="Company Logo"
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">Relationship Manager</h2>

                                {/* Company name and rating */}
                                <div className="flex items-center text-gray-600 mt-1 space-x-2">
                                    <span>Standard Chartered</span>
                                    <div className="flex items-center">
                                        <FaStar className="text-yellow-400" />
                                        <span className="ml-1">3.8</span>
                                        <span className="ml-1 text-sm text-gray-500">(4168 Reviews)</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Experience, Salary, Location */}
                        <div className="flex text-gray-500 mt-2 space-x-4">
                            <div className="flex items-center">
                                <FaBriefcase className="mr-1" />
                                <span>7 - 12 years</span>
                            </div>
                            <div className="flex items-center">
                                <FaMoneyBillWave className="mr-1" />
                                <span>Not Disclosed</span>
                            </div>

                        </div>

                        <div>
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="mr-1" />
                                <span>Kolkata, Delhi / NCR, Mumbai (All Areas)</span>
                            </div>
                        </div>
                        {/* Posted, Openings, Applicants */}

                        <div className='w-full h-[1px] bg-slate-100 my-5'></div>

                        <div className="flex mt-2 space-x-6">
                            <div className='flex gap-2'>
                                <span><span className='opacity-80'>Posted:  </span> <b>1 day ago </b></span>
                                <span> <span className='opacity-80'>Openings: </span>  <b>5</b></span>
                                <span><span className='opacity-80'> Applicants: </span> <b>271</b> </span>
                            </div>

                            <div className=''>
                                <button className=' border border-blue-700 px-4 py-2 rounded-3xl'>Register to apply</button>
                                <button className='bg-blue-700 text-white rounded-3xl border-none px-4 py-2'>Log in to apply</button>
                            </div>
                        </div>


                    </div>
                </div>

            </div>


            <aside className='mt-9'>

                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
                    <div className="p-4">
                        <h2 className="text-lg font-semibold">Job description</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Mapping experience with good communication skills is what is preferred
                        </p>
                        <div className="mt-4">
                            <div>
                                <span className="font-semibold">Role: </span>
                                SPE
                            </div>
                            <div>
                                <span className="font-semibold">Skill set: </span>
                                Good/ Excellent comms.
                            </div>
                            <div>
                                <span className="font-semibold">Level: </span>
                                SPE
                            </div>
                            <div>
                                <span className="font-semibold">Qualification: </span>
                                Any graduation
                            </div>
                            <div>
                                <span className="font-semibold">Notice: </span>
                                Immediate
                            </div>
                            <div>
                                <span className="font-semibold">Total years of experience: </span>
                                1 to 3 years
                            </div>
                            <div>
                                <span className="font-semibold">Shift: </span>
                                Rotational
                            </div>
                            <div>
                                <span className="font-semibold">Job location: </span>
                                Hyderabad
                            </div>
                            <div>
                                <span className="font-semibold">Work Mode: </span>
                                WFO
                            </div>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-md font-semibold">Interview rounds:</h3>
                            <ul className="list-disc pl-5 mt-1 text-sm text-gray-600">
                                <li>HR Screening</li>
                                <li>Versant voice</li>
                                <li>Ops interview</li>
                            </ul>
                        </div>

                        <div className="mt-4">
                            <div>
                                <span className="font-semibold">Role: </span>
                                Customer Onboarding - Voice / Blended
                            </div>
                            <div>
                                <span className="font-semibold">Industry Type: </span>
                                BPO / Call Centre
                            </div>
                            <div>
                                <span className="font-semibold">Department: </span>
                                Customer Success, Service & Operations
                            </div>
                            <div>
                                <span className="font-semibold">Employment Type: </span>
                                Full Time, Permanent
                            </div>
                            <div>
                                <span className="font-semibold">Role Category: </span>
                                Voice / Blended
                            </div>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-md font-semibold">Education</h3>
                            <p className="text-sm text-gray-600">UG: Any Graduate</p>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-md font-semibold">Key Skills</h3>
                            <p className="text-sm text-gray-600">
                                Skills highlighted with '✨' are preferred keyskills
                            </p>
                            <div className="mt-2 flex flex-wrap gap-2">
                                <span className="bg-gray-200 text-sm font-medium px-3 py-1 rounded-lg">✨ Google Maps</span>
                                <span className="bg-gray-200 text-sm font-medium px-3 py-1 rounded-lg">Mapping</span>
                                <span className="bg-gray-200 text-sm font-medium px-3 py-1 rounded-lg">Immediate joiners</span>
                            </div>
                        </div>

                        <div className="mt-4 flex space-x-4">
                            <a href="#" className="text-blue-500 hover:underline">
                                <img className='w-[30px]' src="/social_icons/icons8-facebook-48.png" alt="Facebook" />
                            </a>
                            <a href="#" className="text-blue-500 hover:underline">
                                <img className='w-[30px]' src="/social_icons/icons8-twitter-48.png" alt="Twitter" />
                            </a>
                            <a href="#" className="text-blue-500 hover:underline">
                                <img className='w-[30px]' src="/social_icons/icons8-linkedin-48.png" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                </div>

            </aside>
        </section>
    );
};

export default VeiwCompanyJob;