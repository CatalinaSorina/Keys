import React from 'react';
import StoryTab from '../Story/StoryTabContent';
import { KEYS, TabHolder, Tab } from '../keys';
import CrossStory from "./Spinners stories/CrossStory";
import DotsStory from "./Spinners stories/DotsStory";
import RoundedSquaresStory from "./Spinners stories/RoundedSquaresStory";
import FlowerStory from "./Spinners stories/FlowerStory";
import KeyboardStory from "./Spinners stories/KeyboardStory";
import WebStory from "./Spinners stories/WebStory";

const tabStyles = {
  tabStyle:{
    width:"90%",
    height:"content-fit",
    border:"none",
    backgroundColor:"#2D3142",
    textShadow:"none",
    borderRadius:"1rem"
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
        props: {},
      },
    ]}
  >
    <TabHolder removeDefaultBackground activeTabIndex={-1}>
      <Tab {...tabStyles} openTabText="Cross"><CrossStory /></Tab>
      <Tab {...tabStyles} openTabText="Dots"><DotsStory /></Tab>
      <Tab {...tabStyles} openTabText="RoundedSquares"><RoundedSquaresStory /></Tab>
      <Tab {...tabStyles} openTabText="Keyboard"><KeyboardStory /></Tab>
      <Tab {...tabStyles} openTabText="Flower"><FlowerStory /></Tab>
      <Tab {...tabStyles} openTabText="Web"><WebStory /></Tab>
    </TabHolder>
  </StoryTab>
);

export default SpinnersStory;
