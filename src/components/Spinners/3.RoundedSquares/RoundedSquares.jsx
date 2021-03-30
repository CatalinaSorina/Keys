// @flow
import React from 'react';
import type { Node } from 'react';
import { SquareHolder, RoundedSquare } from './RoundedSquares.styles';

type RoundedSquaresProps = {
  loading: boolean,
  animation: string,
  time: string,
  delay: string,
  type: string,
  rgbColorNumbers: string,
  borderColor: string,
  borderRadius: string,
  size: string,
  margin: string
};

const RoundedSquares = ({
 loading, animation, time, delay, type, rgbColorNumbers, borderColor, borderRadius, size, margin,
}:RoundedSquaresProps):Node => (
  loading && (
  <SquareHolder>
    <RoundedSquare
      animation={animation}
      time={time}
      delay={delay}
      type={type}
      color={rgbColorNumbers}
      borderColor={borderColor}
      borderRadius={borderRadius}
      size={size}
      margin={margin}
    />
    <RoundedSquare
      animation={animation}
      time={time}
      delay={delay}
      type={type}
      color={rgbColorNumbers}
      borderColor={borderColor}
      borderRadius={borderRadius}
      size={size}
      margin={margin}
    />
    <RoundedSquare
      animation={animation}
      time={time}
      delay={delay}
      type={type}
      color={rgbColorNumbers}
      borderColor={borderColor}
      borderRadius={borderRadius}
      size={size}
      margin={margin}
    />
  </SquareHolder>
)
);

export default RoundedSquares;

RoundedSquares.defaultProps = {
  loading: true,
  animation: 'scale',
  rgbColorNumbers: '255,255,255',
  borderColor: 'white',
  borderRadius: '0.3rem',
  size: '1.5rem',
  margin: '0.3rem',
};
