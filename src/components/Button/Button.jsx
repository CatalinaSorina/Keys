// @flow
import React from 'react';
import ButtonStyle from './Button.style';
import type styled from 'styled-components';
import type { Node } from 'react';

export type ButtonProps = {
  display: string,
  position: string,
  margin: string,
  top: string,
  right: string,
  left: string,
  bottom: string,
  width: string,
  border: string,
  borderWidth: string,
  borderStyle: string,
  borderColor: string,
  borderRadius: string,
  background?: string,
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
  children?: Node,
};

const Button = (props: ButtonProps) => {
  const {
    display,
    position,
    margin,
    top,
    right,
    left,
    bottom,
    width,
    border,
    borderWidth,
    borderStyle,
    borderColor,
    borderRadius,
    background,
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
    children,
  } = props;
  return (
    <ButtonStyle
      addStyle={{
        display,
        position,
        margin,
        top,
        right,
        left,
        bottom,
        width,
        border,
        borderWidth,
        borderStyle,
        borderColor,
        borderRadius,
        background,
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
      {children ? children : text}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  display: 'block',
  position: '',
  margin: '0.2rem',
  top: '',
  right: '',
  left: '',
  bottom: '',
  width: '5rem',
  border: '',
  borderWidth: '0.1rem',
  borderStyle: 'solid',
  borderColor: '#C08497',
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
