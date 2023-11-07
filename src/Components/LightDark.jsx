import React, { useState } from "react";

const LightDark = () => {
  const [color, setColor] = useState(true);

  const isToggle = () => {
    setColor(!color);
  };

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{
          backgroundColor: color ? "white" : "black",
          height: "40rem"
        }}
      >

        <button
          onClick={isToggle}
          // style={{ backgroundColor: color ? "white" : "black" }}
        >
          {color ? "☀️" : "🌙"}
        </button>
      </div>
    </>
  );
};

export default LightDark;
