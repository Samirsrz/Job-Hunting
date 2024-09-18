import React from "react";

const CategoriesCard = ({ img, title }) => {
  return (
    <div>
      <div className="card bg-base-100 w-64 h-60 shadow-xl border border-primary hover:scale-105 transform hover:ease-in duration-300">
        <figure>
          <img className="size-full text-primary" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
