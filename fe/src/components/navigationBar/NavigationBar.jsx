import React from "react";

const NavigationBar = () => {
  return (
    <>
      <div className="container ">
        <div className="flex items-center justify-around px-4 py-5">
          <img
            src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQeBcdSBq0pIiL3TUpZHnQoR9Che_W7y7hfxSnm6I8MNKsj0JTgYnPOr0Vr9iSnGtiCoHyryeiG5XTxoQpadGjYSZiXisz4fy88s4UMoUzLf8BxDth-8BF-BH-c7qJlkylLRCIM4OE&usqp=CAc"
            alt="logoSushi"
            className="rounded-lg"
          />
          <h1 className="font-extrabold text-7xl ">Sushi Mania</h1>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
