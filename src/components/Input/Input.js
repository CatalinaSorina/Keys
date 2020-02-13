import React from "react";
import { combineStyle } from "../../data/utils";
import { inputDefaultStyle } from "./inputDefaultStyle";

const Input = ({ style, placeholder, fireOnChange, fireClick }) => (
  <input
    style={combineStyle(style, inputDefaultStyle)}
    placeholder={placeholder}
    onChange={fireOnChange}
    onClick={fireClick}
  />
);

export default Input;
