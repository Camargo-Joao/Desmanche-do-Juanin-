import React from "react";

import './Input.css'

function Input(props) {
  return (
    <div className="input-content">
      <label>{props.label}</label>
      <input type={props.type} required/>
    </div>
  );
}

export default Input;
