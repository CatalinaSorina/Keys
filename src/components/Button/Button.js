import React from "react";
import { buttonDefaultStyle } from "./buttonDefaultStyle";
import { combineStyle } from "../../data/utils";

const Button = ({ style, text, fireClick }) => (
    <button style={combineStyle(style, buttonDefaultStyle)} onClick={fireClick}>{text}</button>
);

export default Button;