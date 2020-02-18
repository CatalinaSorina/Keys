import React from "react";
import { combineStyle } from "../../data/utils";
import { wrapperDefaultStyle } from "./wrapperDefaultStyle";
import styled from "styled-components";

export const WrapperStyle = styled.div`
  display: ${({ withStyle }) => withStyle.display};
  flex-direction: ${({ withStyle }) => withStyle.flexDirection};
  align-items: ${({ withStyle }) => withStyle.alignItems};
  justify-content: ${({ withStyle }) => withStyle.justifyContent};
  width: ${({ withStyle }) => withStyle.width};
  height: ${({ withStyle }) => withStyle.height};
  padding: ${({ withStyle }) => withStyle.padding};
  margin: ${({ withStyle }) => withStyle.margin};
  color: ${({ withStyle }) => withStyle.color};
  border: ${({ withStyle }) => withStyle.border};
  border-color: ${({ withStyle }) => withStyle.borderColor};
  background-color: ${({ withStyle }) => withStyle.backgroundColor};
  overflow: ${({ withStyle }) => withStyle.overflow};
  cursor: ${({ withStyle }) => withStyle.cursor};

  &::-webkit-scrollbar {
    width: ${({ withStyle }) => withStyle.scrollbarWidth};
  }

  &::-webkit-scrollbar-track {
    border-radius: ${({ withStyle }) => withStyle.scrollbarTrack.borderRadius};
    box-shadow: ${({ withStyle }) => withStyle.scrollbarTrack.webkitBoxShadow};
    background-color: ${({ withStyle }) => withStyle.scrollbarTrack.backgroundColor};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: ${({ withStyle }) => withStyle.scrollbarThumb.borderRadius};
    box-shadow: ${({ withStyle }) => withStyle.scrollbarThumb.boxShadow};
    background-color: ${({ withStyle }) => withStyle.scrollbarThumb.backgroundColor};
    background-image: ${({ withStyle }) => withStyle.scrollbarThumb.backgroundImage}
  }

  &::selection {
    color: ${({ withStyle }) => withStyle.selectColor};
    background-color:${({ withStyle }) => withStyle.selectBackgroundColor};
    text-shadow:${({ withStyle }) => withStyle.selectTextShadow};
  }
`;

const Wrapper = ({ style, content }) => (
  <WrapperStyle style={style} withStyle={combineStyle(style, wrapperDefaultStyle)}>{content}</WrapperStyle>
);

export default Wrapper;
