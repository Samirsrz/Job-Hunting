// import { useState } from 'react';
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// const FilterPanel = ({getFilterPanel}) => {
//   // State to manage the collapsed or expanded status of each section
//   const [isSectorOpen, setSectorOpen] = useState(true);
//   const [isIndustryOpen, setIndustryOpen] = useState(true);
//   const [isCompanyTypeOpen, setCompanyTypeOpen] = useState(true);
//   const [isBusinessOpen, setBusinessOpen] = useState(true);
//   const [isCompaniesOpen, setCompaniesOpen] = useState(true);

//   // Toggle functions
//   const toggleSector = () => setSectorOpen(!isSectorOpen);
//   const toggleIndustry = () => setIndustryOpen(!isIndustryOpen);
//   const toggleCompanyType = () => setCompanyTypeOpen(!isCompanyTypeOpen);
//   const toggleBusiness = () => setBusinessOpen(!isBusinessOpen);
//   const toggleCompanies = () => setCompaniesOpen(!isCompaniesOpen);

//   getFilterPanel()
//   return (
//     <div className="w-64 p-4 mt-3 bg-white shadow-md rounded-lg h-max">
//       <h2 className="text-lg font-bold mb-4">All Filters</h2>

//       {/* Sector Section */}
//       <div className="mb-6">
//         <div
//           className="flex justify-between items-center cursor-pointer"
//           onClick={toggleSector}
//         >
//           <h3 className="font-semibold text-gray-800">Sector</h3>
//           {isSectorOpen ? <FaChevronUp /> : <FaChevronDown />}
//         </div>
//         {isSectorOpen && (
//           <ul className="mt-2 space-y-2 text-gray-700">
//             <li>
//               <label className="inline-flex items-center">
//                 <input type="checkbox" className="form-checkbox" />
//                 <span className="ml-2">BPM (1)</span>
//               </label>
//             </li>
//             <li>
//               <label className="inline-flex items-center">
//                 <input type="checkbox" className="form-checkbox" />
//                 <span className="ml-2">Healthcare & Life Sciences (1)</span>
//               </label>
//             </li>
//             <li>
//               <label className="inline-flex items-center">
//                 <input type="checkbox" className="form-checkbox" />
//                 <span className="ml-2">Consumer, Retail & Hospitality (1)</span>
//               </label>
//             </li>
//             <li>
//               <label className="inline-flex items-center">
//                 <input type="checkbox" className="form-checkbox" />
//                 <span className="ml-2">Technology (1)</span>
//               </label>
//             </li>
//           </ul>
//         )}
//       </div>

//       {/* Industry Section */}
//       <div className="mb-6">
//         <div
//           className="flex justify-between items-center cursor-pointer"
//           onClick={toggleIndustry}
//         >
//           <h3 className="font-semibold text-gray-800">Industry</h3>
//           {isIndustryOpen ? <FaChevronUp /> : <FaChevronDown />}
//         </div>
//         {isIndustryOpen && (
//           <div>
//             <input
//               type="text"
//               placeholder="Search Industry"
//               className="w-full p-2 mt-2 mb-3 border rounded-md focus:outline-none focus:border-blue-500"
//             />
//             <ul className="space-y-2 text-gray-700">
//               <li>
//                 <label className="inline-flex items-center">
//                   <input type="checkbox" className="form-checkbox" />
//                   <span className="ml-2">IT Services & Consulting (9)</span>
//                 </label>
//               </li>
//               <li>
//                 <label className="inline-flex items-center">
//                   <input type="checkbox" className="form-checkbox" />
//                   <span className="ml-2">Financial Services (3)</span>
//                 </label>
//               </li>
//               <li>
//                 <label className="inline-flex items-center">
//                   <input type="checkbox" className="form-checkbox" />
//                   <span className="ml-2">Telecom / ISP (2)</span>
//                 </label>
//               </li>
//               <li>
//                 <label className="inline-flex items-center">
//                   <input type="checkbox" className="form-checkbox" />
//                   <span className="ml-2">FinTech / Payments (2)</span>
//                 </label>
//               </li>
//             </ul>
//             <button className="text-blue-500 mt-2 text-sm">+1 more</button>
//           </div>
//         )}
//       </div>

