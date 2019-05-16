import React from "react";
import "./UserInput.css";

const UserInput = props => {
  return (
    <div className="Person">
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
};

export default UserInput;
