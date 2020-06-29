import React from 'react';
import StoryTab from '../Story/StoryTabContent';
import { KEYS, TabHolder, Tab } from '../keys';

const tabStyles = {
  tabStyle:{
    width:"90%",
    borderColor:"#2D3142"
  },
  buttonStyle:{
    width:"10rem",
    padding:"0.8rem 0",
    backgroundColor:"#674952",
    color:"#E6C7D0",
    borderColor:"#2D3142",
    boxShadowColor:"#2D3142",
    hoverBackground:"#2D3142",
    textShadow:"none"
  },
  activeButtonStyle:{
    width:"10rem",
    backgroundColor:"#FFCAD4",
    color:"#2D3142",
    borderColor:"#2D3142",
    boxShadowColor:"#2D3142",
    hoverBackground:"#2D3142",
    textShadow:"none"
  }
}

const SpinnersStory = () => (
  <StoryTab
    keyName={KEYS.SPINNERS}
    keyProps={[
      'Spinners are used in async components. Also, called loaders, they improve UX when a component charge it\'s data.',
    ]}
    examples={[
      {
        props: {
          text: 'Default',
        },
      },
    ]}
  >
    <TabHolder removeDefaultBackground activeTabIndex={-1}>
      <Tab {...tabStyles} openTabText="Cross"></Tab>
      <Tab {...tabStyles} openTabText="Dots"></Tab>
      <Tab {...tabStyles} openTabText="RoundedSquares"></Tab>
      <Tab {...tabStyles} openTabText="Keyboard"></Tab>
      <Tab {...tabStyles} openTabText="Flower"></Tab>
      <Tab {...tabStyles} openTabText="Web"></Tab>
    </TabHolder>
  </StoryTab>
);

export default SpinnersStory;
