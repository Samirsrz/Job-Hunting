import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";


const ManageApplication = () => {
  const { user, loading, setLoading } = useAuth();
  const axiosSequre = useAxiosSecure();
  const [applications, setApplications] = useState([]);

  //fetch jobs data by email
  try {
    setLoading(true);
    axiosSequre
      .get(`/applications-host?email=${user?.email}`)
      .then((res) => setApplications(res.data));
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
  //handle Delete function
  const handleDelete = (id) => {
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
        // here get delet data
        axiosSequre.delete(`/application/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  //Resume downloader
  function handleFileDownload(fileId) {
    const url = `${import.meta.env.VITE_API_URL}/resume/${fileId}`;
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      {loading ? (
        <d>loading...</d>
      ) : (
        <div className="overflow-x-auto mt-14">
          <div className="flex items-center gap-x-3 mb-5">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Total Application
            </h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              {applications?.length} application
            </span>
          </div>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Job Title</th>
                <th>Status</th>
                <th>Resume</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {applications?.map((application, index) => (
                <tr key={application._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">
                          {application.applicant.name}
                        </div>
                        <div className="text-sm opacity-50">
                          {application.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {application.jobTitle}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {application.company}
                    </span>
                  </td>
                  <td>
                    <select className="select select-info select-sm max-w-xs">
                      <option disabled selected>
                        {application.status}
                      </option>
                      <option>View</option>
                      <option>reject</option>
                    </select>
                  </td>
                  <th>
                    <button
                      onClick={() => handleFileDownload(application.resume)}
                      className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400"
                    >
                      View
                    </button>
                  </th>

                  <th>
                    <button
                      onClick={() => handleDelete(application._id)}
                      className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none tooltip tooltip-left"
                      data-tip="Delete"
                    >
                      <RiDeleteBin5Line className="text-xl" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ManageApplication;
