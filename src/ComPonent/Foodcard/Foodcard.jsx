import React from "react";

const Foodcard = ({ item }) => {
  const { name, recipe, price, category, image } = item;
  return (
    <div>
      <div className="card bg-base-100 w-full shadow-sm">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <h4 className="absolute right-1 mr-4 mt-4 px-4 bg-slate-800 text-white hover:bg-orange-500">${price}</h4>
        <div className="card-body text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline bg-slate-500 border-0 border-b-4 border-orange-400">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foodcard;
