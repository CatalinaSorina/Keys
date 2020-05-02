//@flow
import React from 'react';
import WrapperStyle from './Wrapper.styles';
import type styled from 'styled-components';

export type WrapperProps = {
  display: string,
  position: string,
  flexDirection: string,
  alignItems: string,
  justifyContent: string,
  width: string,
  height: string,
  padding: string,
  margin: string,
  font: string,
  fontSize: string,
  fontFamily: string,
  color: string,
  textShadow: string,
  border?: string,
  borderWidth: string,
  borderStyle: string,
  borderColor: string,
  boxShadow: string,
  background?: string,
  backgroundColor: string,
  overflow: string,
  cursor: string,
  zIndex: string,
  top: string,
  left: string,
  bottom: string,
  right: string,
  scrollbarWidth: string,
  scrollbarTrackBoxShadow: string,
  scrollbarThumbBorderRadius: string,
  scrollbarThumbBackgroundImage: string,
  selectColor: string,
  selectBackgroundColor: string,
  selectTextShadow: string,
  styledComponent?: styled,
};

const Wrapper = (props: WrapperProps): WrapperStyle => {
  const {
    display,
    position,
    flexDirection,
    alignItems,
    justifyContent,
    width,
    height,
    padding,
    margin,
    font,
    fontSize,
    fontFamily,
    color,
    textShadow,
    border,
    borderWidth,
    borderStyle,
    borderColor,
    boxShadow,
    background,
    backgroundColor,
    overflow,
    cursor,
    zIndex,
    top,
    left,
    bottom,
    right,
    scrollbarWidth,
    scrollbarTrackBoxShadow,
    scrollbarThumbBorderRadius,
    scrollbarThumbBackgroundImage,
    selectColor,
    selectBackgroundColor,
    selectTextShadow,
    styledComponent,
  } = props;
  return (
    <WrapperStyle
      addStyle={{
        display,
        position,
        flexDirection,
        alignItems,
        justifyContent,
        width,
        height,
        padding,
        margin,
        font,
        fontSize,
        fontFamily,
        color,
        textShadow,
        border,
        borderWidth,
        borderStyle,
        borderColor,
        boxShadow,
        background,
        backgroundColor,
        overflow,
        cursor,
        zIndex,
        top,
        left,
        bottom,
        right,
        scrollbarWidth,
        scrollbarTrackBoxShadow,
        scrollbarThumbBorderRadius,
        scrollbarThumbBackgroundImage,
        selectColor,
        selectBackgroundColor,
        selectTextShadow,
      }}
      styledComponent={styledComponent}
      {...(props: any)}
    />
  );
};

Wrapper.defaultProps = {
  display: 'flex',
  position: '',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  width: '99.7vw',
  height: '99.4vh',
  padding: '0',
  margin: '0',
  font: '',
  fontSize: '1rem',
  fontFamily: 'Cursive',
  color: '#2D3142',
  textShadow: 'none',
  borderWidth: '0.3vh 0.15vw',
  borderStyle: 'dotted',
  borderColor: '#ADACB5',
  boxShadow: 'none',
  backgroundColor: '#B0D7FF',
  overflow: 'auto',
  cursor: 'default',
  zIndex: '',
  top: '',
  left: '',
  bottom: '',
  right: '',
  scrollbarWidth: '1rem',
  scrollbarTrackBoxShadow: 'inset 0 0 0.1rem transparent',
  scrollbarThumbBorderRadius: '1rem',
  scrollbarThumbBackgroundImage:
    'linear-gradient(transparent,#81A6CB 50%,transparent)',
  selectColor: '#FFECB8',
  selectBackgroundColor: 'transparent',
  selectTextShadow: '0 0.05rem 0.2rem #2D3142',
};

export default Wrapper;
