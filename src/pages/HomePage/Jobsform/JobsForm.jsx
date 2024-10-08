// // import React, { useState } from "react";
// // import { useForm } from "react-hook-form";
// // import { FaStar, FaPlus, FaTrash } from "react-icons/fa";
// // import { IoIosArrowForward } from "react-icons/io";

// // const JobForm = () => {
// //   const { register, handleSubmit, formState: { errors } } = useForm();
// //   const [keywords, setKeywords] = useState(["Clinical Data Management", "Medidata Rave", "RaveCdm"]);

// //   // Add a keyword to the list
// //   const addKeyword = () => {
// //     setKeywords([...keywords, ""]);
// //   };

// //   // Update a keyword at a specific index
// //   const handleKeywordChange = (index, value) => {
// //     const updatedKeywords = keywords.map((keyword, i) => (i === index ? value : keyword));
// //     setKeywords(updatedKeywords);
// //   };

// //   // Remove a keyword from the list
// //   const removeKeyword = (index) => {
// //     const updatedKeywords = keywords.filter((_, i) => i !== index);
// //     setKeywords(updatedKeywords);
// //   };

// //   const onSubmit = (data) => {
// //     data.keywords = keywords;
// //     console.log(data);  // Submit the form data along with keywords array
// //   };

// //   return (
// //     <div className="bg-gradient-to-tr from-purple-600 via-indigo-500 to-blue-600 min-h-screen flex items-center justify-center px-4">
// //       <form
// //         onSubmit={handleSubmit(onSubmit)}
// //         className="bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-lg p-8 w-full max-w-3xl transform transition-all duration-500 hover:scale-105"
// //       >
// //         <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-8">
// //           Job Information Form
// //         </h1>

// //         {/* Job Title */}
// //         <div className="mb-6">
// //           <label className="block text-xl font-semibold text-gray-700 mb-2">Job Title</label>
// //           <input
// //             type="text"
// //             {...register("title", { required: true })}
// //             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-400"
// //             placeholder="Enter the job title"
// //             defaultValue="Data Analyst - Clinical Data Management"
// //           />
// //           {errors.title && <p className="text-red-500 mt-1">This field is required</p>}
// //         </div>

// //         {/* Company Name */}
// //         <div className="mb-6">
// //           <label className="block text-xl font-semibold text-gray-700 mb-2">Company Name</label>
// //           <input
// //             type="text"
// //             {...register("companyName", { required: true })}
// //             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-400"
// //             placeholder="Enter the company name"
// //             defaultValue="Cognizant"
// //           />
// //           {errors.companyName && <p className="text-red-500 mt-1">This field is required</p>}
// //         </div>

// //         {/* Ratings */}
// //         <div className="mb-6 flex items-center space-x-4">
// //           <label className="text-xl font-semibold text-gray-700">Ratings</label>
// //           <FaStar className="text-yellow-400" />
// //           <input
// //             type="number"
// //             step="0.1"
// //             {...register("ratings", { required: true, min: 0, max: 5 })}
// //             className="w-20 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-400"
// //             defaultValue={3.4}
// //           />
// //           {errors.ratings && <p className="text-red-500">Rating should be between 0 and 5</p>}
// //         </div>

// //         {/* Location */}
// //         <div className="mb-6">
// //           <label className="block text-xl font-semibold text-gray-700 mb-2">Location</label>
// //           <input
// //             type="text"
// //             {...register("location", { required: true })}
// //             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-400"
// //             defaultValue="Cumilla"
// //             placeholder="Enter the job location"
// //           />
// //         </div>

// //         {/* Shift */}
// //         <div className="mb-6">
// //           <label className="block text-xl font-semibold text-gray-700 mb-2">Shift</label>
// //           <input
// //             type="text"
// //             {...register("shift")}
// //             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-400"
// //             defaultValue="Day 10 hours"
// //             placeholder="Enter the shift details"
// //           />
// //         </div>

