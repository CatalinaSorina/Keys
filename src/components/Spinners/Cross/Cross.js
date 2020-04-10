import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Circle } from './Cross.styles';
import { setColors } from './Cross.utils';

const Cross = ({
  loading = true,
  margin = '1rem',
  padding = '0',
  width = '5rem',
  height = '5rem',
  background = 'transparent',
  size = '1rem',
  color,
  colors,
  margin_circle = '0.3rem',
  unicolor = false,
}) =>
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
          margin_circle={margin_circle}
          position={val}
          colorIndex={i}
        />
      ))}
    </Wrapper>
  );

Cross.propTypes = {
  loading: PropTypes.bool,
  margin: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  background: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  colors: PropTypes.string || PropTypes.array,
  margin_circle: PropTypes.string,
  unicolor: PropTypes.bool,
};

export default Cross;
