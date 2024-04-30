import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <img
        className="w-50 m-3"
        alt="errorPage"
        src="https://media.tenor.com/0OekmMiUoqAAAAAM/404-error.gif"
      />

      <Link to={"/"}>
        <button className="bg-orange-400 text-black rounded-lg w-[200px] p-2 font-bold hover:scale-125 transition delay-100">
          Come back to Login
        </button>
      </Link>
    </>
  );
};

export default ErrorPage;
