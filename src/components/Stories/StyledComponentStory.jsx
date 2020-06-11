import React from 'react';
import StoryTab from '../Story/StoryTabContent';
import { KEYS } from '../keys';

const StyledComponentStory = () => (
  <StoryTab
    keyName={KEYS.STYLED_COMPONENT}
    keyProps={[
      'type: a string to define what react element you are styling',
      'styledComponent: a string to add the styled component wanted',
    ]}
    examples={[
      {
        props: {
          text: 'Styled button',
          type: 'button',
          children: 'Custom Button',
          styledComponent: 'border-radius:1rem;background-color:lightgreen;padding:2rem;outline:none;',
        },
        code: `<StyledComponent type="button" styledComponent="border-radius:1rem;background-color:lightgreen;padding:2rem;outline:none;">Custom Button</StyledComponent>`,
      },
    ]}
  />
);

export default StyledComponentStory;
