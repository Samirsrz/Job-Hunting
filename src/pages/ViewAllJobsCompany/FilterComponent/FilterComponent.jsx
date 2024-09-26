import  { useState } from 'react';


const departments = [
  { name: 'Engineering - Software & QA', count: 22 },
  { name: 'BFSI, Investments & Trading', count: 4 },
  { name: 'Sales & Business Development', count: 4 },
  { name: 'Finance & Accounting', count: 3 },
  { name: 'Risk Management & Compliance', count: 3 },
];

const FilterComponent = ({setBtnDrop,btnDrop}) => {
  const [selectedDepartments, setSelectedDepartments] = useState([]);
console.log(btnDrop);

  const handleCheckboxChange = (department) => {
    setSelectedDepartments((prev) =>
      prev.includes(department)
        ? prev.filter((d) => d !== department)
        : [...prev, department]
    );
  };

  const handleClear = () => {
    setSelectedDepartments([]);
  };

  const handleApply = () => {
    // Apply filter logic here
    console.log('Applied filters:', selectedDepartments);
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg w-[286px] bg-white">
        
      <h3 className="text-lg font-semibold mb-4">Search department</h3>
      {departments.map((dept) => (
        <div key={dept.name} className="flex items-center mb-2">
          <input
            type="checkbox"
            id={dept.name}
            checked={selectedDepartments.includes(dept.name)}
            onChange={() => handleCheckboxChange(dept.name)}
            className="mr-2"
          />
          <label htmlFor={dept.name} className="flex-grow">
            {dept.name} ({dept.count})
          </label>
        </div>
      ))}
      <div className="flex justify-between mt-4">
        <button
          onClick={handleClear}
          className="text-blue-500 font-bold"
        >
          Clear
        </button>
        <button
          onClick={handleApply}
          className="px-4 py-2 bg-blue-700 rounded-3xl  text-white  flex items-center"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
