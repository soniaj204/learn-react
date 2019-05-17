import React from "react";

const Validation = props => {
  return (
    <div>{props.inputL > 5 ? <p>Text long!!</p> : <p>Text short!!</p>}</div>
  );
};

export default Validation;
