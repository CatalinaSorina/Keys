import React from 'react';
import StoryTab from '../Story/StoryTabContent';
import { KEYS } from '../keys';

const TabStory = () => (
  <StoryTab
    keyName={`${KEYS.TAB} and ${KEYS.TAB_HOLDER}`}
    keyProps={[
      'Tab can be used outside TabHolder, but when there is used more than one Tab, TabHolder group them and is more useful.',
      <h2>
        {KEYS.TAB}
        {' '}
        props
      </h2>,
      'openTabText',
      'closeTabText',
      'activeTab: used to set if a tab is opened the first time',
      'buttonStyle: a string used to add styled component for tab\'s button',
      'activeButtonStyle: a string used to add styled component for tab\'s active button',
      'tabStyle: a string used to add styled component for tab wrapper',
      'children: not necessary, for react elements inside the Tab',
      'setActiveTab: function to change the tab opened or closed',
      <h2>
        {KEYS.TAB_HOLDER}
        {' '}
        props
      </h2>,
      'activeTabIndex: used to set the first time the opened Tab, default is set to 0, set -1 for closing all Tabs',
      'dynamicActiveTabIndex: used to change the Tab opened according to something',
      'removeInline: use this prop if you want Tabs to be vertically positioned',
      'tabHolderStyle: a string used to add styled component for all Tabs holder',
      'backgroundStyle: a string used to add styled component for the wrapper that holds Tabs and the Tab holder',
      'children: not necessary, for Tab react elements',
      'removeDefaultBackground: used to remove the background it has, if no backgroundStyle is needed',
    ]}
    hidePropsTitle
  />
);

export default TabStory;
