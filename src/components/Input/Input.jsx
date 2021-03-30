// @flow
import React, { useState } from 'react';
import InputStyled from './Input.style';

type InputProps = {
  width?: string,
  height?: string,
  padding?: string,
  margin?: string,
  borderRadius?: string,
  outline?: string,
  border?: string,
  backgroundColor?: string,
  color?: string,
  fontSize?: string,
  textShadow?: string,
  textAlign?: string,
  placeholderColor?: string,
  placeholderTextShadow?: string,
  text?: string | number,
  onChange?: Function,
  type?: string,
  value?: any,
  styledComponent?: string,
};

const Input = (props: InputProps) => {
  const {
    width,
    height,
    padding,
    margin,
    borderRadius,
    outline,
    border,
    backgroundColor,
    color,
    fontSize,
    textShadow,
    textAlign,
    placeholderColor,
    placeholderTextShadow,
    text,
    onChange,
    type,
    value,
    styledComponent,
  } = props;
  const [textState, setTextState] = useState(text);

  // eslint-disable-next-line no-undef
  const handleOnChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    setTextState(e.target.value);
    // eslint-disable-next-line no-unused-expressions
    onChange && onChange();
  };

  return (
    <InputStyled
      addStyle={{
        width,
        height,
        padding,
        margin,
        borderRadius,
        outline,
        border,
        backgroundColor,
        color,
        fontSize,
        textShadow,
        textAlign,
        placeholderColor,
        placeholderTextShadow,
      }}
      styledComponent={styledComponent}
      onChange={type === 'text' ? handleOnChange : onChange}
      value={type === 'text' ? textState : value}
      {...(props: any)}
    />
  );
};

Input.defaultProps = {
  width: '12rem',
  height: '1rem',
  padding: '1rem',
  margin: '1rem',
  borderRadius: '1rem',
  outline: 'none',
  border: '0.1rem dotted grey',
  backgroundColor: '#81A6CB',
  color: '#FFCAD4',
  fontSize: '2rem',
  textShadow: '0 0.05rem 0.1rem black',
  textAlign: 'center',
  placeholderColor: '#FFCAD4',
  placeholderTextShadow: '0 0.01rem 0.05rem black',
  type: 'text',
  text: '',
  onChange: () => {},
  value: '',
  styledComponent: '',
};

export default Input;
