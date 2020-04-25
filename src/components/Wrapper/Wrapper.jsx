//@flow
import React from 'react';
import WrapperStyle from './Wrapper.styles';
import type styled from 'styled-components';

type WrapperStyleProps = {
  display: string,
  flexDirection: string,
  alignItems: string,
  justifyContent: string,
  width: string,
  height: string,
  padding: string,
  margin: string,
  color: string,
  borderWidth: string,
  borderStyle: string,
  borderColor: string,
  backgroundColor: string,
  overflow: string,
  cursor: string,
  scrollbarWidth: string,
  scrollbarTrackBoxShadow: string,
  scrollbarThumbBorderRadius: string,
  scrollbarThumbBackgroundImage: string,
  selectColor: string,
  selectBackgroundColor: string,
  selectTextShadow: string,
  styledComponent?: styled,
};

const Wrapper = (props: WrapperStyleProps): WrapperStyle => {
  const {
    display,
    flexDirection,
    alignItems,
    justifyContent,
    width,
    height,
    padding,
    margin,
    color,
    borderWidth,
    borderStyle,
    borderColor,
    backgroundColor,
    overflow,
    cursor,
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
        flexDirection,
        alignItems,
        justifyContent,
        width,
        height,
        padding,
        margin,
        color,
        borderWidth,
        borderStyle,
        borderColor,
        backgroundColor,
        overflow,
        cursor,
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
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  width: '99.7vw',
  height: '99.4vh',
  padding: '0',
  margin: '0',
  color: '#2D3142',
  borderWidth: '0.3vh 0.15vw',
  borderStyle: 'dotted',
  borderColor: '#ADACB5',
  backgroundColor: '#B0D7FF',
  overflow: 'auto',
  cursor: 'default',
  scrollbarWidth: '1rem',
  scrollbarTrackBoxShadow: 'inset 0 0 0.1rem transparent',
  scrollbarThumbBorderRadius: '1rem',
  scrollbarThumbBackgroundImage: 'linear-gradient(transparent,#81A6CB 50%,transparent)',
  selectColor: '#FFECB8',
  selectBackgroundColor: 'transparent',
  selectTextShadow: '0 0.05rem 0.2rem #2D3142',
};

export default Wrapper;