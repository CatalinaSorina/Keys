import React from 'react';
import StoryTab from '../../Story/StoryTabContent';
import { KEYS } from '../../keys';

const KeyboardStory = () => (
  <StoryTab
    keyName={KEYS.KEYBOARD}
    keyProps={[
      'loading: a boolean used to run the spinner',
      'color',
      'text',
      'textColor',
      'size',
      'font',
      'leftTextPosition',
      'topTextPosition',
    ]}
    examples={[
      {
        props: {},
        code: '<Keyboard />',
      },
      {
        props: {
            text: 'waiting ...',
            color: '#526F9F',
            textColor: '#FFCC87',
        },
        code: '<Keyboard text="waiting ..." color="#526F9F" textColor="#FFCC87" />',
      },
      {
        props: {
          size: '15rem',
          font: '1.5rem Helvetica, sans-serif',
          leftTextPosition: '5rem',
          topTextPosition: '8rem',
        },
        code: '<Keyboard size="15rem" font="1.5rem Helvetica, sans-serif" leftTextPosition="5rem" topTextPosition="8rem" />',
      },
    ]}
  />
);

export default KeyboardStory;
