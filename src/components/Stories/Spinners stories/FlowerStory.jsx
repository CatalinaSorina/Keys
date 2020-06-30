import React from 'react';
import StoryTab from '../../Story/StoryTabContent';
import { KEYS } from '../../keys';

const FlowerStory = () => (
  <StoryTab
    keyName={KEYS.FLOWER}
    keyProps={[
      'loading: a boolean used to run the spinner',
      'color',
      'middleColor',
      'removeBorder',
      'removeMiddleBorder',
      'borderColor',
      'middleBorderColor',
    ]}
    examples={[
      {
        props: {},
        code: `<Flower />`,
      },
      {
        props: {
          middleColor: '#FFCC87',
          removeBorder: true,
          middleBorderColor: '#FF970A',
        },
        code: `<Flower middleColor="#FFCC87" removeBorder middleBorderColor="#FF970A" />`,
      },
      {
        props: {
          color: '#526F9F',
          borderColor: '#3360A9',
          middleColor: '#FFCC87',
          removeMiddleBorder: true,
        },
        code: `<Flower color="#526F9F" borderColor="#3360A9" middleColor="#FFCC87" removeMiddleBorder />`,
      },
    ]}
  />
);

export default FlowerStory;
