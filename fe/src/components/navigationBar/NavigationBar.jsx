import React from "react";

const NavigationBar = () => {
  return (
    <>
      <div className="container bg-opacity-50 backdrop-blur-md p-4 sticky top-0 z-10">
        <div className="flex items-center justify-around py-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQeBcdSBq0pIiL3TUpZHnQoR9Che_W7y7hfxSnm6I8MNKsj0JTgYnPOr0Vr9iSnGtiCoHyryeiG5XTxoQpadGjYSZiXisz4fy88s4UMoUzLf8BxDth-8BF-BH-c7qJlkylLRCIM4OE&usqp=CAc"
            alt="logoSushi"
            className="rounded-lg w-[10%]"
          />
          <div className="flex">
            <h1 className="font-extrabold text-7xl text-white ">Sushi</h1>
            <h1 className="font-extrabold text-7xl text-black bg-orange-400">
              Mania
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
