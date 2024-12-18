import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Button.css";

function Button(props) {
  return (
    <Link to={props.path}>
      <button className="btn" type={props.type} onClick={props.click}>{props.children}</button>
    </Link>
  );
}

export default Button;
