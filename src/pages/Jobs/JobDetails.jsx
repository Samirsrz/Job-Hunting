import { Link, useParams } from "react-router-dom";
// import Rating from "react-rating";
import moment from "moment";
import { FaLocationDot, FaClockRotateLeft, FaMessage } from "react-icons/fa6";
import { LuFileType } from "react-icons/lu";
import {
  MdOutlineCategory,
  MdOutlineHomeWork,
  MdGroupAdd,
  MdDelete,
  MdStarBorder,
  MdStar,
} from "react-icons/md";
import { GiRoundStar, GiCash } from "react-icons/gi";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { axiosCommon } from "../../hooks/useAxiosCommon";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import JobCard from "../../components/jobs/JobCard";
import { Helmet } from "react-helmet-async";
import { Autoplay, EffectCards } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import getRandomColor from "../../libs/getRandomColor";
import Rating from "react-rating";

const JobDetails = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [existingReview, setExistingReview] = useState({});
  const [relatedJobs, setRelatedJobs] = useState([]);
  const [rating, setRating] = useState(5);

  useEffect(() => {
    setExistingReview(
      job?.reviews?.find((review) => review.email === user.email)
    );
  }, [job, user]);

  useEffect(() => {
    axiosSecure.get(`/jobs/${id}`).then((data) => setJob(data.data.data));
  }, [id, axiosSecure]);

  useEffect(() => {
    axiosCommon
      .get(`/jobs/${id}/related`)
      .then((data) => setRelatedJobs(data.data.data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    document.getElementById("apply_modal").close();
    const applicantName = form.applicantName.value;
    const file = form.resumeFile.files[0];
    const coverLetter = form.coverLetter.value;
    const formData = new FormData();
    formData.append("applicantName", applicantName);
    formData.append("file", file);

    if (coverLetter) {
      formData.append("coverLetter", coverLetter);
    }

    axiosSecure
      .post(`/jobs/${id}/apply`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(({ data }) => {
        toast.success(data.message);
        axiosSecure.get(`/jobs/${id}`).then((data) => setJob(data.data.data));
        form.reset();
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const handleReview = (e) => {
    e.preventDefault();
    document.getElementById("review_modal").close();
    const review = e.target.review.value;

    const reviewData = {
      review,
      rating,
    };

    e.target.reset();

    axiosSecure
      .post(`/jobs/${id}/review`, reviewData)
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

  const handleDeleteReview = () => {
    axiosSecure
      .delete(`/jobs/${id}/review`)
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
      <Helmet>
        <title>{job?.title ?? "Job Details"} | Job hunting</title>
      </Helmet>
      <div className="bg-gray-100 rounded-md lg:p-8 p-4 lg:m-10 m-4 drop-shadow-sm">
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
              <button
                onClick={() =>
                  document.getElementById("show_review_modal").showModal()
                }
                className="link-hover"
              >
                <span>
                  <GiRoundStar className="inline relative top-[-2px] mr-1" />
                  {(job?.rating ?? 0).toFixed(1)}
                </span>{" "}
                |<span> {job?.reviews?.length ?? 0} reviews</span>
              </button>
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
            <button
              onClick={() =>
                document.getElementById("review_modal").showModal()
              }
              className="btn btn-sm md:btn-md bg-sky-100 border-sky-300 text-sky-700 hover:text-sky-900 hover:bg-sky-300"
            >
              {existingReview ? "Update your" : "Give a"} review!{" "}
              <FaMessage className="inline" />
            </button>
          </div>
        </div>
      </div>
      {/* related jobs */}
      {relatedJobs?.length ? (
        <div className="bg-gray-100 rounded-md lg:p-8 p-4 lg:m-10 m-4 drop-shadow-sm">
          <h3 className="text-3xl font-semibold">Related Jobs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-between gap-4 mt-6">
            {relatedJobs?.map((job, idx) => (
              <JobCard {...{ job }} key={idx} />
            ))}
          </div>
        </div>
      ) : (
        <p className="lg:m-10 m-4">No related jobs found!</p>
      )}

      <dialog id="apply_modal" className="modal">
        <form
          onSubmit={handleSubmit}
          method="dialog"
          className="modal-box w-full max-w-3xl"
        >
          <h3 className="font-bold text-lg">Apply for the Job</h3>

          <div className="form-control my-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="applicantName"
              defaultValue={user?.displayName}
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control my-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              defaultValue={user?.email}
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control my-4">
            <label className="label">
              <span className="label-text">Upload Resume</span>
            </label>
            <input
              name="resumeFile"
              type="file"
              className="file-input file-input-bordered file-input-primary w-full border-dashed"
            />
          </div>

          <div className="form-control my-4">
            <label className="label">
              <span className="label-text">Cover Letter</span>
            </label>
            <textarea
              name="coverLetter"
              className="textarea textarea-bordered w-full h-48"
              placeholder="Write your cover letter here..."
            ></textarea>
          </div>

          <div className="modal-action">
            <button type="submit" className="btn btn-primary ">
              Apply
            </button>
          </div>
        </form>
      </dialog>

      <dialog id="show_review_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">All reviews!</h3>
          <div className="mt-6">
            <Swiper
              autoplay={{
                delay: 900,
                disableOnInteraction: false,
              }}
              effect={"cards"}
              grabCursor={true}
              modules={[Autoplay, EffectCards]}
              className="w-full lg:w-[300px] drop-shadow-md"
            >
              {job?.reviews?.map(({ email, review, rating }, idx) => (
                <SwiperSlide
                  key={idx}
                  style={{ backgroundColor: getRandomColor() }}
                  className="rounded-lg"
                >
                  <div className="p-2 bg-black/30 text-white">
                    <h1 className="border-b border-white pb-2 mb-2 font-bold text-center">
                      {email}
                    </h1>
                    <p>
                      <Rating
                        readonly
                        initialRating={rating}
                        className="text-xl translate-y-[2px]"
                        emptySymbol={<MdStarBorder />}
                        fullSymbol={<MdStar />}
                      />
                    </p>
                    <h1>{review}</h1>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </dialog>
      <dialog id="review_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">
            {existingReview ? "Update" : "Give"} your review!
          </h3>
          <form onSubmit={handleReview} className="flex flex-col gap-4 mt-4">
            <label className="input input-bordered flex items-center gap-2">
              Review
              <input
                defaultValue={existingReview?.review}
                type="text"
                className="grow"
                placeholder="Write your Review"
                name="review"
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Rating
              <Rating
                onChange={setRating}
                initialRating={existingReview?.rating || rating}
                className="text-xl translate-y-[2px]"
                emptySymbol={<MdStarBorder />}
                fullSymbol={<MdStar />}
              />
            </label>
            <div className="flex gap-3">
              <button className="btn btn-primary grow" type="submit">
                Review
              </button>
              {existingReview && (
                <button
                  onClick={handleDeleteReview}
                  className="btn btn-error text-white grow"
                >
                  Remove
                  <MdDelete className="inline" />
                </button>
              )}
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default JobDetails;
