import React from "react";

const CategoriesCard = ({ img, title }) => {
  return (
    <div>
      <div className="card bg-base-100 w-64 shadow-xl border border-primary">
        <figure>
          <img className="w-96 text-primary" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
