// @flow
import React from 'react';
import ButtonStyle from './Button.style';
import type styled from 'styled-components';

type ButtonProps = {
  display: string,
  position: string,
  top: string,
  right: string,
  left: string,
  bottom: string,
  width: string,
  border: string,
  borderRadius: string,
  backgroundColor: string,
  boxShadow: string,
  boxShadowColor: string,
  color: string,
  textShadow: string,
  activeTextShadow: string,
  activeColor: string,
  outline: string,
  padding: string,
  hoverBackground: string,
  hoverColor: string,
  text: string,
  styledComponent?: styled,
};

const Button = (props: ButtonProps) => {
  const {
    display,
    position,
    top,
    right,
    left,
    bottom,
    width,
    border,
    borderRadius,
    backgroundColor,
    boxShadow,
    boxShadowColor,
    color,
    textShadow,
    activeTextShadow,
    activeColor,
    outline,
    padding,
    hoverBackground,
    hoverColor,
    text,
    styledComponent,
  } = props;
  return (
    <ButtonStyle
      addStyle={{
        display,
        position,
        top,
        right,
        left,
        bottom,
        width,
        border,
        borderRadius,
        backgroundColor,
        boxShadow,
        boxShadowColor,
        color,
        textShadow,
        activeTextShadow,
        activeColor,
        outline,
        padding,
        hoverBackground,
        hoverColor,
      }}
      styledComponent={styledComponent}
      {...(props: any)}
    >
      {text}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  display: 'block',
  position: '',
  top: '',
  right: '',
  left: '',
  bottom: '',
  width: '5rem',
  border: '0.1rem solid #C08497',
  borderRadius: '1rem',
  backgroundColor: '#FFCAD4',
  boxShadow: 'inset 0 0.05rem 0.3rem',
  boxShadowColor: '#C08497',
  color: '#C08497',
  textShadow: 'none',
  activeTextShadow: 'none',
  activeColor: 'transparent',
  outline: 'none',
  padding: '0.5rem',
  hoverBackground: '#C08497',
  hoverColor: '#FFCAD4',
};

export default Button;
