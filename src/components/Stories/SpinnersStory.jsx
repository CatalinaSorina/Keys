import React from 'react';
import StoryTab from '../Story/StoryTabContent';
import { KEYS } from '../keys';

const SpinnersStory = () => (
  <StoryTab
    keyName={KEYS.SPINNERS}
    keyProps={[
      'Spinners are in progress, available ones:',
      <h2>Cross props</h2>,
      'loading',
      'margin',
      'padding',
      'width',
      'height',
      'background',
      'size',
      'marginCircle',
      'color: to set only one color',
      'colors: an Array of strings to set all the colors wanted or a string defined(rainbow,green,blue,peach)',
      'unicolor: to use the colors defined step by step',
    ]}
    examples={[
      {
        props: {
          text: 'Default',
        },
        code: `<Cross />`,
      },
      {
        props: {
          text: 'Peach',
          colors: "peach",
        },
        code: `<Cross colors="peach" />`,
      },
      {
        props: {
          text: 'Rainbow',
          colors:["red","yellow","blue","green","black","purple","orange","lightgreen"],
          unicolor: true,
        },
        code: `<Cross colors={["red","yellow","blue","green","black","purple","orange","lightgreen"]} unicolor />`,
      },
    ]}
  />
);

export default SpinnersStory;
