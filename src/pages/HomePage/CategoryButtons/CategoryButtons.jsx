import { FaHome, FaBuilding, FaCertificate, FaUserGraduate, FaBriefcase, FaChartBar, FaChartLine, FaClipboardCheck, FaDesktop, FaRocket, FaHandshake } from "react-icons/fa";
import { useGetCategoryButtonsJobsQuery } from "../../../RTK/Api/SponsoredCompaniesApi/SponsoredCompaniesApi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const categoryButtons = [
  { name: "Remote", icon: <FaHome /> },
  { name: "Design", icon: <FaBuilding /> },
  { name: "Tourism", icon: <FaCertificate /> },
  { name: "Internship", icon: <FaHandshake /> },
  { name: "Fresher", icon: <FaUserGraduate /> },
  { name: "Banking & Finance", icon: <FaBriefcase /> },
  { name: "Data Science", icon: <FaChartBar /> },
  { name: "Analytics", icon: <FaChartLine /> },
  { name: "Project Mgmt", icon: <FaClipboardCheck /> },
  { name: "Software & IT", icon: <FaDesktop /> },
  { name: "Startup", icon: <FaRocket /> },
];

const CategoryButtons = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTrigger, setSearchTrigger] = useState(false);
  const { data: jobs, isLoading, error, isError } = useGetCategoryButtonsJobsQuery(
    { category: selectedCategory },
    { skip: !searchTrigger }
  );

  // Handle category button click
  const handleCategoryName = (name) => {
    setSelectedCategory(name);
    setSearchTrigger(true);
  };

  // After fetching jobs, navigate to the Jobs component with the jobs data
  useEffect(() => {
    if (jobs && searchTrigger) {
      console.log('Fetched Jobs:', jobs);
      // Navigate to the Jobs component and pass the jobs data via state
      navigate('/jobs', { state: { jobs, category: selectedCategory } });
      setSearchTrigger(false); // Reset the trigger after fetching
    }
  }, [jobs, searchTrigger, navigate, selectedCategory]);

  return (
    <div className="flex flex-wrap gap-4 justify-center p-5 mt-12">
      {categoryButtons.map((category, index) => (
        <button
          onClick={() => handleCategoryName(category.name)}
          key={index}
          className="flex items-center gap-2 px-4 py-3 border rounded-lg shadow-sm hover:shadow-lg hover:bg-gray-100 transition-all duration-200 ease-in-out w-48 justify-center"
        >
          <span className="text-2xl text-gray-700">{category.icon}</span>
          <span className="text-lg font-medium text-gray-700">
            {category.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
