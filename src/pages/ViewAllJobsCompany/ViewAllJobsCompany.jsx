import React from 'react';

const ViewAllJobsCompany = () => {
    return (
        <div className="w-full font-sans">
            {/* Background Section */}
            <div className="relative text-left">
                <img src="/path-to-your-image/bl.PNG" alt="Optum Header" className="w-full h-auto" />
                
                {/* Company Info */}
                <div className="flex items-center p-6 bg-white rounded-lg shadow-lg relative -top-12">
                    {/* Company Logo */}
                    <img 
                        src="https://your-company-logo-link.png" 
                        alt="Company Logo" 
                        className="w-20 h-20 rounded-md mr-6"
                    />
                    
                    {/* Company Details */}
                    <div className="flex-grow">
                        <h2 className="text-2xl font-bold text-orange-600">Optum</h2>
                        <div className="flex items-center mt-2">
                            <span className="text-lg">4.0</span>
                            <span className="text-gray-500 text-sm ml-2">(3.6K reviews)</span>
                        </div>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap mt-3 space-x-3">
                            <span className="bg-gray-200 text-sm text-gray-700 py-1 px-3 rounded-full">Medical Services / Hospital</span>
                            <span className="bg-gray-200 text-sm text-gray-700 py-1 px-3 rounded-full">Hardware & Networking</span>
                            <span className="bg-gray-200 text-sm text-gray-700 py-1 px-3 rounded-full">IT Services & Consulting</span>
                            {/* Add more tags as needed */}
                        </div>
                    </div>

                    {/* Follow Button */}
                    <div className="text-right">
                        <span className="block text-gray-600">60.4K followers</span>
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">+ Follow</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewAllJobsCompany;
