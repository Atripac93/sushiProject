import React from "react";
import NavigationBar from "../components/navigationBar/NavigationBar";

const Login = () => {
  return (
    <>
      <div className="container ">
        <NavigationBar />
        <form className="flex flex-col items-center gap-5 mt-[100px]">
          <img
            className="rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/240px-Sushi_platter.jpg"
            alt="sushiLogo"
          />
          <input
            type="text"
            placeholder="nome utente..."
            className="rounded hover:w-[200px]  "
          />
          <input
            type="password"
            placeholder="password..."
            className="rounded hover:w-[200px]  "
          />
          <button
            type="btn"
            className="bg-violet-500 w-[200px] rounded-lg hover:bg-violet-600 active:bg-violet-700"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
