/* eslint-disable comma-dangle */
import styled, { css } from 'styled-components';

const InputStyled = styled.input(
  ({ styledComponent, addStyle }) => css`
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

    ${css`
      ${styledComponent && styledComponent}
    `}
  `
);

export default InputStyled;
