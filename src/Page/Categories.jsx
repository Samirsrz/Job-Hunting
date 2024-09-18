import React from "react";
import img1 from "../assets/CategoriesImage/webDevelopment.png";
import { Link } from "react-router-dom";
import CategoriesCard from "../components/navbar/CategoriesCard";

const Categories = () => {
  return (
    <div className="max-w-screen-xl m-auto  mt-5">
      <div className="mt-4">
        <h1 className="text-2xl font-bold mb-4">Design/Creative</h1>
        <Link>
          <CategoriesCard img={img1} title={"web_development"}></CategoriesCard>
        </Link>
      </div>
      <div className="mt-4">
        <h1 className="text-2xl font-bold mb-4">IT/Telecommunication</h1>
        <Link>
          <CategoriesCard img={img1} title={"web_development"}></CategoriesCard>
        </Link>
      </div>
      <div className="mt-4">
        <h1 className="text-2xl font-bold mb-4">
          Hospitality/ Travel/ Tourism
        </h1>
        <Link>
          <CategoriesCard img={img1} title={"web_development"}></CategoriesCard>
        </Link>
      </div>
    </div>
  );
};

const data = [
  {
    "category": "Design/Creative",
    "title": "Senior Graphic Designer",
    "image": "https://example.com/images/graphic-designer.png"
  },
  {
    "category": "IT/Telecommunication",
    "title": "Full Stack Web Developer",
    "image": "https://example.com/images/web-developer.png"
  },
  {
    "category": "Hospitality/Travel/Tourism",
    "title": "Hotel Manager",
    "image": "https://example.com/images/hotel-manager.png"
  },
  {
    "category": "Design/Creative",
    "title": "UI/UX Designer",
    "image": "https://example.com/images/ui-ux-designer.png"
  },
  {
    "category": "IT/Telecommunication",
    "title": "Network Administrator",
    "image": "https://example.com/images/network-admin.png"
  },
  {
    "category": "Hospitality/Travel/Tourism",
    "title": "Travel Consultant",
    "image": "https://example.com/images/travel-consultant.png"
  },
  {
    "category": "Design/Creative",
    "title": "Art Director",
    "image": "https://example.com/images/art-director.png"
  },
  {
    "category": "IT/Telecommunication",
    "title": "Cybersecurity Analyst",
    "image": "https://example.com/images/cybersecurity-analyst.png"
  },
  {
    "category": "Hospitality/Travel/Tourism",
    "title": "Tour Guide",
    "image": "https://example.com/images/tour-guide.png"
  },
  {
    "category": "Design/Creative",
    "title": "Interior Designer",
    "image": "https://example.com/images/interior-designer.png"
  },
  {
    "category": "IT/Telecommunication",
    "title": "Software Engineer",
    "image": "https://example.com/images/software-engineer.png"
  },
  {
    "category": "Hospitality/Travel/Tourism",
    "title": "Flight Attendant",
    "image": "https://example.com/images/flight-attendant.png"
  },
  {
    "category": "Design/Creative",
    "title": "Fashion Designer",
    "image": "https://example.com/images/fashion-designer.png"
  },
  {
    "category": "IT/Telecommunication",
    "title": "DevOps Engineer",
    "image": "https://example.com/images/devops-engineer.png"
  },
  {
    "category": "Hospitality/Travel/Tourism",
    "title": "Event Planner",
    "image": "https://example.com/images/event-planner.png"
  }
]


export default Categories;
