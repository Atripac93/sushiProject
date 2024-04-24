import React from "react";
import { useParams } from "react-router-dom";
import sushiData from "../list/sushiData";
import { Link } from "react-router-dom";

const SushiDetails = () => {
  const { id } = useParams();
  const sushiItem = sushiData.find((card) => card.id === parseInt(id));

  return (
    <div className="container flex flex-col items-baseline gap-5">
      <h1 className="mt-2 p-3 bg-orange-400 font-bold text-black">
        {sushiItem.name}
      </h1>
      <div className="flex flex-col font-bold">
        <img src={sushiItem.image} alt={sushiItem.name} className="w-60" />
        <p className="mt-3 text-black bg-orange-400 p-5">
          {sushiItem.description}
        </p>
        <p className="text-orange-400 bg-black p-1">
          Price: €{sushiItem.price}
        </p>
      </div>
      <div className="flex gap-3">
        <Link to={"/carrello"}>
          <button className=" bg-orange-400 text-black rounded-lg w-[200px] p-2 font-bold hover:scale-125 transtition delay-150">
            Add to basket
          </button>
        </Link>
        <Link to={`/sushi/${id}`}></Link>
        <div>
          <Link to={"/home"}>
            <button className=" bg-orange-400 text-black rounded-lg p-2 font-bold hover:scale-125 mb-3">
              choose other sushi
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SushiDetails;
