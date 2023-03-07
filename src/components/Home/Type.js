import React from "react";
import Typewriter from "typewriter-effect";
import "./type.css";
const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: [
            "Developer",
            "MERN stack developer",
            "Competitive Programmer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 40,
        }}
      ></Typewriter>
    </>
  );
};

export default Type;
