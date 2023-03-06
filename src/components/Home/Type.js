import React from "react";
import TypewriterComponent from "typewriter-effect";

const Type = () => {
  return (
    <>
      <TypewriterComponent
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
      ></TypewriterComponent>
    </>
  );
};

export default Type;
