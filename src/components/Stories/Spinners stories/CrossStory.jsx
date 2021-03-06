import React from 'react';
import StoryTab from '../../Story/StoryTabContent';
import { KEYS } from '../../keys';

const CrossStory = () => (
  <StoryTab
    keyName={KEYS.CROSS}
    keyProps={[
      'loading: a boolean used to run the spinner',
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
        props: {},
        code: '<Cross />',
      },
      {
        props: {
          colors: 'peach',
        },
        code: '<Cross colors="peach" />',
      },
      {
        props: {
          colors: ['red', 'yellow', 'blue', 'green', 'black', 'purple', 'orange', 'lightgreen'],
          unicolor: true,
        },
        code: '<Cross colors={["red","yellow","blue","green","black","purple","orange","lightgreen"]} unicolor />',
      },
    ]}
  />
);

export default CrossStory;
