import React from 'react';
import StoryTab from '../Story/StoryTabContent';
import { KEYS } from '../keys';

const HighlighterStory = () => (
  <StoryTab
    keyName={KEYS.HIGHLIGHTER}
    keyProps={[
      'code: string you want to color according to JS language',
      'examples are in each description of the Keys',
      'you have 2 backgrounds available, dark one and light one',
    ]}
  />
);

export default HighlighterStory;
