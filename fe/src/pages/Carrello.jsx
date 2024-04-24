import React, { useState } from "react";
import sushiData from "../list/sushiData";
import { Link } from "react-router-dom";
const Carrello = () => {
  const [carrello, setCarrello] = useState([]);

  const aggiungiAlCarrello = (prodotto) => {
    setCarrello([...carrello, prodotto]);
  };

  const rimuoviDalCarrello = (index) => {
    const nuovoCarrello = [...carrello];
    nuovoCarrello.splice(index, 1);
    setCarrello(nuovoCarrello);
  };

  return (
    <>
      <div className="container">
        <div className="flex items-center">
          <h1 className="font-bold text-black bg-orange-400 p-3 m-3 w-[300px]">
            Sushi Cart
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-16 h-16"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>

        <div className="flex justify-center items-center flex-col-reverse px-5 py-5 ">
          <ul className="flex gap-5 flex-col items-center">
            {carrello.map((prodotto, index) => (
              <li
                className="flex gap-5 flex-col mt-4 text-6xl font-bold text-gray-800"
                key={index}
              >
                <div className="flex justify-center">
                  {prodotto.name}
                  {prodotto.price}
                </div>

                <button
                  className="bg-orange-400 text-black font-bold p-1 text-2xl w-[200px]"
                  onClick={() => rimuoviDalCarrello(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <footer className="flex gap-5">
            <small className="text-white text-2xl font-bold">
              Qty: {carrello.length}
            </small>

            <button
              className="text-white text-2xl font-bold"
              onClick={() => aggiungiAlCarrello(sushiData[1])}
            >
              +
            </button>
          </footer>
        </div>
        <div className="flex gap-5 ">
          <Link>
            <button className="bg-orange-400 text-black rounded-lg w-[200px] p-2 font-bold hover:scale-125 transition delay-100">
              Go to pay
            </button>
          </Link>

          <Link to={"/SushiDetails "}>
            <button className="bg-orange-400 text-black rounded-lg w-[200px] p-2 font-bold hover:scale-125 transition delay-100">
              Come back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Carrello;
