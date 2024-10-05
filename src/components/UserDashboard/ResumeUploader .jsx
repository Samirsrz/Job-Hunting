import React, { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const ResumeUploader = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadDate, setUploadDate] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      // 2MB file size limit
      setUploadedFile(file);
      setUploadDate(new Date().toLocaleDateString());
    } else {
      alert("File size must be less than or equal to 2MB");
    }
  };

  const handleFileDelete = () => {
    setUploadedFile(null);
    setUploadDate(null);
  };

  const handleFileDownload = () => {
    const url = URL.createObjectURL(uploadedFile);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", uploadedFile.name);
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-5">
      <h2 className="text-lg font-bold mb-2">Resume</h2>
      <p className="text-sm text-gray-500 mb-4">
        Your resume is the first impression you make on potential employers.
        Craft it carefully to secure your desired job or internship.
      </p>

      {uploadedFile ? (
        <div className="mb-4 flex justify-between">
          <div>
            <p className="font-medium text-blue-600">{uploadedFile.name}</p>
            <p className="text-sm text-gray-500">Uploaded on {uploadDate}</p>
          </div>

          <div className="flex space-x-4 mt-2">
            <button
              onClick={handleFileDownload}
              className="text-blue-600 hover:underline flex items-center"
            >
              <MdOutlineFileDownload />
            </button>
            <button
              onClick={handleFileDelete}
              className="text-red-600 hover:underline flex items-center"
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
      ) : (
        <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg text-center">
          <label
            htmlFor="resumeUpload"
            className="cursor-pointer text-blue-600 hover:underline"
          >
            Update resume
          </label>
          <input
            type="file"
            id="resumeUpload"
            accept=".doc,.docx,.rtf,.pdf"
            className="hidden"
            onChange={handleFileChange}
          />
          <p className="text-sm text-gray-500 mt-2">
            Supported formats: doc, docx, rtf, pdf, up to 2MB
          </p>
        </div>
      )}
    </div>
  );
};

export default ResumeUploader;