// //         {/* Keywords */}
// //         <div className="mb-6">
// //           <label className="block text-xl font-semibold text-gray-700 mb-2">Keywords</label>
// //           {keywords.map((keyword, index) => (
// //             <div key={index} className="flex items-center mb-3 space-x-2">
// //               <input
// //                 type="text"
// //                 value={keyword}
// //                 onChange={(e) => handleKeywordChange(index, e.target.value)}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-400"
// //                 placeholder={`Keyword ${index + 1}`}
// //               />
// //               <button
// //                 type="button"
// //                 onClick={() => removeKeyword(index)}
// //                 className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
// //               >
// //                 <FaTrash />
// //               </button>
// //             </div>
// //           ))}
// //           <button
// //             type="button"
// //             onClick={addKeyword}
// //             className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
// //           >
// //             <FaPlus />
// //             <span>Add Keyword</span>
// //           </button>
// //         </div>

// //         {/* Job Summary */}
// //         <div className="mb-6">
// //           <label className="block text-xl font-semibold text-gray-700 mb-2">Job Summary</label>
// //           <textarea
// //             {...register("job_Summary", { required: true })}
// //             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-400"
// //             defaultValue="Seeking a Process Specialist-CDM with minimum 3.5 years of experience in Clinical operations."
// //             placeholder="Enter job summary"
// //           ></textarea>
// //         </div>

// //         {/* Submit Button */}
// //         <div className="flex justify-center">
// //           <button
// //             type="submit"
// //             className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-bold rounded-full shadow-xl hover:shadow-2xl hover:bg-gradient-to-l hover:scale-105 transition-transform duration-300"
// //           >
// //             <span>Submit</span>
// //             <IoIosArrowForward />
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default JobForm;


// import React, { useState } from 'react';
// import Select from 'react-select';
// import { FaPlus, FaTimes } from 'react-icons/fa';

// const keywordOptions = [
//   { value: 'Sales', label: 'Sales' },
//   { value: 'Data Entry', label: 'Data Entry' },
//   { value: 'Digital Marketing', label: 'Digital Marketing' },
//   { value: 'Web Development', label: 'Web Development' },
//   { value: 'Graphic Design', label: 'Graphic Design' },
//   { value: 'Marketing', label: 'Marketing' },
//   { value: 'Human Resources', label: 'Human Resources (HR)' },
//   { value: 'General Management', label: 'General Management' },
//   { value: 'Social Media Marketing', label: 'Social Media Marketing' },
//   { value: 'Finance', label: 'Finance' },
//   { value: 'Software Development', label: 'Software Development' },
//   { value: 'Telecalling', label: 'Telecalling' },
//   { value: 'Market Research', label: 'Market/Business Research' },
//   { value: 'Content Writing', label: 'Content Writing' },
//   { value: 'Accounts', label: 'Accounts' },
//   { value: 'Project Management', label: 'Project Management' },
// ];

// const KeywordsForm = () => {
//   const [selectedKeywords, setSelectedKeywords] = useState([]);

//   // Handle selection of multiple keywords
//   const handleSelectChange = (selectedOptions) => {
//     setSelectedKeywords(selectedOptions || []);
//   };

//   // Handle removing a specific keyword
//   const removeKeyword = (keywordToRemove) => {
//     setSelectedKeywords(selectedKeywords.filter(keyword => keyword.value !== keywordToRemove.value));
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-gray-700 mb-4">Area(s) of interest</h2>

//       {/* Searchable dropdown for keywords */}
//       <Select
//         isMulti
//         options={keywordOptions}
//         value={selectedKeywords}
//         onChange={handleSelectChange}
//         placeholder="Areas you want to work in or learn about"
//         className="mb-6"
//       />

//       {/* Displaying selected keywords as tags */}
//       <div className="flex flex-wrap">
//         {selectedKeywords.map((keyword, index) => (
//           <div
//             key={index}
//             className="flex items-center bg-gray-200 text-gray-700 px-3 py-1 m-1 rounded-full"
//           >
//             {keyword.label}
//             <button
//               className="ml-2 text-red-500 hover:text-red-700"
//               onClick={() => removeKeyword(keyword)}
//             >
//               <FaTimes />
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Popular career interests section */}
//       <div className="mt-6">
//         <h3 className="text-xl font-semibold text-gray-700 mb-4">Popular career interests</h3>
//         <div className="flex flex-wrap">
//           {keywordOptions.map((option, index) => (
//             <button
//               key={index}
//               onClick={() =>
//                 !selectedKeywords.some((kw) => kw.value === option.value) &&
//                 setSelectedKeywords([...selectedKeywords, option])
//               }
//               className="flex items-center bg-gray-100 text-gray-600 hover:bg-gray-200 px-4 py-2 m-1 rounded-full shadow-sm transition-colors"
//             >
//               {option.label}
//               <FaPlus className="ml-2" />
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default KeywordsForm;




