import React, { useState } from "react";
import axios from "axios";
import { GrFormUpload } from "react-icons/gr";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ResumeUploader = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadDate, setUploadDate] = useState(null);
  const [fileId, setFileId] = useState(null); // To store MongoDB file ID

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

  //downloade file
  const handleFileDownload = () => {
    const url = URL.createObjectURL(uploadedFile);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", uploadedFile.name);
    document.body.appendChild(link);
    link.click();
  };

  //handel handleResumeDelete
  const handleResumeDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  //uploade fiel in Db
  const handleFileUpload = async () => {
    if (!uploadedFile) return;

    const formData = new FormData();
    formData.append("resume", uploadedFile);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // console.log(response.data);
      setFileId(response.data._id); // Store the file ID from MongoDB
      toast.success("resume uploaded successfully!");
    } catch (error) {
      console.error("There was an error uploading the file:", error);
    }
  };

  //handele cancle uploade
  const handleFileDelete = () => {
    setUploadedFile(null);
    setUploadDate(null);
    setFileId(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-5">
      <h2 className="text-lg font-bold mb-2">Resume</h2>
      <p className="text-sm text-gray-500 mb-4">
        Your resume is the first impression you make on potential employers.
        Craft it carefully to secure your desired job or internship.
      </p>

      <div className="mb-4 flex justify-between">
        <div>
          <p className="font-medium text-blue-600">Uploade file name</p>
          <p className="text-sm text-gray-500">Uploaded on {uploadDate}</p>
        </div>

        <div className="flex space-x-4 mt-2">
          <button onClick={handleFileDownload} className="text-blue-600">
            <MdOutlineFileDownload className="text-2xl" />
          </button>
          <button onClick={handleResumeDelete} className="text-red-600">
            <RiDeleteBinLine />
          </button>
        </div>
      </div>

      {uploadedFile ? (
        <div className="mb-4">
          <p className="font-medium text-blue-600">{uploadedFile.name}</p>
          <p className="text-sm text-gray-500">Uploaded on {uploadDate}</p>

          <div className="flex space-x-4 mt-2">
            <button
              onClick={handleFileUpload}
              className="btn text-white bg-blue-600 flex items-center hover:bg-white hover:text-blue-400"
            >
              <GrFormUpload className="text-xl" />
              Upload
            </button>
            <button
              onClick={handleFileDelete}
              className="text-red-600 btn flex items-center"
            >
              <RxCrossCircled className="text-xl" />
              Delete
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
