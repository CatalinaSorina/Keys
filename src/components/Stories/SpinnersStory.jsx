import React from 'react';
import StoryTab from '../Story/StoryTabContent';
import { KEYS } from '../keys';

const SpinnersStory = () => (
  <StoryTab
    keyName={KEYS.SPINNERS}
    keyProps={[
      'Spinners are in progress, available ones:',
    ]}
    examples={[
      {
        props: {
          text: 'Default',
        },
      },
    ]}
  />
);

export default SpinnersStory;
