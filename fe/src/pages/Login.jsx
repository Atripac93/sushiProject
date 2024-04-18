import React, { useState } from "react";
import NavigationBar from "../components/navigationBar/NavigationBar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await fetch("http://localhost:3010/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (resp.ok) {
        console.log("Login success");
        let data = await resp.json();
        localStorage.setItem("auth", JSON.stringify(data.token));
        navigate("/home");
        setFormData({ email: "", password: "" });
      } else {
        throw new Error("Login failed");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("Credenziali non valide. Riprova.");
    }
  };

  return (
    <>
      <div className="container ">
        <NavigationBar />
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center gap-3 mt-[80px] p-6"
        >
          <img
            className="rounded-full hover:rotate-180"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/240px-Sushi_platter.jpg"
            alt="sushiLogo"
          />
          <input
            onChange={onChangeInput}
            name="email"
            type="text"
            placeholder="email..."
            className="rounded p-2 bg-gray-300  border-3 border-black hover:w-[200px]  "
            value={formData.email}
          />
          <input
            onChange={onChangeInput}
            name="password"
            type="password"
            placeholder="password..."
            className="rounded p-2 border-3 bg-gray-300  border-black  hover:w-[200px]  "
            value={formData.password}
          />
          <button
            type="submit"
            className="bg-orange-400 w-[200px] rounded-lg font-bold hover:bg-orange-500"
          >
            Login
          </button>
          {error && <div className="text-red-500">{error}</div>}{" "}
        </form>
      </div>
    </>
  );
};

export default Login;
