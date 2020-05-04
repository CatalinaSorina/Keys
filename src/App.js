import React, {useState} from 'react';
import './App.css';
import Tab from './components/Tab/Tab';
import Paragraphs from './components/Paragraph/Paragraphs';
import Spinners from './components/Spinners/Spinners';
import Wrapper from './components/Wrapper/Wrapper';
import Button from './components/Button/Button';
import TabHolder from './components/TabHolder/TabHolder';

const App = () => {
  return <Wrapper alignItems="center" fontFamily="Arial" backgroundColor='orange'>
  <TabHolder activeTabIndex={0} 
      backgroundStyle={{border:'0.1rem solid black'}}
      removeDefaultBackground>
    <Tab openTabText='See me'>
      shfnaiskn 
      asfjasnkfm
    </Tab>
    <Tab
      closeTabText='Close'
      buttonStyle={{backgroundColor:'lightgreen',borderColor:'green',color:'green',hoverBackground:'green',hoverColor:'lightgreen'}}
      activeButtonStyle={{backgroundColor:'green',borderColor:'green',color:'lightgrey',hoverBackground:'green',hoverColor:'lightgreen'}}
      tabStyle={{backgroundColor:'lightgreen',border:'0.1rem solid green',textShadow:'none',color:'green',justifyContent:'center',alignItems:'center'}}
    >
      shfnaiskn 
      <Button text='ok' />
    </Tab>
  </TabHolder>
    {/* <Tab
      openTabText="see me"
    >
      <header>Header, in work</header>
      <Spinners />
      <Button text="hei" />
      <main>
        <Paragraphs
          text="Lorem ipsum dolor amet stumptown actually subway tile squid try-hard tilde biodiesel taiyaki paleo. Coloring book palo santo jean shorts green juice 90's hoodie chicharrones hammock. Chicharrones heirloom 90's polaroid ugh hella. Craft beer tousled organic tacos gastropub church-key. Post-ironic heirloom butcher unicorn pitchfork cloud bread direct trade offal kitsch fam. Lomo street art paleo blue bottle plaid poke pitchfork everyday carry master cleanse godard photo booth gastropub. Typewriter vinyl pitchfork keytar readymade, cold-pressed austin drinking vinegar chartreuse franzen banh mi gluten-free.
        Sartorial forage PBR&B, gluten-free shaman banjo man braid next level scenester. Cliche cray fingerstache selfies trust fund YOLO. Swag aesthetic shaman, semiotics woke cornhole iceland mumblecore sartorial artisan organic salvia bushwick mixtape. Tattooed salvia mustache pop-up put a bird on it.
        Godard enamel pin vape synth va"
          styledComponent="&:hover{color:blue;}"
        />
        <Paragraphs
          text="Lorem ipsum dolo"
          styledComponent="&:hover{color:red;}"
        />
      </main>
      <footer>bottom</footer>
    </Tab> */}
  </Wrapper>
};

export default App;
