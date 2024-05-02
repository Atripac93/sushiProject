import React from "react";
import { Link } from "react-router-dom";

const PayPage = () => {
  return (
    <>
      <div className="container flex flex-col">
        <h1 className="m-10 text-orange-400">
          Your payment has been successful!!!!
        </h1>
        ;
        <img
          src="https://media.tenor.com/JEdtUzCTmGcAAAAM/motorcycle-moto.gif"
          alt="order"
          className="h-[400px] w-[800px]"
        />
        <div className="font-bold text-white mt-5 font-serif">
          your order has been processed correctly and is incoming!!!
        </div>
      </div>
      <Link to={-3}>
        <button className="mt-10">to Home page</button>
      </Link>
    </>
  );
};

export default PayPage;
