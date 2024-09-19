import { FaStar } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
const JobCard = ({ job }) => {
  return (
    <div className="text-center flex flex-col rounded-md p-6 bg-white drop-shadow-md">
      <img
        className="h-12 mx-auto"
        src="https://img.naukimg.com/logo_images/groups/v2/42932.gif" //ToDo: replace src={job?.logo}
        alt={job?.logo}
      />
      <div className="bg-gray-300/30 p-6 my-4 flex flex-col items-center justify-center rounded-md gap-2">
        <h3 className="font-semibold text-lg">{job?.title}</h3>
        <div className="text-sm text-gray-500">
          <FaStar className="text-yellow-400 inline" /> {job?.rating} |{" "}
          {job?.review} reviews
        </div>
      </div>
      <p className="text-sm text-black grow">{job?.des}</p>
      <button className="btn btn-sm w-fit mx-auto bg-sky-100 border-sky-300 text-sky-700 hover:bg-sky-300 mt-4">
        View <TbListDetails className="inline" />
      </button>
    </div>
  );
};

export default JobCard;
