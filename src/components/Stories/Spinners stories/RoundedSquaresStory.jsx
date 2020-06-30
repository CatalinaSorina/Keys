import React from 'react';
import StoryTab from '../../Story/StoryTabContent';
import { KEYS } from '../../keys';

const RoundedSquaresStory = () => (
  <StoryTab
    keyName={KEYS.ROUNDED_SQUARES}
    keyProps={[
      'loading: a boolean used to run the spinner',
      'animation: a string with an animation name defined(skew,rotate,scale,matrix or translate)',
      'time: a string with time wanted for the animation to run',
      'delay: a string with time for delaying the animation',
      'type: a string with the type of animation wanted(normal,reverse,alternate,alternate-reverse)',
      'rgbColorNumbers: a string of rgb color numbers to set the color wanted(ex:"0,0,0" for black)',
      'borderColor',
      'borderRadius',
      'size',
      'margin',
    ]}
    examples={[
      {
        props: {},
        code: `<RoundedSquares />`,
      },
      {
        props: {
          animation: "matrix",
          time: "4s",
        },
        code: `<RoundedSquares animation="matrix" time="4s" />`,
      },
      {
        props: {
          animation: "rotate",
          rgbColorNumbers:"83, 164, 126",
          borderColor: "#78EEB6",
          borderRadius: "0.5rem",
        },
        code: `<RoundedSquares animation="rotate" rgbColorNumbers="83, 164, 126" borderColor="#78EEB6" borderRadius="0.5rem" />`,
      },
    ]}
  />
);

export default RoundedSquaresStory;