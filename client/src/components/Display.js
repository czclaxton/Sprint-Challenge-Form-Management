import React from "react";

const Display = props => {
  const clickHandler = () => {
    props.setCount(props.count + 1);
  };
  return (
    <div>
      <button onClick={clickHandler}>+1</button>
      <br />
      <br />
      Current Count: {props.count}
    </div>
  );
};

export default Display;
