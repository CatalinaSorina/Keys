import React from 'react';
import './App.css';
import * as Stories from './components/Stories/Stories';
import { KEYS, TabHolder, Tab } from './components/keys';

const App = () => {
  const buttonStyle = { width: '7rem' };
  const TabStyled = (tabText, child) => (
    <Tab openTabText={tabText} buttonStyle={buttonStyle}>
      {child}
    </Tab>
  );
  return (
    <TabHolder activeTabIndex={-1} removeInline>
      {TabStyled(KEYS.BUTTON, <Stories.ButtonStory />)}
      {TabStyled(KEYS.INPUT, <Stories.InputStory />)}
      {TabStyled(KEYS.PARAGRAPHS, <Stories.ParagraphsStory />)}
      {TabStyled(KEYS.WRAPPER, <Stories.WrapperStory />)}
      {TabStyled(KEYS.MODAL, <Stories.ModalStory />)}
      {TabStyled(KEYS.TAB, <Stories.TabStory />)}
      {TabStyled(KEYS.HIGHLIGHTER, <Stories.HighlighterStory />)}
      {TabStyled(KEYS.SPINNERS, <Stories.SpinnersStory />)}
      {TabStyled(KEYS.STYLED_COMPONENT, <Stories.StyledComponentStory />)}
    </TabHolder>
  );
};

export default App;
