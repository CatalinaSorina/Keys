// @flow
import React from 'react';
import { Wrapper, Circle } from './Cross.styles';
import { setColors } from './Cross.utils';

type CrossProps = {
  loading: boolean,
  margin: string,
  padding: string,
  width: string,
  height: string,
  background: string,
  size: string,
  color?: string,
  colors: Array<string>,
  marginCircle: string,
  unicolor: boolean,
};

const Cross = ({
  loading,
  margin,
  padding,
  width,
  height,
  background,
  size,
  color,
  colors,
  marginCircle,
  unicolor,
}: CrossProps): Wrapper =>
  loading && (
    <Wrapper
      width={width}
      height={height}
      background={background}
      margin={margin}
      padding={padding}
    >
      {['TOP', 'LEFT', 'BOTTOM', 'RIGHT'].map((val, i) => (
        <Circle
          color={color}
          colors={setColors(colors)}
          unicolor={unicolor}
          size={size}
          marginCircle={marginCircle}
          position={val}
          colorIndex={i}
        />
      ))}
    </Wrapper>
  );

Cross.defaultProps = {
  loading: true,
  margin: '1rem',
  padding: '0',
  width: '5rem',
  height: '5rem',
  background: 'transparent',
  size: '1rem',
  colors: ['#674952', '#E7C9D2'],
  marginCircle: '0.3rem',
  unicolor: false,
};

export default Cross;
