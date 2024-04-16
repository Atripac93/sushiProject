import React, { useState } from "react";
import NavigationBar from "../components/navigationBar/NavigationBar";

const Login = () => {
  const [formData, setFormData] = useState({});
  console.log(formData);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <div className="container ">
        <NavigationBar />
        <form
          // onSubmit={onSubmit}
          className="flex flex-col items-center gap-5 mt-[80px] p-6"
        >
          <img
            className="rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/240px-Sushi_platter.jpg"
            alt="sushiLogo"
          />
          <input
            onChange={onChangeInput}
            name="email"
            type="text"
            placeholder="email..."
            className="rounded hover:w-[200px]  "
          />
          <input
            onChange={onChangeInput}
            name="password"
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
