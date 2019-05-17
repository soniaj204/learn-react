import React from "react";

const Char = (props) => {
  const style = {
    display: 'inline-block',
    padding: '20px',
    margin: '20px',
    textAlign: 'center',
    border: '1px solid black'
  }
  return (
    <div style={style} onClick={props.clicked}>
      {props.character}
    </div>
  );
};

export default Char;
