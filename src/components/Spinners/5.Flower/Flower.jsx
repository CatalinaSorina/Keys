// @flow
import React from 'react';
import { Wrapper, Petal, Dot } from './Flower.styles';

type FlowerProps = {
  loading: boolean,
  color: string,
  middleColor: string,
  removeBorder: boolean,
  removeMiddleBorder: boolean,
  borderColor: string,
  middleBorderColor: string,
};

const Flower = ({
 loading, color, middleColor, removeBorder, removeMiddleBorder, borderColor, middleBorderColor,
}:FlowerProps) => loading && (
<Wrapper>
  <Petal color={color} position="1/2" removeBorder={removeBorder} borderColor={borderColor} />
  <Petal color={color} position="2/1" rotate="-60deg" removeBorder={removeBorder} borderColor={borderColor} />
  <Petal color={color} position="2/3" rotate="60deg" removeBorder={removeBorder} borderColor={borderColor} />
  <Dot color={middleColor} removeBorder={removeMiddleBorder} borderColor={middleBorderColor} />
  <Petal color={color} position="5/2" removeBorder={removeBorder} borderColor={borderColor} />
  <Petal color={color} position="4/1" rotate="60deg" removeBorder={removeBorder} borderColor={borderColor} />
  <Petal color={color} position="4/3" rotate="-60deg" removeBorder={removeBorder} borderColor={borderColor} />
</Wrapper>
  );
export default Flower;

Flower.defaultProps = {
  loading: true,
  color: 'white',
  middleColor: 'white',
  removeBorder: false,
  removeMiddleBorder: false,
  borderColor: 'white',
  middleBorderColor: 'white',
};
