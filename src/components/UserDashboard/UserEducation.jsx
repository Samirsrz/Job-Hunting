import React, { useState } from "react";

const UserEducation = () => {
  const [formData, setFormData] = useState({
    education: "",
    university: "",
    course: "",
    specialization: "",
    courseType: "Full time",
    startYear: "",
    endYear: "",
    gradingSystem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted", formData);
  };
  return (
    <div>
      <div className="bg-white shadow rounded-lg p-6 mt-5 flex justify-between">
        <div className="mb-4">
          <h2 className="text-lg font-bold">
            Education <span className="text-green-500">Add 10%</span>
          </h2>
          <p className="text-sm text-gray-500">
            Your qualifications help employers know your educational background
          </p>
        </div>

        <div className="">
          <label htmlFor="my_modal_7" className="text-blue-600 font-semibold">
            Add education
          </label>
        </div>
      </div>

      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box max-w-screen-lg">
          <div className="bg-white p-8 rounded-lg shadow-lg ">
            <h2 className="text-xl font-bold mb-4">Education</h2>
            <p className="text-sm text-gray-500 mb-6">
              Details like course, university, and more, help recruiters
              identify your educational background
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm  text-gray-700 font-semibold mb-1">
                  Education*
                </label>
                <select
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  className="block w-full p-2 border rounded-md border-blue-400 hover:border-blue-400"
                >
                  <option value="">Select education</option>
                  <option value="PhD">PhD</option>
                  <option value="Masters">Masters</option>
                  <option value="Bachelors">Bachelors</option>
                  <option value="Diploma">Diploma</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  University/Institute*
                </label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  className="block w-full p-2 border rounded-md border-blue-400 hover:border-blue-400"
                  placeholder="Select university/institute"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Course*
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="block w-full p-2 border rounded-md border-blue-400 hover:border-blue-400"
                >
                  <option value="">Select course</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Business Administration">
                    Business Administration
                  </option>
                  <option value="Engineering">Engineering</option>
                  {/* Add more courses as necessary */}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Specialization*
                </label>
                <select
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  className="block w-full p-2 border rounded-md border-blue-400 hover:border-blue-400"
                >
                  <option value="">Select specialization</option>
                  <option value="AI">AI</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Finance">Finance</option>
                  {/* Add more specializations as necessary */}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Course type*
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="courseType"
                      value="Full time"
                      checked={formData.courseType === "Full time"}
                      onChange={handleChange}
                      className="mr-2 border-blue-400 hover:border-blue-400"
                    />
                    Full time
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="courseType"
                      value="Part time"
                      checked={formData.courseType === "Part time"}
                      onChange={handleChange}
                      className="mr-2 border-blue-400 hover:border-blue-400"
                    />
                    Part time
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="courseType"
                      value="Distance learning"
                      checked={formData.courseType === "Distance learning"}
                      onChange={handleChange}
                      className="mr-2 border-blue-400 hover:border-blue-400"
                    />
                    Correspondence/Distance learning
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Course duration*
                  </label>
                  <select
                    name="startYear"
                    value={formData.startYear}
                    onChange={handleChange}
                    className="block w-full p-2 border rounded-md border-blue-400 hover:border-blue-400"
                  >
                    <option value="">Starting year</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    {/* Add more years */}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    To
                  </label>
                  <select
                    name="endYear"
                    value={formData.endYear}
                    onChange={handleChange}
                    className="block w-full p-2 border rounded-md border-blue-400 hover:border-blue-400"
                  >
                    <option value="">Ending year</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    {/* Add more years */}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Grading system*
                </label>
                <select
                  name="gradingSystem"
                  value={formData.gradingSystem}
                  onChange={handleChange}
                  className="block w-full p-2 border rounded-md border-blue-400 hover:border-blue-400"
                >
                  <option value="">Select grading system</option>
                  <option value="CGPA">CGPA</option>
                  <option value="Percentage">Percentage</option>
                  {/* Add more grading systems as necessary */}
                </select>
              </div>

              <div className="flex justify-end space-x-4">
                <button type="button" className="text-blue-500 ">
                  <label className="font-semibold cursor-pointer" htmlFor="my_modal_7">
                  Cancle
                  </label>
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default UserEducation;
