import React from "react";
import { Link } from "react-router-dom";
import CategoriesCard from "../../components/navbar/CategoriesCard";
import { Helmet } from "react-helmet-async";

const Categories = () => {
  //filter data by category..
  const designs = datas.filter(
    (design) => design.category == "Design/Creative"
  );
  const telecommunication = datas.filter(
    (design) => design.category == "IT/Telecommunication"
  );
  const hospitality = datas.filter(
    (design) => design.category == "Hospitality/Travel/Tourism"
  );
  return (
    <div className="max-w-screen-xl m-auto  mt-5 mb-20">
      <Helmet>
        <title>Job Hunting | Categories</title>
      </Helmet>
      {/* Design/Creative */}
      <div className="mt-10">
        <h1 className="text-2xl font-bold mb-8">Design/Creative</h1>
        <div className="flex gap-2 flex-wrap">
          {telecommunication?.map((data) => (
            <Link key={data.title}>
              <CategoriesCard
                img={data.image}
                title={data.title}
              ></CategoriesCard>
            </Link>
          ))}
        </div>
      </div>

      {/* IT/Telecommunication */}
      <div className="mt-10">
        <h1 className="text-2xl font-bold mb-8">IT/Telecommunication</h1>
        <div className="flex gap-2 flex-wrap">
          {designs?.map((data) => (
            <Link key={data.title}>
              <CategoriesCard
                img={data.image}
                title={data.title}
              ></CategoriesCard>
            </Link>
          ))}
        </div>
      </div>

      {/* hospitality */}
      <div className="mt-10">
        <h1 className="text-2xl font-bold mb-8">Hospitality/Travel/Tourism</h1>
        <div className="flex gap-2 flex-wrap">
          {hospitality?.map((data) => (
            <Link key={data.title}>
              <CategoriesCard
                img={data.image}
                title={data.title}
              ></CategoriesCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const datas = [
  {
    category: "Design/Creative",
    title: "Senior Graphic Designer",
    image: "https://i.ibb.co.com/Lg5zT0r/undraw-Design-feedback-re-8gtk.png",
  },
  {
    category: "IT/Telecommunication",
    title: "Full Stack Web Developer",
    image: "https://i.ibb.co.com/Lg5zT0r/undraw-Design-feedback-re-8gtk.png",
  },
  {
    category: "Hospitality/Travel/Tourism",
    title: "Hotel Manager",
    image: "https://i.ibb.co.com/Lg5zT0r/undraw-Design-feedback-re-8gtk.png",
  },
  {
    category: "Design/Creative",
    title: "UI/UX Designer",
    image:
      "https://i.ibb.co.com/Lg5zT0r/undraw-Design-feedback-re-8gtk.pnghttps://i.ibb.co.com/TkrGLKK/undraw-Design-team-re-gh2d.png",
  },
  {
    category: "IT/Telecommunication",
    title: "Network Administrator",
    image: "https://i.ibb.co.com/h7HJMQ2/undraw-Art-lover-re-fn8g.png",
  },
  {
    category: "Hospitality/Travel/Tourism",
    title: "Travel Consultant",
    image: "https://i.ibb.co.com/h7HJMQ2/undraw-Art-lover-re-fn8g.png",
  },
  {
    category: "Design/Creative",
    title: "Art Director",
    image: "https://i.ibb.co.com/h7HJMQ2/undraw-Art-lover-re-fn8g.png",
  },
  {
    category: "IT/Telecommunication",
    title: "Cybersecurity Analyst",
    image: "https://i.ibb.co.com/4s0pTCP/undraw-Interior-design-re-7mvn.png",
  },
  {
    category: "Hospitality/Travel/Tourism",
    title: "Tour Guide",
    image: "https://i.ibb.co.com/4s0pTCP/undraw-Interior-design-re-7mvn.png",
  },
  {
    category: "Design/Creative",
    title: "Interior Designer",
    image: "https://i.ibb.co.com/4s0pTCP/undraw-Interior-design-re-7mvn.png",
  },
  {
    category: "IT/Telecommunication",
    title: "Software Engineer",
    image: "https://i.ibb.co.com/4s0pTCP/undraw-Interior-design-re-7mvn.png",
  },
  {
    category: "Hospitality/Travel/Tourism",
    title: "Flight Attendant",
    image: "https://i.ibb.co.com/4s0pTCP/undraw-Interior-design-re-7mvn.png",
  },
  {
    category: "Design/Creative",
    title: "Fashion Designer",
    image: "https://i.ibb.co.com/bv5tfW9/undraw-fashion-photoshoot-mtq8.png",
  },
  {
    category: "IT/Telecommunication",
    title: "DevOps Engineer",
    image: "https://i.ibb.co.com/4s0pTCP/undraw-Interior-design-re-7mvn.png",
  },
  {
    category: "Hospitality/Travel/Tourism",
    title: "Event Planner",
    image: "https://i.ibb.co.com/4s0pTCP/undraw-Interior-design-re-7mvn.png",
  },
];

export default Categories;
