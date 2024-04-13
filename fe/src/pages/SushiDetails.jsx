import React from "react";
import { useParams } from "react-router-dom";
import sushiData from "../list/sushiData";
import { Link } from "react-router-dom";
const SushiDetails = () => {
  const { id } = useParams();
  const sushiItem = sushiData.find((card) => card.id === parseInt(id));

  return (
    <div>
      <h1 className="mt-4">{sushiItem.name}</h1>
      <div className="flex flex-col px-5">
        <img src={sushiItem.image} alt={sushiItem.name} className="w-60 h-60" />
        <p>{sushiItem.description}</p>
        <p>Price: €{sushiItem.price}</p>
      </div>
      <div className="flex gap-2">
        <Link to={"/carrello"}>
          <button className="  bg-red-900 text-black rounded-lg w-[200px] font-mono p-2">
            Add to basket
          </button>
        </Link>
        <Link to={`/sushi/${id}`}></Link>
      </div>
    </div>
  );
};

export default SushiDetails;
