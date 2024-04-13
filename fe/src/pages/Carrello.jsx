import React, { useState } from "react";

const Carrello = () => {
  const [carrello, setCarrello] = useState([]);

  const aggiungiAlCarrello = (prodotto) => {
    setCarrello([...carrello, prodotto]);
  };

  return (
    <div>
      <h1>Carrello</h1>
      <ul>
        {carrello.map((prodotto, index) => (
          <li key={index}>{prodotto.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Carrello;
