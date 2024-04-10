import React, { useEffect, useState } from "react";
import NavigationBar from "../navigationBar/NavigationBar";

const Content = () => {
  //   const [sushi, setSushi] = useState("");
  //   console.log(sushi);
  //   const getSushi = async () => {
  //     try {
  //       const resp = await fetch(
  //         "https://api.spoonacular.com/recipes/4632/summary"
  //       );
  //       const data = resp.json();
  //       setSushi(data);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };

  //   useEffect(() => {
  //     getSushi();
  //   }, []);
  return (
    <>
      <div>
        <NavigationBar />
      </div>
    </>
  );
};

export default Content;
