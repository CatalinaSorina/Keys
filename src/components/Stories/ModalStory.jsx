import React from 'react';
import StoryTab from '../Story/StoryTabContent';
import { KEYS } from '../keys';

const ModalStory = () => (
  <StoryTab
    keyName={KEYS.MODAL}
    keyProps={[
      'openModalText',
      'closeModalText',
      'buttonStyle: a string used to add styled component for modal\'s button',
      'closeButtonStyle: a string used to add styled component for modal\'s close button',
      'modalStyle: a string used to add styled component for modal\'s wrapper',
      'children: not necessary, for react elements inside the Modal',
    ]}
  />
);

export default ModalStory;