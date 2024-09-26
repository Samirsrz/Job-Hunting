import React from 'react';

const DepartmentsHiring = () => {
  const departments = [
    {
      name: 'Engineering - Software & QA',
      openings: 22,
    },
    {
      name: 'BFSI, Investments & Trading',
      openings: 4,
    },
    {
      name: 'Sales & Business Development',
      openings: 4,
    },
    {
      name: 'Finance & Accounting',
      openings: 3,
    },
    {
      name: 'Risk Management & Compliance',
      openings: 3,
    },
  ];

  return (
    <section className=" bg-gradient-to-t from-[#fff4df] to-[#fffbf5eb] py-8 px-4 rounded-lg max-w-7xl mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Departments hiring at Standard Chartered
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="bg-white flex flex-col justify-between px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-base font-medium text-gray-800 mb-2">
              {dept.name}
            </h3>
            <a
              href="#"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              {dept.openings} openings &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DepartmentsHiring;
