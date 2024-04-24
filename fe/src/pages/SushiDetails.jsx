import React from "react";
import { useParams, Link } from "react-router-dom";
import sushiData from "../list/sushiData";

const SushiDetails = ({ addToCart }) => {
  const { id } = useParams();
  const sushiItem = sushiData.find((card) => card.id === parseInt(id));

  const handleAddToCart = () => {
    if (typeof addToCart === "function") {
      addToCart(sushiItem);
    } else {
      console.error("addToCart is not a function!");
    }
  };

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
      <div className="flex gap-5">
        <Link to="/carrello">
          <button
            onClick={handleAddToCart}
            className="bg-orange-400 text-black rounded-lg w-[200px] p-2 font-bold hover:scale-125 transition delay-100"
          >
            Go to cart!
          </button>
        </Link>

        <Link to={"/Home"}>
          <button className="bg-orange-400 text-black rounded-lg w-[200px] p-2 font-bold hover:scale-125 transition delay-100">
            Come back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SushiDetails;
