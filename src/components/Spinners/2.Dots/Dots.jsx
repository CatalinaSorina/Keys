// @flow
import React from 'react';
import {
 Wrapper, Dot, translate, scale,
} from './Dots.styles';
import { checkColorsIndex } from './Dots.utils';

type DotsProps = {
  loading?: boolean,
  colors?: Array<string> | string,
  borderColors?: Array<string> | string,
};

const Dots = ({ loading, colors, borderColors }: DotsProps) => loading && (
<Wrapper>
  <Dot
    color={checkColorsIndex(colors, 0)}
    borderColor={checkColorsIndex(borderColors, 0)}
    motion={() => translate('0', '2rem,-2rem', '4rem', '2rem,2rem')}
  />
  <Dot
    color={checkColorsIndex(colors, 1)}
    borderColor={checkColorsIndex(borderColors, 1)}
    motion={() => scale(0.5, 0.75, 0.85)}
  />
  <Dot
    color={checkColorsIndex(colors, 2)}
    borderColor={checkColorsIndex(borderColors, 2)}
    motion={() => translate('0', '-2rem,2rem', '-4rem', '-2rem,-2rem')}
  />
</Wrapper>
  );

export default Dots;

Dots.defaultProps = {
  loading: true,
  colors: ['white', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,0.5)'],
  borderColors: 'white',
};
