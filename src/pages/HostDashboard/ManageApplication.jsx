import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import Rating from "react-rating";
import { MdStar, MdStarBorder } from "react-icons/md";
import Swal from "sweetalert2";

const ManageApplication = () => {
  const { user, loading, setLoading } = useAuth();
  const [jobs, setJobs] = useState();
  const axiosSequre = useAxiosSecure();

  //fetch jobs data by email
  //   try {
  //     setLoading(true);

  //     axiosSequre
  //       .get(`/job?email=${user?.email}`)
  //       .then((res) => setJobs(res.data));
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setLoading(false);

  //handle Delete function
  //   const handleDelete = (id) => {
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to delete Post!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         axiosSequre.delete(`/job/${id}`).then((res) => {
  //           if (res.data.deletedCount) {
  //             Swal.fire({
  //               title: "Deleted!",
  //               text: "Your post has been deleted.",
  //               icon: "success",
  //             });
  //           }
  //         });
  //       }
  //     });
  //   };

  return (
    <>
      {loading ? (
        <d>loading...</d>
      ) : (
        <div className="mt-14">
          <div className="flex items-center gap-x-3 mb-5">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
              Total application{" "}
            </h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              {jobs?.length} application
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Job Title</th>
                  <th>Status</th>
                  <th>Teams</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {jobs?.map((job, index) => (
                  <tr key={job._id}>
                    <th>{index + 1} </th>
                    <td>
                      <div className="">
                        <div>
                          <div className="font-bold">{job.title} </div>
                          <div className="text-sm opacity-50">
                            {job.company}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <Rating
                        // onChange={setRating}
                        readonly
                        initialRating={job.rating}
                        className="text-2xl translate-y-[2px] text-yellow-400"
                        emptySymbol={<MdStarBorder />}
                        fullSymbol={<MdStar />}
                      />
                    </td>
                    <td>
                      <div className="flex items-center gap-x-3">
                        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                          {job?.reviews.length} Reviews
                        </span>
                      </div>
                    </td>
                    <th>
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleDelete(job._id)}
                          className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none tooltip tooltip-left"
                          data-tip="Delete"
                        >
                          <RiDeleteBin5Line className="text-xl" />
                        </button>
                        <button
                          className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none tooltip tooltip-left"
                          data-tip="Update"
                        >
                          <GrUpdate className="text-xl" />
                        </button>
                      </div>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageApplication;
