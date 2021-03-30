import React from 'react';
import StoryTab from '../../Story/StoryTabContent';
import { KEYS } from '../../keys';

const WebStory = () => (
  <StoryTab
    keyName={KEYS.WEB}
    keyProps={[
      'loading: a boolean used to run the spinner',
      'color',
      'spiderColor',
    ]}
    examples={[
      {
        props: {},
        code: '<Web />',
      },
      {
        props: {
          color: '#FFCC87',
        },
        code: '<Web color="#FFCC87" />',
      },
      {
        props: {
          color: '#526F9F',
          spiderColor: '#FFCC87',
        },
        code: '<Web color="#526F9F" spiderColor="#FFCC87" />',
      },
    ]}
  />
);

export default WebStory;
