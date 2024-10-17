// import React from 'react';
// import FilterPanel from './FilterPanel/FilterPanel';
// import { useGetFeaturedComaniesQuery } from '../../RTK/Api/FeaturedJobsApi/FeaturedJobsApi';
// import CommonJobCard from '../CommonJobCard/CommonJobCard';

// const ViewAllCompanies = () => {
//     let { data: featuredCompanies, isError, isLoading } = useGetFeaturedComaniesQuery()

//     if (isLoading) {
//         return <h1>Loading</h1>
//     }
//     if (isError) {
//         return <h1>something went wrong</h1>
//     }
//     return (
//         <section className=''>
//             <aside className='grid grid-cols-1 md:grid-cols-[280px_1fr] gap-3'>
//                 <FilterPanel />

//                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
//                     {
//                         featuredCompanies.jobs.map(company => <CommonJobCard key={company._id} card={company} />)
//                     }
//                 </div>
//             </aside>

//             <div className="flex items-center justify-center mt-4">
//                 {/* Page info */}
//                 <span className="text-gray-500 mr-4">Page 1 of 1</span>

//                 {/* Previous button */}
//                 <button
//                     className="px-3 py-1 text-gray-400 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 disabled:opacity-50"
//                     disabled
//                 >
//                     <span className="text-sm">&lt; Previous</span>
//                 </button>

//                 {/* Page number */}
//                 <span
//                     className="mx-2 px-3 py-1 text-black border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
//                 >
//                     1
//                 </span>

//                 {/* Next button */}
//                 <button
//                     className="px-3 py-1 text-gray-400 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 disabled:opacity-50"
//                     disabled
//                 >
//                     <span className="text-sm">Next &gt;</span>
//                 </button>
//             </div>

//         </section>
//     );
// };

// export default ViewAllCompanies;











import React, { useState, useEffect } from 'react';
import FilterPanel from './FilterPanel/FilterPanel';
import { useGetFeaturedComaniesQuery } from '../../RTK/Api/FeaturedJobsApi/FeaturedJobsApi';
import CommonJobCard from '../CommonJobCard/CommonJobCard';

const ViewAllCompanies = () => {
    const [currentPage, setCurrentPage] = useState(1); // Track the current page
    const limit = 12;  // Set the limit for the number of items per page
    const [filter, setFilter] = useState(
        {
            industrySearch: '',
            searchedCompany: '',
            selectedBusinessTypes: [],
            selectedCompanyTypes: [],
            selectedIndustries: [],
            selectedSectors: []
        }
    )
    // Fetch data from the server with pagination params (page and limit)
    const { data: featuredCompanies = [], isError, isLoading } = useGetFeaturedComaniesQuery({
        page: currentPage,
        limit,
        filterInfo: filter
    });

    function getFilterPanel(infoFilter) {
        setFilter(infoFilter);
        // console.log(infoFilter);


    }

    // console.log(featuredCompanies);

    // Handle loading state
    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    // Handle error state
    if (isError) {
        return <h1>Something went wrong</h1>;
    }


    // Destructure data from the API response
    const { jobs, totalPages } = featuredCompanies;



    // Handle page navigation
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };



    return (
        <section className='max-w-screen-2xl m-auto'>
            <h1 className='font-bold text-3xl my-6 text-center'>Featured companies actively hiring</h1>
            <small className='w-[98%] flex justify-end'>Showing {featuredCompanies.totalJobs} companies</small>
            <aside className='grid grid-cols-1 md:grid-cols-[280px_1fr] gap-3 '>
                <FilterPanel getFilterPanel={getFilterPanel} />

                {jobs.length === 0 &&
                    <h1 className='font-bold text-gray-400 text-3xl flex justify-center items-center'> No data found</h1>
                }

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        jobs.map(company => <CommonJobCard key={company._id} card={company} />)
                    }
                </div>
            </aside>

            {/* Pagination Controls */}
            {jobs.length == 12 && <div className="flex items-center justify-center mt-4">
                <span className="text-gray-500 mr-4">
                    Page {currentPage} of {totalPages}
                </span>

                {/* Previous button */}
                <button
                    className="px-3 py-1 text-gray-400 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 disabled:opacity-50"
                    disabled={currentPage === 1}
                    onClick={handlePreviousPage}
                >
                    <span className="text-sm">&lt; Previous</span>
                </button>

                {/* Page number */}
                <span
                    className="mx-2 px-3 py-1 text-black border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                    {currentPage}
                </span>

                {/* Next button */}
                <button
                    className="px-3 py-1 text-gray-400 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 disabled:opacity-50"
                    disabled={currentPage === totalPages}
                    onClick={handleNextPage}
                >
                    <span className="text-sm">Next &gt;</span>
                </button>
            </div>}

        </section>
    );
};

export default ViewAllCompanies;
