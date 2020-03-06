import React, { useState } from "react";
import styled from "styled-components";
import { combineStyle } from "../../data/utils";
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

const Input = (props) => {
  const { changeDefaultStyle, styledComponent, value, onChange, ...restProps } = props;
  const [textState, setTextState] = useState(value);

  const handleOnChange = (e) => {
    setTextState(e.target.value);
    onChange && typeof onChange === "function" && onChange();
  }

  return <InputStyled
    addStyle={combineStyle(changeDefaultStyle, inputDefaultStyle)}
    styledComponent={styledComponent}
    onChange={handleOnChange}
    value={textState}
    {...restProps}
  />
};

export default Input;
