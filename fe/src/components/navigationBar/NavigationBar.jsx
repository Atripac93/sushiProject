import React from "react";

const NavigationBar = () => {
  return (
    <>
      <div className="container bg-opacity-50 backdrop-blur-md p-4 sticky top-0 z-10">
        <div className="flex items-center justify-around py-3">
          <img
            src="https://media.tenor.com/KfFt6rnLdckAAAAj/zeppsushi-zeppelinsupermercados.gif"
            alt="logoSushi"
            className="rounded-lg w-[10%]"
          />
          <div className="flex">
            <h1 className="font-extrabold text-7xl text-white ">Sushi</h1>
            <h1 className="font-extrabold text-7xl text-black bg-orange-400">
              Hub
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
