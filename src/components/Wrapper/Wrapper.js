import React from "react";
import { combineStyle } from "../../data/utils";
import { wrapperDefaultStyle } from "./wrapperDefaultStyle";

const Wrapper = ({ style, content }) => (
  <div style={combineStyle(style, wrapperDefaultStyle)}>{content}</div>
);

export default Wrapper;
