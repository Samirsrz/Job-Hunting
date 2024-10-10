
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";
const CommonJobCard = ({card}) => {
    return (
        <div>
            <div  className="p-4">
                <div className="border text-center space-y-3 p-4 w-full rounded-xl hover:shadow-lg duration-200">
                    <div id="company-icon" className="flex justify-center">
                        <img
                            src={card.logo}
                            alt="title image"
                            className="w-full h-20 object-contain"

                        />
                    </div>
                    <div
                        id="company-title"
                        className="p-4 rounded-lg flex flex-col gap-2 items-center"
                        style={{ background: "rgb(247, 248, 251)" }}
                    >
                        <h1>{card.companyName}</h1>
                        <div className="flex items-center opacity-75">
                            <FaStar className="text-yellow-500" /> <span>{card.ratings}</span>
                            <TbMinusVertical />
                            <p>4K+ reviews</p>
                        </div>
                    </div>
                    <div id="company-content" className="flex items-center flex-col min-h-[50px]">
                        <p className="">{card.company_title}.</p>
                    </div>
                    <div>
                        <Link
                            to={`/jobs/viewAllJobsCompany/${card._id}`}
                            className="w-full h-full"
                        >
                            <button className="relative rounded-3xl border-none hover:shadow-lg duration-300 text-blue-600 bg-blue-100 font-semibold px-4 py-2">
                                View jobs
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommonJobCard;