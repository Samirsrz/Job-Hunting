import { FaStar, FaRegTrashAlt } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { LuSaveAll } from "react-icons/lu";
import { Link } from "react-router-dom";
import {
  localAddJob,
  localJobExists,
  localDeleteJob,
} from "../../libs/localJobs";
import { useEffect, useState } from "react";
import { useSavedJobs } from "../../RTK/features/savedJobSlice";
const JobCard = ({ job }) => {
  const [exist, setExist] = useState(false);
  const { updateSavedJobs } = useSavedJobs();

  useEffect(() => {
    setExist(localJobExists(job?._id));
  }, []);

  return (
    <div className="text-center flex flex-col rounded-md p-6 bg-white drop-shadow-md dark:bg-gray-600">
      <img className="h-12 mx-auto" src={job?.logo} alt={job?.logo} />
      <div className="bg-gray-300/30 p-6 my-4 flex flex-col items-center justify-center rounded-md gap-2">
        <h3 className="font-semibold text-lg dark:text-white">{job?.title}</h3>
        <div className="text-sm text-gray-500 dark:text-gray-300">
          <FaStar className="text-yellow-400 inline" />
          {(job?.rating ?? 0).toFixed(1)} | {job?.reviews?.length} reviews
        </div>
      </div>
      <p className="text-sm text-black grow">{job?.des}</p>
      <div className="flex gap-2 justify-center">
        <Link to={`/jobs/${job?._id}`}>
          <button className="btn btn-sm bg-sky-100 border-sky-300 text-sky-700 hover:bg-sky-300 mt-4">
            View <TbListDetails className="inline" />
          </button>
        </Link>
        {exist ? (
          <button
            onClick={() => {
              localDeleteJob(job?._id);
              setExist(false);
              updateSavedJobs();
            }}
            className="btn btn-sm bg-red-100 border-red-300 text-red-700 hover:bg-red-300 mt-4"
          >
            Unsaved <FaRegTrashAlt className="inline" />
          </button>
        ) : (
          <button
            onClick={() => {
              localAddJob(job?._id);
              setExist(true);
              updateSavedJobs();
            }}
            className="btn btn-sm bg-sky-100 border-sky-300 text-sky-700 hover:bg-sky-300 mt-4"
          >
            Save <LuSaveAll className="inline" />
          </button>
        )}
      </div>
    </div>
  );
};

export default JobCard;
