import React from "react";
import { combineStyle, removeKeysFromStyle } from "../../data/utils";
import { wrapperDefaultStyle } from "./wrapperDefaultStyle";
import styled from "styled-components";

export const WrapperStyle = styled.div`
  ${({ addStyle, styledComponent }) => {
    return `
    display: ${addStyle.display};
    flex-direction: ${addStyle.flexDirection};
    align-items: ${addStyle.alignItems};
    justify-content: ${addStyle.justifyContent};
    width: ${addStyle.width};
    height: ${addStyle.height};
    padding: ${addStyle.padding};
    margin: ${addStyle.margin};
    color: ${addStyle.color};
    border: ${addStyle.border};
    border-color: ${addStyle.borderColor};
    background-color: ${addStyle.backgroundColor};
    overflow: ${addStyle.overflow};
    cursor: ${addStyle.cursor};

    *::-webkit-scrollbar {
      width: ${addStyle.scrollbarWidth};
    }

    *::-webkit-scrollbar-track {
      border-radius: ${addStyle.scrollbarTrack.borderRadius};
      box-shadow: ${addStyle.scrollbarTrack.boxShadow};
      background-color: ${addStyle.scrollbarTrack.backgroundColor};
    }

    *::-webkit-scrollbar-thumb {
      border-radius: ${addStyle.scrollbarThumb.borderRadius};
      box-shadow: ${addStyle.scrollbarThumb.boxShadow};
      background-color: ${addStyle.scrollbarThumb.backgroundColor};
      background-image: ${addStyle.scrollbarThumb.backgroundImage}
    }

    *::selection {
      color: ${addStyle.selectColor};
      background-color:${addStyle.selectBackgroundColor};
      text-shadow:${addStyle.selectTextShadow};
    }

    ${styledComponent && styledComponent}
  `;
  }}
`;

const Wrapper = ({ style, styledComponent, content }) => (
  <WrapperStyle
    style={removeKeysFromStyle(style, wrapperDefaultStyle)}
    addStyle={combineStyle(style, wrapperDefaultStyle)}
    styledComponent={styledComponent}
  >
    {content}
  </WrapperStyle>
);

export default Wrapper;
