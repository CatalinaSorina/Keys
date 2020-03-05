import React, { useState } from "react";
import styled from "styled-components";
import { combineStyle, removeKeysFromStyle } from "../../data/utils";
import { inputDefaultStyle } from "./inputDefaultStyle";
const InputStyled = styled.input`
  ${({ styledComponent, addStyle }) => `
    width: ${addStyle.width};
    height: ${addStyle.height};
    padding: ${addStyle.padding};
    margin: ${addStyle.margin};
    border-radius: ${addStyle.borderRadius};
    outline: ${addStyle.outline};
    border: ${addStyle.border};
    background-color: ${addStyle.backgroundColor};
    color: ${addStyle.color};
    font-size: ${addStyle.fontSize};
    text-align: ${addStyle.textAlign};
    text-shadow: ${addStyle.textShadow};

    &::placeholder {
      color: ${addStyle.placeholderColor};
      text-shadow: ${addStyle.placeholderTextShadow};
    }
    
    ${styledComponent && styledComponent}
  `}
`

const Input = ({ style, styledComponent, placeholder, text, fireChange, fireClick }) => {
  const [textState, setTextState] = useState(text);

  const handleOnChange = (e) => {
    setTextState(e.target.value);
    fireChange && typeof fireChange === "function" && fireChange();
  }

  return <InputStyled
    style={removeKeysFromStyle(style, inputDefaultStyle)}
    value={textState}
    addStyle={combineStyle(style, inputDefaultStyle)}
    styledComponent={styledComponent}
    placeholder={placeholder}
    onChange={handleOnChange}
    onClick={fireClick}
  />
};

export default Input;
