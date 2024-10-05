import React, { useState } from "react";
import { MdEdit } from "react-icons/md";

const UserSkill = () => {
  const [newskills, setNewSkills] = useState(["Java", "VSM"]);

  const [skills, setSkills] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([
    "Java",
    "Javascript",
    "Java Web Services",
    "Python",
    "React",
    "Node.js",
    "HTML",
    "CSS",
  ]);

  // Handle adding skills
  const addSkill = (skill) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
    setInputValue("");
  };

  // Handle removing a skill
  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  // Filter suggestions based on input
  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="mt-10 bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-gray-800 text-lg font-semibold">Key skills</h2>
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <MdEdit className="text-gray-500 size-5" />
        </button>
      </div>
      <div className="flex gap-2">
        {newskills?.map((skill, index) => (
          <span
            key={index}
            className="inline-flex items-center px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full border border-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div>
            <div className="">
              <h2 className="text-lg font-semibold">Key skills</h2>
              <p className="text-gray-500 my-4">
                Recruiters look for candidates with specific key skills. Add
                them here to appear in searches.
              </p>
            </div>
            {/* Skills Input */}

            <div className="border border-blue-400 rounded-lg p-2 flex flex-wrap items-center">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full mr-2 mb-2"
                >
                  {skill}
                  <button
                    onClick={() => removeSkill(skill)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    &times;
                  </button>
                </span>
              ))}

              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter your key skills"
                className="outline-none flex-1 text-sm p-2"
              />
            </div>
            {/* Suggestions Dropdown */}
            {inputValue && (
              <div className="border border-blue-400 rounded-lg mt-2 max-h-40 overflow-y-auto">
                {filteredSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    onClick={() => addSkill(suggestion)}
                    className="cursor-pointer px-4 py-2 hover:bg-blue-100"
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}

            {/* Modal Footer */}
            <div className="mt-6 flex justify-end">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Save
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UserSkill;
