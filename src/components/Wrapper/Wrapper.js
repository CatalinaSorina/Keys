import React from "react";
import { combineStyle, removeKeysFromStyle } from "../../data/utils";
import { wrapperDefaultStyle } from "./wrapperDefaultStyle";
import styled from "styled-components";

export const WrapperStyle = styled.div`
  ${({ withStyle, styledComponent }) => `
    display: ${withStyle.display};
    flex-direction: ${withStyle.flexDirection};
    align-items: ${withStyle.alignItems};
    justify-content: ${withStyle.justifyContent};
    width: ${withStyle.width};
    height: ${withStyle.height};
    padding: ${withStyle.padding};
    margin: ${withStyle.margin};
    color: ${withStyle.color};
    border: ${withStyle.border};
    border-color: ${withStyle.borderColor};
    background-color: ${withStyle.backgroundColor};
    overflow: ${withStyle.overflow};
    cursor: ${withStyle.cursor};

    *::-webkit-scrollbar {
      width: ${withStyle.scrollbarWidth};
    }

    *::-webkit-scrollbar-track {
      border-radius: ${withStyle.scrollbarTrack.borderRadius};
      box-shadow: ${withStyle.scrollbarTrack.boxShadow};
      background-color: ${withStyle.scrollbarTrack.backgroundColor};
    }

    *::-webkit-scrollbar-thumb {
      border-radius: ${withStyle.scrollbarThumb.borderRadius};
      box-shadow: ${withStyle.scrollbarThumb.boxShadow};
      background-color: ${withStyle.scrollbarThumb.backgroundColor};
      background-image: ${withStyle.scrollbarThumb.backgroundImage}
    }

    *::selection {
      color: ${withStyle.selectColor};
      background-color:${withStyle.selectBackgroundColor};
      text-shadow:${withStyle.selectTextShadow};
    }

    ${styledComponent && styledComponent}
  `}
`;

const Wrapper = ({ style, styledComponent, content }) => (
  <WrapperStyle
    style={removeKeysFromStyle(style, wrapperDefaultStyle)}
    withStyle={combineStyle(style, wrapperDefaultStyle)}
    styledComponent={styledComponent}
  >
    {content}
  </WrapperStyle>
);

export default Wrapper;
