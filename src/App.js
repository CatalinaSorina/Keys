import React from 'react';
import './App.css';
import * as Stories from './components/Stories/Stories';
import { KEYS, TabHolder, Tab } from './components/keys';

const App = () => {
  const buttonStyle={buttonStyle:{width:"7rem"}};
  return <TabHolder activeTabIndex={2} removeInline>
    <Tab openTabText={KEYS.BUTTON} {...buttonStyle}><Stories.ButtonStory /></Tab>
    <Tab openTabText={KEYS.INPUT} {...buttonStyle}><Stories.InputStory /></Tab>
    <Tab openTabText={KEYS.PARAGRAPHS} {...buttonStyle}><Stories.ParagraphsStory /></Tab>
    <Tab openTabText={KEYS.WRAPPER} {...buttonStyle}></Tab>
    <Tab openTabText={KEYS.MODAL} {...buttonStyle}></Tab>
    <Tab openTabText={KEYS.TAB} {...buttonStyle}></Tab>
    <Tab openTabText={KEYS.HIGHLIGHTER} {...buttonStyle}></Tab>
    <Tab openTabText={KEYS.SPINNERS} {...buttonStyle}></Tab>
    <Tab openTabText={KEYS.STYLED_COMPONENT} {...buttonStyle}></Tab>
  </TabHolder>
};

export default App;
