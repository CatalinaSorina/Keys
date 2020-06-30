import React from 'react';
import StoryTab from '../Story/StoryTabContent';
import { KEYS } from '../keys';

const WrapperStory = () => (
  <StoryTab
    keyName={KEYS.WRAPPER}
    keyProps={[
      'display',
      'position',
      'flexDirection',
      'alignItems',
      'justifyContent',
      'width',
      'height',
      'padding',
      'margin',
      'font',
      'fontSize',
      'fontFamily',
      'color',
      'textShadow',
      'border',
      'borderRadius',
      'borderWidth',
      'borderStyle',
      'borderColor',
      'boxShadow',
      'background',
      'backgroundColor',
      'backgroundImage',
      'backgroundPosition',
      'backgroundSize',
      'overflow',
      'cursor',
      'zIndex',
      'top',
      'left',
      'bottom',
      'right',
      'scrollbarWidth',
      'scrollbarTrackBoxShadow',
      'scrollbarThumbBorderRadius',
      'scrollbarThumbBackgroundImage',
      'selectColor',
      'selectBackgroundColor',
      'selectTextShadow',
      'styledComponent: a string used to add styled component',
    ]}
    columns={2}
  />
);

export default WrapperStory;