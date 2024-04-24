import React, { useState } from "react";

const Carrello = () => {
  const [carrello, setCarrello] = useState([]);

  return (
    <div className="flex px-5 py-5 justify-center items-center">
      <h1 className="font-bold text-black bg-orange-400 p-3">Sushi Cart</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-20 h-20 text-orange-400"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>

      <ul>
        {carrello.map((prodotto, index) => (
          <li key={index}>{prodotto.nome}</li>
        ))}
      </ul>
      <footer className="flex gap-3">
        <small className="text-white">Qty: 1</small>
        <button className="text-white">+</button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </footer>
    </div>
  );
};

export default Carrello;
