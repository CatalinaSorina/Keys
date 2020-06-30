import React from 'react';
import StoryTab from '../../Story/StoryTabContent';
import { KEYS } from '../../keys';

const DotsStory = () => (
  <StoryTab
    keyName={KEYS.DOTS}
    keyProps={[
      'loading: a boolean used to run the spinner',
      'colors: an Array of strings to set all the colors wanted or a color string',
      'borderColors: an Array of strings to set all border colors wanted or a color string',
    ]}
    examples={[
      {
        props: {},
        code: `<Dots />`,
      },
      {
        props: {
          borderColors: "none",
          style: {margin:"5rem"}
        },
        code: `<Dots borderColors="none" />`,
      },
      {
        props: {
          colors:["#C1E9FF","#9ADCFF","#43BCFC"],
          borderColors: "#06517A",
        },
        code: `<Dots colors={["#C1E9FF","#9ADCFF","#43BCFC"]} borderColors="#06517A" />`,
      },
    ]}
  />
);

export default DotsStory;
