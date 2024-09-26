// import React, { useState } from 'react';

// const ExperienceSlider = () => {
//   const [experience, setExperience] = useState(24);

//   const handleSliderChange = (event) => {
//     setExperience(event.target.value);
//   };

//   const handleClear = () => {
//     setExperience(0);
//   };

//   const handleApply = () => {
//     // Apply filter logic here
//     console.log('Selected experience:', experience);
//   };

//   return (
//     <div className="p-4 border rounded shadow-lg w-64 bg-white">
//       <h3 className="text-lg font-semibold mb-4">Select experience (in years)</h3>
//       <div className="flex items-center mb-4">
//         <input
//           type="range"
//           min="0"
//           max="30"
//           value={experience}
//           onChange={handleSliderChange}
//           className="w-full bg-black range-accent"
//         />
//         <span className="ml-2">{experience} yrs</span>
//       </div>
//       <div className="flex justify-between mt-4">
//         <button
//           onClick={handleClear}
//           className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
//         >
//           Clear
//         </button>
//         <button
//           onClick={handleApply}
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Apply
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ExperienceSlider;




import  { useState } from 'react';
import './ExperienceSlider.css'; // Import the custom CSS

const ExperienceSlider = () => {
  const [experience, setExperience] = useState(24);

  const handleSliderChange = (event) => {
    setExperience(event.target.value);
  };

  const handleClear = () => {
    setExperience(0);
  };

  const handleApply = () => {
    console.log('Selected experience:', experience);
  };

  // Calculate the background style based on experience
  const backgroundStyle = {
    background: `linear-gradient(to right, black ${experience * 3.33}%, #F0F0F0 ${experience * 3.33}%)`, // 3.33% per year for a max of 30 years
  };

  return (
    <div className="p-4 border  rounded-lg shadow-lg w-[286px] bg-white">
      <h3 className="text-lg font-semibold mb-4">Select experience (in years)</h3>
      <div className="flex items-center mb-4">
        <input
          type="range"
          min="0"
          max="30"
          value={experience}
          onChange={handleSliderChange}
          className="range-slider"
          style={backgroundStyle} // Apply the background style here
        />
        <span className="ml-2">{experience} yrs</span>
      </div>
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

export default ExperienceSlider;
