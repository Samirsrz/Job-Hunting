import { useState, useEffect } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const ManageApplication = () => {
  const { user, loading, setLoading } = useAuth();
  const axiosSequre = useAxiosSecure();
  const [applications, setApplications] = useState([]);

  // Fetch jobs data by email inside useEffect
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setLoading(true);
        const res = await axiosSequre.get(
          `/applications-host?email=${user?.email}`
        );
        setApplications(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchApplications();
    }
  }, [user, axiosSequre, setLoading]);

  // Handle Delete function
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
        axiosSequre.delete(`/application/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            setApplications((prev) => prev.filter((app) => app._id !== id));
          }
        });
      }
    });
  };

  // Resume downloader
  const handleFileDownload = (fileId) => {
    const url = `${import.meta.env.VITE_API_URL}/resume/${fileId}`;
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Update application status
  const handleStatus = (id) => {
    const status = document.getElementById(`status-${id}`).value;
    console.log("Updated status for ID:", id, "Status:", status);

    //  now send the status update to the server
    axiosSequre
      .put(`/applications/${id}`, { status })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          setApplications((prev) =>
            prev.map((app) => (app._id === id ? { ...app, status } : app))
          );
          toast.success("update");
        }
      })
      .catch((error) => {
        console.log("Error updating status:", error);
      });
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="overflow-x-auto mt-14">
          <div className="flex items-center gap-x-3 mb-5">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Total Application
            </h2>
            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              {applications?.length} application(s)
            </span>
          </div>
          <table className="table">
            {/* Table head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Job Title</th>
                <th>Status</th>
                <th>Resume</th>
                <th>Actions</th>
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
                          {application?.applicant?.name}
                        </div>
                        <div className="text-sm opacity-50">
                          {application?.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {application?.jobTitle}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {application?.company}
                    </span>
                  </td>
                  <td>
                    <select
                      onChange={() => handleStatus(application?._id)}
                      name="status"
                      id={`status-${application._id}`}
                      className="select select-info select-sm max-w-xs"
                      defaultValue={application?.status}
                    >
                      <option value="pending">pending</option>
                      <option value="View">View</option>
                      <option value="Reject">Reject</option>
                    </select>
                  </td>
                  <td>
                    <button
                      onClick={() => handleFileDownload(application?.resume)}
                      className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400"
                    >
                      View
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(application?._id)}
                      className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none tooltip tooltip-left"
                      data-tip="Delete"
                    >
                      <RiDeleteBin5Line className="text-xl" />
                    </button>
                  </td>
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
