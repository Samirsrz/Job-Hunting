

// import  { useState } from 'react';
// import { useTranslation } from 'react-i18next';

// const HomeSearch = () => {
//     const { t } = useTranslation();
//     const [experience, setExperience] = useState("30 years");

//     const handleExperienceChange = (e) => {
//         setExperience(e.target.value);
//     };

//     return (
//         <div className='max-w-screen-xl m-auto p-4'>
//             <h1 className='text-center text-4xl font-bold m-4'>{t('FindYourDreamJobNow')}</h1>
//             <p className='text-center text-lg font-thin'>{t('Over500,000jobsforyoutoexplore')}</p>

//             <div className='flex justify-center mt-2'>
//                 <div className='bg-white shadow-lg lg:rounded-full p-4 flex-col lg:flex-row  flex items-center space-x-4'>
//                     {/* Input Field */}
//                     <input 
//                         type="text" 
//                         placeholder='Enter skills / designations / companies' 
//                         className='flex-grow p-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
//                     />

//                     {/* Experience Dropdown */}
//                     <div className='relative'>
//                         <select 
//                             value={experience}
//                             onChange={handleExperienceChange}
//                             className='p-4 pr-8 rounded-full bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none'
//                         >
//                             <option value="Fresher">Fresher (less than 1 year)</option>
//                             <option value="1 year">1 year</option>
//                             <option value="2 years">2 years</option>
//                             <option value="3 years">3 years</option>
//                             <option value="4 years">4 years</option>
//                             <option value="5 years">5 years</option>
//                         </select>
//                         {/* Custom Dropdown Arrow Icon */}
//                         <div className='absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none'>
//                             <svg className="w-4 h-4 fill-current text-gray-700" viewBox="0 0 20 20">
//                                 <path d="M5.5 7l4.5 4.5L14.5 7H5.5z" />
//                             </svg>
//                         </div>
//                     </div>

//                     {/* Location Input */}
//                     <input 
//                         type="text" 
//                         placeholder='Enter location' 
//                         className='p-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
//                     />

//                     {/* Search Button */}
//                     <button
//                         type="submit"
//                         className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full'
//                     >
//                         Search
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HomeSearch;












import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const HomeSearch = () => {
    const { t } = useTranslation();
    const [experience, setExperience] = useState("30 years");
    const [query, setQuery] = useState("");
    const [location, setLocation] = useState("");
    const [jobSuggestions, setJobSuggestions] = useState([]);
    const [locationSuggestions, setLocationSuggestions] = useState([]);
    const [isJobSuggestionVisible, setIsJobSuggestionVisible] = useState(false);
    const [isLocationSuggestionVisible, setIsLocationSuggestionVisible] = useState(false);

    // Mock data for skills, designations, or companies
    const jobSuggestionData = [
        "Software Engineer",
        "Data Scientist",
        "Product Manager",
        "UX Designer",
        "DevOps Engineer",
        "Business Analyst",
        "QA Engineer",
        "Frontend Developer",
        "Backend Developer",
        "Marketing Specialist"
    ];

    // Mock data for locations
    const locationSuggestionData = [
        "New York",
        "San Francisco",
        "Chicago",
        "Los Angeles",
        "London",
        "Berlin",
        "Sydney",
        "Toronto",
        "Paris",
        "Tokyo"
    ];

    const handleExperienceChange = (e) => {
        setExperience(e.target.value);
    };

    // Handle job input change and filter job suggestions
    const handleJobInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.length > 0) {
            const filteredSuggestions = jobSuggestionData.filter((job) =>
                job.toLowerCase().includes(value.toLowerCase())
            );
            setJobSuggestions(filteredSuggestions);
            setIsJobSuggestionVisible(true);
        } else {
            setIsJobSuggestionVisible(false);
        }
    };

    // Handle selecting a job suggestion
    const handleJobSuggestionClick = (suggestion) => {
        setQuery(suggestion);
        setIsJobSuggestionVisible(false);
    };

    // Handle location input change and filter location suggestions
    const handleLocationInputChange = (e) => {
        const value = e.target.value;
        setLocation(value);

        if (value.length > 0) {
            const filteredSuggestions = locationSuggestionData.filter((loc) =>
                loc.toLowerCase().includes(value.toLowerCase())
            );
            setLocationSuggestions(filteredSuggestions);
            setIsLocationSuggestionVisible(true);
        } else {
            setIsLocationSuggestionVisible(false);
        }
    };

    // Handle selecting a location suggestion
    const handleLocationSuggestionClick = (suggestion) => {
        setLocation(suggestion);
        setIsLocationSuggestionVisible(false);
    };

    return (
        <div className='max-w-screen-xl m-auto p-4'>
            <h1 className='text-center text-4xl font-bold m-4'>{t('FindYourDreamJobNow')}</h1>
            <p className='text-center text-lg font-thin'>{t('Over500,000jobsforyoutoexplore')}</p>

            <div className='flex justify-center mt-2'>
                <div className='bg-white shadow-lg lg:rounded-full p-4 flex-col lg:flex-row flex items-center space-x-4 relative'>
                    {/* Job Input Field with Suggestions */}
                    <div className='relative flex-grow'>
                        <input
                            type="text"
                            value={query}
                            onChange={handleJobInputChange}
                            placeholder='Enter skills / designations / companies'
                            className='w-full p-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                        {isJobSuggestionVisible && jobSuggestions.length > 0 && (
                            <ul className='absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md max-h-60 overflow-y-auto shadow-lg z-10'>
                                {jobSuggestions.map((suggestion, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleJobSuggestionClick(suggestion)}
                                        className='p-2 hover:bg-gray-100 cursor-pointer'
                                    >
                                        {suggestion}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

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

                    {/* Location Input with Suggestions */}
                    <div className='relative flex-grow'>
                        <input
                            type="text"
                            value={location}
                            onChange={handleLocationInputChange}
                            placeholder='Enter location'
                            className='w-full p-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                        {isLocationSuggestionVisible && locationSuggestions.length > 0 && (
                            <ul className='absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md max-h-60 overflow-y-auto shadow-lg z-10'>
                                {locationSuggestions.map((suggestion, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleLocationSuggestionClick(suggestion)}
                                        className='p-2 hover:bg-gray-100 cursor-pointer'
                                    >
                                        {suggestion}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

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
