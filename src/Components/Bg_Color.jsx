import React, { useState } from "react";

const Bg_Color = () => {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{
          backgroundColor: color,
          height:'50rem'
        }}
      >
       
          <button onClick={() => setColor('blue')} type="button" className="btn btn-primary">
            Blue
          </button>
          <button onClick={() => setColor('gray')} type="button" className="btn btn-secondary">
            Gray
          </button>
          <button onClick={() => setColor('green')} type="button" className="btn btn-success">
            Green
          </button>
          <button onClick={() => setColor('red')} type="button" className="btn btn-danger">
            Red
          </button>
          <button onClick={() => setColor('yellow')} type="button" className="btn btn-warning">
            Yellow
          </button>
          <button onClick={() => setColor('lightblue')} type="button" className="btn btn-info">
            LightBlue
          </button>
          <button onClick={() => setColor('white')} type="button" className="btn btn-light">
            White
          </button>
          <button onClick={() => setColor('black')} type="button" className="btn btn-dark">
            Black
          </button>
        </div>
   
    </>
  );
};

export default Bg_Color;
