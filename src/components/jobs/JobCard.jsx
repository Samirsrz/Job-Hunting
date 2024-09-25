import { FaStar } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { LuSaveAll } from "react-icons/lu";
import { Link } from "react-router-dom";
const JobCard = ({ job }) => {
  return (
    <div className="text-center flex flex-col rounded-md p-6 bg-white drop-shadow-md">
      <img className="h-12 mx-auto" src={job?.logo} alt={job?.logo} />
      <div className="bg-gray-300/30 p-6 my-4 flex flex-col items-center justify-center rounded-md gap-2">
        <h3 className="font-semibold text-lg">{job?.title}</h3>
        <div className="text-sm text-gray-500">
          <FaStar className="text-yellow-400 inline" /> {job?.rating} |{" "}
          {job?.reviews?.length} reviews
        </div>
      </div>
      <p className="text-sm text-black grow">{job?.des}</p>
      <div className="flex gap-2 justify-center">
        <Link to={`${job?._id}`}>
          <button className="btn btn-sm bg-sky-100 border-sky-300 text-sky-700 hover:bg-sky-300 mt-4">
            View <TbListDetails className="inline" />
          </button>
        </Link>
        <button className="btn btn-sm bg-sky-100 border-sky-300 text-sky-700 hover:bg-sky-300 mt-4">
          Save <LuSaveAll className="inline" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
