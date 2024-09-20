

import  { useState } from 'react';

const HomeSearch = () => {
    const [experience, setExperience] = useState("30 years");

    const handleExperienceChange = (e) => {
        setExperience(e.target.value);
    };

    return (
        <div className='max-w-6xl mx-auto p-4'>
            <h1 className='text-center text-4xl font-bold mb-4'>Find Your Dream Job Now</h1>
            <p className='text-center text-lg mb-8'>Over 500,000 jobs for you to explore</p>

            <div className='flex justify-center'>
                <div className='bg-white shadow-lg lg:rounded-full p-4 flex-col lg:flex-row  flex items-center space-x-4'>
                    {/* Input Field */}
                    <input 
                        type="text" 
                        placeholder='Enter skills / designations / companies' 
                        className='flex-grow p-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
                    />

                    {/* Experience Dropdown */}
                    <div className='relative'>
                        <select 
                            value={experience}
                            onChange={handleExperienceChange}
                            className='p-4 pr-8 rounded-full bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none'
                        >
                            <option value="Fresher">Fresher (less than 1 year)</option>
                            <option value="1 year">1 year</option>
                            <option value="2 years">2 years</option>
                            <option value="3 years">3 years</option>
                            <option value="4 years">4 years</option>
                            <option value="5 years">5 years</option>
                        </select>
                        {/* Custom Dropdown Arrow Icon */}
                        <div className='absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none'>
                            <svg className="w-4 h-4 fill-current text-gray-700" viewBox="0 0 20 20">
                                <path d="M5.5 7l4.5 4.5L14.5 7H5.5z" />
                            </svg>
                        </div>
                    </div>

                    {/* Location Input */}
                    <input 
                        type="text" 
                        placeholder='Enter location' 
                        className='p-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
                    />

                    {/* Search Button */}
                    <button
                        type="submit"
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full'
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeSearch;
