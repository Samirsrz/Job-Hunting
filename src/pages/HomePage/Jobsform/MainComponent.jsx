import React, { useState } from 'react';
import Select from 'react-select';
import { FaPlus, FaTimes } from 'react-icons/fa';

const MainComponent = () => {
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
  };

  // Handle removing a specific keyword
  const removeKeyword = (keywordToRemove) => {
    const updatedKeywords = selectedKeywords.filter(
      (keyword) => keyword.value !== keywordToRemove.value
    );
    setSelectedKeywords(updatedKeywords);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Area(s) of Interest Section */}
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

      {/* Job Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Job Form</h2>
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

          {/* Job Title */}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MainComponent;