//       {/* Company Type Section */}
//       <div className="mb-6">
//         <div
//           className="flex justify-between items-center cursor-pointer"
//           onClick={toggleCompanyType}
//         >
//           <h3 className="font-semibold text-gray-800">Company type</h3>
//           {isCompanyTypeOpen ? <FaChevronUp /> : <FaChevronDown />}
//         </div>
//         {isCompanyTypeOpen && (
//           <ul className="mt-2 space-y-2 text-gray-700">
//             <li>
//               <label className="inline-flex items-center">
//                 <input type="checkbox" className="form-checkbox" />
//                 <span className="ml-2">Foreign MNC (14)</span>
//               </label>
//             </li>
//             <li>
//               <label className="inline-flex items-center">
//                 <input type="checkbox" className="form-checkbox" />
//                 <span className="ml-2">Corporate (4)</span>
//               </label>
//             </li>
//             <li>
//               <label className="inline-flex items-center">
//                 <input type="checkbox" className="form-checkbox" />
//                 <span className="ml-2">Indian MNC (4)</span>
//               </label>
//             </li>
//             <li>
//               <label className="inline-flex items-center">
//                 <input type="checkbox" className="form-checkbox" />
//                 <span className="ml-2">Startup (1)</span>
//               </label>
//             </li>
//           </ul>
//         )}
//       </div>

//       {/* Nature of Business Section */}
//       <div className="mb-6">
//         <div
//           className="flex justify-between items-center cursor-pointer"
//           onClick={toggleBusiness}
//         >
//           <h3 className="font-semibold text-gray-800">Nature of business</h3>
//           {isBusinessOpen ? <FaChevronUp /> : <FaChevronDown />}
//         </div>
//         {isBusinessOpen && (
//           <ul className="mt-2 space-y-2 text-gray-700">
//             <li>
//               <label className="inline-flex items-center">
//                 <input type="checkbox" className="form-checkbox" />
//                 <span className="ml-2">B2B (21)</span>
//               </label>
//             </li>
//             <li>
//               <label className="inline-flex items-center">
//                 <input type="checkbox" className="form-checkbox" />
//                 <span className="ml-2">B2C (12)</span>
//               </label>
//             </li>
//           </ul>
//         )}
//       </div>

//       {/* Companies Section */}
//       <div>
//         <div
//           className="flex justify-between items-center cursor-pointer"
//           onClick={toggleCompanies}
//         >
//           <h3 className="font-semibold text-gray-800">Companies</h3>
//           {isCompaniesOpen ? <FaChevronUp /> : <FaChevronDown />}
//         </div>
//         {isCompaniesOpen && (
//           <input
//             type="text"
//             placeholder="Search Companies"
//             className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default FilterPanel;



import { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FilterPanel = ({ getFilterPanel }) => {
  // State to manage the collapsed or expanded status of each section
  const [isSectorOpen, setSectorOpen] = useState(true);
  const [isIndustryOpen, setIndustryOpen] = useState(true);
  const [isCompanyTypeOpen, setCompanyTypeOpen] = useState(true);
  const [isBusinessOpen, setBusinessOpen] = useState(true);
  const [isCompaniesOpen, setCompaniesOpen] = useState(true);

  // Filter states
  const [selectedSectors, setSelectedSectors] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedCompanyTypes, setSelectedCompanyTypes] = useState([]);
  const [selectedBusinessTypes, setSelectedBusinessTypes] = useState([]);
  const [searchedCompany, setSearchedCompany] = useState('');
  const [industrySearch, setIndustrySearch] = useState('');

  // Toggle functions
  const toggleSector = () => setSectorOpen(!isSectorOpen);
  const toggleIndustry = () => setIndustryOpen(!isIndustryOpen);
  const toggleCompanyType = () => setCompanyTypeOpen(!isCompanyTypeOpen);
  const toggleBusiness = () => setBusinessOpen(!isBusinessOpen);
  const toggleCompanies = () => setCompaniesOpen(!isCompaniesOpen);

  // Handlers for filter changes
  const handleSectorChange = (sector) => {
    setSelectedSectors((prev) =>
      prev.includes(sector) ? prev.filter((s) => s !== sector) : [...prev, sector]
    );
  };

  const handleIndustryChange = (industry) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry) ? prev.filter((i) => i !== industry) : [...prev, industry]
    );
  };

  const handleCompanyTypeChange = (type) => {
    setSelectedCompanyTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleBusinessTypeChange = (type) => {
    setSelectedBusinessTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleCompanySearch = (e) => {
    setSearchedCompany(e.target.value);
  };

  // Effect to pass filter data to parent
  useEffect(() => {
    const filterData = {
      selectedSectors,
      selectedIndustries,
      selectedCompanyTypes,
      selectedBusinessTypes,
      searchedCompany,
      industrySearch,
    };
    getFilterPanel(filterData);
  }, [
    selectedSectors,
    selectedIndustries,
    selectedCompanyTypes,
    selectedBusinessTypes,
    searchedCompany,
    industrySearch,
    // getFilterPanel,
  ]);

  return (
    <div className="w-64 p-4 mt-3 bg-white shadow-md rounded-lg h-max">
      <h2 className="text-lg font-bold mb-4">All Filters</h2>

      {/* Sector Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center cursor-pointer" onClick={toggleSector}>
          <h3 className="font-semibold text-gray-800">Sector</h3>
          {isSectorOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {isSectorOpen && (
          <ul className="mt-2 space-y-2 text-gray-700">
            <li>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" onChange={() => handleSectorChange('BPM')} />
                <span className="ml-2">BPM (1)</span>
              </label>
            </li>
            <li>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" onChange={() => handleSectorChange('Healthcare & Life Sciences')} />
                <span className="ml-2">Healthcare & Life Sciences (1)</span>
              </label>
            </li>
            <li>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" onChange={() => handleSectorChange('Consumer, Retail & Hospitality')} />
                <span className="ml-2">Consumer, Retail & Hospitality (1)</span>
              </label>
            </li>
            <li>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" onChange={() => handleSectorChange('Technology')} />
                <span className="ml-2">Technology (1)</span>
              </label>
            </li>
          </ul>
        )}
      </div>

      {/* Industry Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center cursor-pointer" onClick={toggleIndustry}>
          <h3 className="font-semibold text-gray-800">Industry</h3>
          {isIndustryOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {isIndustryOpen && (
          <div>
            <input
              type="text"
              placeholder="Search Industry"
              value={industrySearch}
              className="w-full p-2 mt-2 mb-3 border rounded-md focus:outline-none focus:border-blue-500"
              onChange={(event) => setIndustrySearch(event.target.value)}
            />
            <ul className="space-y-2 text-gray-700">
              <li>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" onChange={() => handleIndustryChange('IT Services & Consulting')} />
                  <span className="ml-2">IT Services & Consulting (9)</span>
                </label>
              </li>
              <li>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" onChange={() => handleIndustryChange('Financial Services')} />
                  <span className="ml-2">Financial Services (3)</span>
                </label>
              </li>
              <li>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" onChange={() => handleIndustryChange('Telecom / ISP')} />
                  <span className="ml-2">Telecom / ISP (2)</span>
                </label>
              </li>
              <li>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" onChange={() => handleIndustryChange('FinTech / Payments')} />
                  <span className="ml-2">FinTech / Payments (2)</span>
                </label>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Company Type Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center cursor-pointer" onClick={toggleCompanyType}>
          <h3 className="font-semibold text-gray-800">Company Type</h3>
          {isCompanyTypeOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {isCompanyTypeOpen && (
          <ul className="mt-2 space-y-2 text-gray-700">
            <li>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" onChange={() => handleCompanyTypeChange('Private')} />
                <span className="ml-2">Private (5)</span>
              </label>
            </li>
            <li>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" onChange={() => handleCompanyTypeChange('Public')} />
                <span className="ml-2">Public (3)</span>
              </label>
            </li>
          </ul>
        )}
      </div>

      {/* Business Type Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center cursor-pointer" onClick={toggleBusiness}>
          <h3 className="font-semibold text-gray-800">Business Type</h3>
          {isBusinessOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {isBusinessOpen && (
          <ul className="mt-2 space-y-2 text-gray-700">
            <li>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" onChange={() => handleBusinessTypeChange('B2B')} />
                <span className="ml-2">B2B (6)</span>
              </label>
            </li>
            <li>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" onChange={() => handleBusinessTypeChange('B2C')} />
                <span className="ml-2">B2C (4)</span>
              </label>
            </li>
          </ul>
        )}
      </div>

      {/* Company Search Input */}
      <div>
        <input
          type="text"
          placeholder="Search Companies"
          value={searchedCompany}
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          onChange={handleCompanySearch}
        />
      </div>
    </div>
  );
};

export default FilterPanel;