import React, { useState } from 'react';
import Select from 'react-select';
import { FaPlus, FaTimes } from 'react-icons/fa';

// Sample JobForm Component
const JobForm = ({ selectedKeywords }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Job Form</h2>
      {/* Job Form Details */}
      <form>
        {/* Render the selected keywords */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Selected Keywords
          </label>
          <div className="flex flex-wrap">
            {selectedKeywords.map((keyword, index) => (
              <span
                key={index}
                className="bg-blue-200 text-blue-700 px-3 py-1 m-1 rounded-full"
              >
                {keyword.label}
              </span>
            ))}
          </div>
        </div>

        {/* Other form inputs can go here */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Job Title
          </label>
          <input
            type="text"
            placeholder="Enter job title"
            className="border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>

        {/* Add more form inputs as needed */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

// KeywordsForm Component for Keywords Selection
const KeywordsForm = ({ onKeywordsChange }) => {
  const keywordOptions = [
    { value: 'Sales', label: 'Sales' },
    { value: 'Data Entry', label: 'Data Entry' },
    { value: 'Digital Marketing', label: 'Digital Marketing' },
    { value: 'Web Development', label: 'Web Development' },
    { value: 'Graphic Design', label: 'Graphic Design' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Human Resources', label: 'Human Resources (HR)' },
    { value: 'General Management', label: 'General Management' },
    { value: 'Social Media Marketing', label: 'Social Media Marketing' },
    { value: 'Finance', label: 'Finance' },
    { value: 'Software Development', label: 'Software Development' },
    { value: 'Telecalling', label: 'Telecalling' },
    { value: 'Market Research', label: 'Market/Business Research' },
    { value: 'Content Writing', label: 'Content Writing' },
    { value: 'Accounts', label: 'Accounts' },
    { value: 'Project Management', label: 'Project Management' },
  ];

  const [selectedKeywords, setSelectedKeywords] = useState([]);

  // Handle selection of multiple keywords
  const handleSelectChange = (selectedOptions) => {
    setSelectedKeywords(selectedOptions || []);
    onKeywordsChange(selectedOptions || []);
  };

  // Handle removing a specific keyword
  const removeKeyword = (keywordToRemove) => {
    const updatedKeywords = selectedKeywords.filter(
      (keyword) => keyword.value !== keywordToRemove.value
    );
    setSelectedKeywords(updatedKeywords);
    onKeywordsChange(updatedKeywords);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Area(s) of interest</h2>

      {/* Searchable dropdown for keywords */}
      <Select
        isMulti
        options={keywordOptions}
        value={selectedKeywords}
        onChange={handleSelectChange}
        placeholder="Areas you want to work in or learn about"
        className="mb-6"
      />

      {/* Displaying selected keywords as tags */}
      <div className="flex flex-wrap">
        {selectedKeywords.map((keyword, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-200 text-gray-700 px-3 py-1 m-1 rounded-full"
          >
            {keyword.label}
            <button
              className="ml-2 text-red-500 hover:text-red-700"
              onClick={() => removeKeyword(keyword)}
            >
              <FaTimes />
            </button>
          </div>
        ))}
      </div>

      {/* Popular career interests section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Popular career interests</h3>
        <div className="flex flex-wrap">
          {keywordOptions.map((option, index) => (
            <button
              key={index}
              onClick={() =>
                !selectedKeywords.some((kw) => kw.value === option.value) &&
                setSelectedKeywords([...selectedKeywords, option])
              }
              className="flex items-center bg-gray-100 text-gray-600 hover:bg-gray-200 px-4 py-2 m-1 rounded-full shadow-sm transition-colors"
            >
              {option.label}
              <FaPlus className="ml-2" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main component rendering both KeywordsForm and JobForm
