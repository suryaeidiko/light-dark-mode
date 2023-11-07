import React, { useState } from "react";

const Counter_01 = () => {
  const [counter, setCounter] = useState(0);

  const add = () => {
    // counter >= 20 ? setCounter(20) : setCounter(counter + 1);
       setCounter((counter) => counter>=7 ? 7:counter + 1)
    // setCounter(prevCounter => prevCounter +1)
    // setCounter(prevCounter => prevCounter +1)
    // setCounter(prevCounter => prevCounter +1)
  };
  const remove = () => {
    // counter <= 0 ? setCounter(0) : setCounter(counter - 1);
    setCounter((counter) => counter<=0 ? 0:counter - 1)
  };

  return (
    <>
      <h2>Count : {counter}</h2>
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
    </>
  );
};

export default Counter_01;
