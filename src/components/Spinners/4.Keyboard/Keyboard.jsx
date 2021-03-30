// @flow
import React from 'react';
import { Wrapper, Button, TextButton } from './Keyboard.styles';

type KeyboardProps = {
  loading?: boolean,
  color?: string,
  text?: string,
  textColor?: string,
  size?: string,
  font?: string,
  leftTextPosition?: string,
  topTextPosition?: string
}

const Keyboard = ({
 loading = true, color, text, textColor, size, font, leftTextPosition, topTextPosition,
}:KeyboardProps) => loading && (
<Wrapper size={size}>
  <Button color={color}>
    <TextButton textColor={textColor} font={font} left={leftTextPosition} top={topTextPosition}>
      {text}
    </TextButton>
  </Button>
</Wrapper>
  );

export default Keyboard;

Keyboard.defaultProps = {
  loading: true,
  color: '',
  text: 'Entering ↩',
  textColor: '#2E487C',
  size: '8rem',
  font: "lighter 1rem 'Indie Flower', cursive",
  leftTextPosition: '2rem',
  topTextPosition: '3.8rem',
};
