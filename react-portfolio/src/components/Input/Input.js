import React from "react";
import "./Input.css";

export const Input = props => (
  <div className="inputDiv">
    <input className="input" {...props} />
  </div>
);