import React from "react";
import "./UserOutput.css";

const UserOutput = props => {
  return (
    <div className="Person">
      <p>Hello 1 {props.name}</p>
      <p>Hello 2 </p>
    </div>
  );
};

export default UserOutput;
