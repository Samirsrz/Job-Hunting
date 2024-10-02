import { Link, useParams } from "react-router-dom";
import moment from "moment";
import { FaLocationDot, FaClockRotateLeft } from "react-icons/fa6";
import { LuFileType } from "react-icons/lu";
import {
  MdOutlineCategory,
  MdOutlineHomeWork,
  MdGroupAdd,
  MdDelete,
} from "react-icons/md";
import { GiRoundStar, GiCash } from "react-icons/gi";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const JobDetails = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    axiosSecure.get(`/jobs/${id}`).then((data) => setJob(data.data.data));
  }, [id, axiosSecure]);

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("apply_modal").close();
    const applicantName = e.target.applicantName.value;
    const resumeLink = e.target.resumeLink.value;
    const coverLetter = e.target.coverLetter.value;
    const application = { applicantName, resumeLink };
    if (coverLetter) {
      application.coverLetter = coverLetter;
    }
    e.target.reset();

    axiosSecure
      .post(`/jobs/${id}/apply`, application)
      .then(({ data }) => {
        toast.success(data.message);
        axiosSecure.get(`/jobs/${id}`).then((data) => setJob(data.data.data));
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const handleCancel = () => {
    axiosSecure
      .delete(`/jobs/${id}/apply`)
      .then(({ data }) => {
        toast.success(data.message);
        axiosSecure.get(`/jobs/${id}`).then((data) => setJob(data.data.data));
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div>
      <div className="bg-gray-100 rounded-md lg:p-8 p-4 lg:m-10 m-4  drop-shadow-sm">
        <div className="flex flex-col md:flex-row gap-6 md:items-center border-b md:mb-6 mb-2 border-gray-400 md:pb-6 pb-4">
          <img
            src={job?.logo}
            alt={`logo for ${job?.title}`}
            className="md:size-52 size-24 bg-white rounded-md aspect-square mx-auto md:mx-0"
          />
          <div className="flex flex-col justify-evenly">
            <h1 className="font-semibold md:text-4xl md:mb-1 lg:text-5xl text-3xl lg:mb-2 text-sky-600">
              {job?.title}
            </h1>
            <h3 className="font-semibold md:text-xl text-lg">
              <MdOutlineHomeWork className="inline mr-1" />
              {job?.company}
            </h3>
            <p>
              <GiCash className="inline" /> <span>{job?.salary}</span>
            </p>
            <div>
              <span>
                <GiRoundStar className="inline" /> {job?.rating}
              </span>{" "}
              |<span> {job?.reviews?.length ?? 0} reviews</span>
            </div>
            <p>
              <MdOutlineCategory className="inline" />{" "}
              <Link className="inline link-hover">{job?.category}</Link>
            </p>
            <p>
              <LuFileType className="inline" />{" "}
              <Link className="inline link-hover">{job?.type}</Link>
            </p>
            <p>
              <FaLocationDot className="inline" />{" "}
              <Link className="inline link-hover">{job?.location}</Link>
            </p>
            <p>
              <FaClockRotateLeft className="inline" />{" "}
              <span className="inline">
                {moment(job?.date, "YYYY-MM-DD").fromNow()}
              </span>
            </p>
          </div>
        </div>
        <div>
          <p>{job?.description}</p>
          <div className="mt-2 md:mt-4 gap-2 flex">
            <button
              disabled={job?.applied}
              onClick={() => document.getElementById("apply_modal").showModal()}
              className="btn btn-sm md:btn-md bg-sky-100 border-sky-300 text-sky-700 hover:text-sky-900 hover:bg-sky-300"
            >
              {job?.applied ? "Applied" : "Apply"}{" "}
              <MdGroupAdd className="inline" />
            </button>
            {job?.applied && (
              <button
                disabled={!job?.applied}
                onClick={handleCancel}
                className="btn btn-sm md:btn-md bg-sky-100 border-sky-300 text-sky-700 hover:text-sky-900 hover:bg-sky-300"
              >
                Cancel
                <MdDelete className="inline" />
              </button>
            )}
          </div>
        </div>
      </div>
      <dialog id="apply_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Apply for jobs!</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            <label className="input input-bordered flex items-center gap-2">
              Name
              <input
                defaultValue={user?.displayName}
                type="text"
                className="grow"
                placeholder="Applicant Name"
                name="applicantName"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Resume
              <input
                type="text"
                className="grow"
                placeholder="Resume Link"
                name="resumeLink"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Letter
              <input
                type="text"
                className="grow"
                placeholder="Cover Letter"
                name="coverLetter"
              />
            </label>
            <button className="btn btn-primary" type="submit">
              Apply
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default JobDetails;
