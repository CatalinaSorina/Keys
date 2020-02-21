import React from "react";
import styled from "styled-components";
import { combineStyle, removeKeysFromStyle } from "../../data/utils";
import { inputDefaultStyle } from "./inputDefaultStyle";

const InputStyled = styled.input`
  width: ${({ addStyle }) => addStyle.width};
  height: ${({ addStyle }) => addStyle.height};
  padding: ${({ addStyle }) => addStyle.padding};
  margin: ${({ addStyle }) => addStyle.margin};
  border-radius: ${({ addStyle }) => addStyle.borderRadius};
  outline: ${({ addStyle }) => addStyle.outline};
  border: ${({ addStyle }) => addStyle.border};
  background-color: ${({ addStyle }) => addStyle.backgroundColor};
  color: ${({ addStyle }) => addStyle.color};
  font-size: ${({ addStyle }) => addStyle.fontSize};
  text-align: ${({ addStyle }) => addStyle.textAlign};
  text-shadow: ${({ addStyle }) => addStyle.textShadow};

  &::placeholder {
    color: ${({ addStyle }) => addStyle.placeholderColor};
    text-shadow: ${({ addStyle }) => addStyle.placeholderTextShadow};
  }
`

const Input = ({ style, placeholder, text, fireOnChange, fireClick }) => (
  <InputStyled
    style={removeKeysFromStyle(style, inputDefaultStyle)}
    value={text}
    addStyle={combineStyle(style, inputDefaultStyle)}
    placeholder={placeholder}
    onChange={fireOnChange}
    onClick={fireClick}
  />
);

export default Input;
