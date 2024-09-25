import { Link, useParams } from "react-router-dom";
import moment from "moment";
import { FaLocationDot, FaClockRotateLeft } from "react-icons/fa6";
import { LuFileType } from "react-icons/lu";
import {
  MdOutlineCategory,
  MdOutlineHomeWork,
  MdGroupAdd,
} from "react-icons/md";
import { GiRoundStar, GiCash } from "react-icons/gi";
import { useEffect, useState } from "react";
import axios from "axios";
const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8000/jobs/${id}`)
      .then((data) => setJob(data.data.data));
  }, [id]);

  return (
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
        <div className="mt-2 md:mt-4">
          <button className="btn btn-sm md:btn-md bg-sky-100 border-sky-300 text-sky-700 hover:text-sky-900 hover:bg-sky-300">
            Apply <MdGroupAdd className="inline" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
