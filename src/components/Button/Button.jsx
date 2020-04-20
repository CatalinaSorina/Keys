// @flow
import React from 'react';
import ButtonStyle from './Button.style';

type ButtonProps = {
  width: string,
  border: string,
  borderRadius: string,
  backgroundColor: string,
  boxShadow: string,
  boxShadowColor: string,
  color: string,
  activeColor: string,
  outline: string,
  padding: string,
  hoverBackground: string,
  hoverColor: string,
  styledComponent?: Object,
  text: string
};

const Button = (props: ButtonProps) => {
  const {
    width,
    border,
    borderRadius,
    backgroundColor,
    boxShadow,
    boxShadowColor,
    color,
    activeColor,
    outline,
    padding,
    hoverBackground,
    hoverColor,
    styledComponent,
    text
  } = props;
  return (
    <ButtonStyle
      addStyle={{
        width,
        border,
        borderRadius,
        backgroundColor,
        boxShadow,
        boxShadowColor,
        color,
        activeColor,
        outline,
        padding,
        hoverBackground,
        hoverColor
      }}
      styledComponent={styledComponent}
      {...(props: any)}
    >
      {text}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  width: '5rem',
  border: '0.1rem solid #C08497',
  borderRadius: '1rem',
  backgroundColor: '#FFCAD4',
  boxShadow: 'inset 0 0.05rem 0.3rem',
  boxShadowColor: '#C08497',
  color: '#C08497',
  activeColor: 'transparent',
  outline: 'none',
  padding: '0.5rem',
  hoverBackground: '#C08497',
  hoverColor: '#FFCAD4',
};

export default Button;
