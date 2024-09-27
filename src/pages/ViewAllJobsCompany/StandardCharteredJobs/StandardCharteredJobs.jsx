






import  { useState } from 'react';
import { FaRegBookmark, FaMapMarkerAlt, FaBriefcase, FaRupeeSign, FaStar } from 'react-icons/fa'; // Importing icons
import { AiFillStar } from 'react-icons/ai'; // Rating star icon
import { MdOutlineContactPage } from "react-icons/md";
import companyLogo from '../../../../src/assets/company/32270.gif'
import { Link } from 'react-router-dom';
import FilterComponent from '../FilterComponent/FilterComponent';
import LocationFilterComponent from '../LocationFilterComponent/LocationFilterComponent';
import ExperienceSlider from '../ExperienceSlider/ExperienceSlider';
import { IoIosArrowDown } from "react-icons/io";


const StandardCharteredJobs = () => {
    const [btnDrop, setBtnDrop] = useState(''); // Store selected button
    const [toggle, setToggle] = useState(false); // Handle toggle visibility

    // Handle toggle function
    const handleToggle = (e) => {
        const selectedButton = e.target.innerText; // Get button text
        // Toggle visibility if the same button is clicked again
        if (btnDrop === selectedButton && toggle) {
            setToggle(false);
        } else {
            setBtnDrop(selectedButton);
            setToggle(true);
        }
    };

    return (
        <section>
            <aside className='relative my-3'>
                <div id='btns for dropdown' className='flex gap-3 flex-wrap'>
                    <button
                        className='px-4 py-2 rounded-3xl border border-black flex items-center gap-1'
                        onClick={handleToggle}>
                        Department
                        <IoIosArrowDown/>
                    </button>
                    <button
                        className='px-4 py-2 rounded-3xl border border-black flex items-center gap-1'
                        onClick={handleToggle}>
                        Location
                        <IoIosArrowDown/>
                    </button>
                    <button
                        className='px-4 py-2 rounded-3xl border border-black flex items-center gap-1'
                        onClick={handleToggle}>

                        Experience
                        <IoIosArrowDown/>

                    </button>
                </div>

                {/* Conditional rendering based on button clicked */}
                {toggle && btnDrop === 'Department' && (

                    <div className='absolute z-10'>
                        <FilterComponent btnDrop={btnDrop} setBtnDrop={setBtnDrop} />
                    </div>
                )}
                {toggle && btnDrop === 'Location' && (
                    <div className='absolute z-10'>
                        <LocationFilterComponent />
                    </div>
                )}
                {toggle && btnDrop === 'Experience' && (
                    <div className='absolute z-10'>
                        <ExperienceSlider />
                    </div>
                )}
            </aside>

            <section className='grid grid-cols-1 xl:grid-cols-[700px_400px] gap-4'>
                <aside className=''>
                    {/* Job card */}
                    <div className="bg-white shadow-md rounded-lg p-5 flex flex-col justify-between ">
                        <div className="flex justify-between flex-col-reverse lg:flex-row">
                            <div>
                                <h2 className="text-3xl md:text-xl font-semibold text-gray-800">Relationship Manager - NRI</h2>
                                <div className="text-sm text-gray-600 flex items-center gap-1">
                                    <span>Standard Chartered</span>
                                    <AiFillStar className="text-yellow-400" />
                                    <span>3.8</span>
                                    <span className="text-gray-500">(4.1K Reviews)</span>
                                </div>
                            </div>

                            {/* Company logo */}
                            <img src={companyLogo} alt="Company Logo" className="w-full md:w-[80%] lg:w-10 lg:h-10" />
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-4 text-gray-600 my-3">
                            <div className="flex items-center gap-1">
                                <FaBriefcase />
                                <span>4-8 Yrs</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <FaRupeeSign />
                                <span>Not disclosed</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <FaMapMarkerAlt />
                                <span>Mumbai (All Areas)</span>
                            </div>
                        </div>

                        <div className="text-gray-600 text-sm">
                            <p className='flex gap-1 items-center'>
                                <MdOutlineContactPage /> Preferred candidate profile . .
                            </p>
                            <div className="text-gray-500 flex flex-wrap gap-1 mt-1">
                                <span>NRI</span> <span>·</span>
                                <span>Wealth Management</span> <span>·</span>
                                <span>HNI</span> <span>·</span>
                                <span>HNI Sales</span> <span>·</span>
                                <span>Management</span> <span>·</span>
                                <span>Relationship</span> <span>·</span>
                                <span>Sales</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                            <span className="text-gray-500 text-sm">2 Days Ago</span>
                            <button className="flex items-center gap-1 text-gray-600">
                                <FaRegBookmark />
                                <span>Save</span>
                            </button>
                        </div>
                    </div>
                </aside>

                <aside className=''>
                    <div className='w-full border rounded-xl p-4'>
                        <div className='flex justify-between w-full'>
                            <div className='space-y-2 w-full flex flex-col justify-center'>
                                <h3 className='font-semibold'>Love jobs by Standard Chartered?</h3>
                                <p>Register with us and let company recruiters find you</p>
                                <div>
                                <button className='px-4 py-2 bg-red-500 rounded-3xl text-white font-semibold'>Register Now</button>

                                </div>
                            </div>
                            <img className='w-[140px]' src="https://static.naukimg.com/s/7/109/assets/images/cp-register.be877ebb.png" alt="" />
                        </div>
                    </div>

                    <div id='reviews' className=' border rounded-xl p-4 mt-3'>
                        {/* Reviews and other components */}
                        {/* ... */}

                        <div className='space-y-3'>
                            <div className='flex justify-between'>
                                <h1 className='font-semibold'>Reviews by Job Profile</h1>
                                <Link className='text-blue-600 font-semibold text-[14px]' to={'/'}>View All</Link>
                            </div>
                            <div>
                                <p className='flex items-center'><FaStar className='text-yellow-300'></FaStar> <span className='opacity-70'>4.1</span> <span className='ml-4'>Senior Manager</span> <span className='opacity-60'>(123)</span></p>
                                <p className='flex items-center'><FaStar className='text-yellow-300'></FaStar> <span className='opacity-70'>4.1</span> <span className='ml-4'>Senior Manager</span> <span className='opacity-60'>(123)</span></p>
                                <p className='flex items-center'><FaStar className='text-yellow-300'></FaStar> <span className='opacity-70'>4.1</span> <span className='ml-4'>Senior Manager</span> <span className='opacity-60'>(123)</span></p>
                                <p className='flex items-center'><FaStar className='text-yellow-300'></FaStar> <span className='opacity-70'>4.1</span> <span className='ml-4'>Senior Manager</span> <span className='opacity-60'>(123)</span></p>
                                <p className='flex items-center'><FaStar className='text-yellow-300'></FaStar> <span className='opacity-70'>4.1</span> <span className='ml-4'>Senior Manager</span> <span className='opacity-60'>(123)</span></p>

                            </div>

                            <div id='work place' className=' border rounded-xl p-4'>
                                <div className='flex flex-col-reverse gap-3 lg:gap-0 md:flex-row justify-between'>
                                    <div>
                                        <p>Write a review & help millions!</p>
                                        <h5>Rate Standard Chartered as a <br /> workplace</h5>
                                    </div>
                                    <div>
                                        <img className='' src="https://static.naukimg.com/s/7/109/assets/images/write-review-ot.84ba0c93.png" alt="" />
                                    </div>
                                </div>
                                <p className='my-4'>
                                    <Link className='font-semibold text-blue-500 w-full h-full'>Write review </Link>
                                </p>

                            </div>

                            <div className='flex gap-1 items-center'>
                                <img className='w-[15px]' src="https://static.naukimg.com/s/7/109/assets/images/ot-ambition-box.6be916cf.png" alt="" />
                                <p>AmbitionBox</p>
                            </div>
                        </div>
                    </div>
                </aside>
            </section>
        </section>
    );
};

export default StandardCharteredJobs;

