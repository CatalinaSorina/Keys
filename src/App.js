import React from 'react';
import './App.css';
import * as Stories from './components/Stories/Stories';
import { KEYS, TabHolder, Tab } from './components/keys';

const App = () => {
  return <TabHolder activeTabIndex={1} removeInline>
    <Tab openTabText={KEYS.BUTTON}><Stories.ButtonStory /></Tab>
    <Tab openTabText={KEYS.INPUT}><Stories.InputStory /></Tab>
    <Tab openTabText={KEYS.PARAGRAPHS}></Tab>
    <Tab openTabText={KEYS.WRAPPER}></Tab>
    <Tab openTabText={KEYS.MODAL}></Tab>
    <Tab openTabText={KEYS.TAB}></Tab>
    <Tab openTabText={KEYS.HIGHLIGHTER}></Tab>
    <Tab openTabText={KEYS.SPINNERS}></Tab>
    <Tab openTabText={KEYS.STYLED_COMPONENT}></Tab>
  </TabHolder>
};

export default App;
