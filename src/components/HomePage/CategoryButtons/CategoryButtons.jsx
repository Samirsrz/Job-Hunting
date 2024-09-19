
import { FaHome, FaBuilding, FaCertificate, FaUserGraduate, FaBriefcase, FaChartBar, FaChartLine, FaClipboardCheck, FaDesktop, FaRocket, FaHandshake } from "react-icons/fa";

const categories = [
  { name: "Remote", icon: <FaHome /> },
  { name: "MNC", icon: <FaBuilding /> },
  { name: "Fortune 500", icon: <FaCertificate /> },
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
  return (
    <div className="flex flex-wrap gap-4 justify-center p-5">
      {categories.map((category, index) => (
        <button
          key={index}
          className="flex items-center gap-2 px-4 py-3 border rounded-lg shadow-sm hover:shadow-lg hover:bg-gray-100 transition-all duration-200 ease-in-out w-48 justify-center"
        >
          <span className="text-2xl text-gray-700">{category.icon}</span>
          <span className="text-lg font-medium text-gray-700">{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
