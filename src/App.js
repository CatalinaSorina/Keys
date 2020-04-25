import React from 'react';
import './App.css';
import Tab from './components/Tab/Tab';
import Paragraphs from './components/Paragraph/Paragraphs';
import Spinners from './components/Spinners/Spinners';
import Wrapper from './components/Wrapper/Wrapper';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
// import StyledComponent from './components/StyledComponent/StyledComponent';

const App = () => (
  <Wrapper alignItems="center" fontFamily="Arial">
    {/* <Tab
      // tabAsModal={true}
      openTabText="see me"
      // buttonStyledComponent="align-items:center;background-color:red; color:white;"
      // tabStyledComponent="*::selection{background-color:rosybrown;}align-items:center;"
      // activeButtonStyle="background-color:green;color:transparent;color:black;&:active{color:blue}"
    >
      <header>Header, in work</header>
      <Spinners />
        <Button text="hei" />
      {
        // <Input text="Test text" />
        // <StyledComponent
        //   type="button"
        //   styledComponent={`
        //     background-color:transparent;
        //     height:3rem;
        //     border-radius:1rem;
        //     color: blue;
        //     outline: none;
        //   `}
        //   onClick={() => console.log('Button styled working :D')}
        // >
        //   STYLED BUTTON
        // </StyledComponent>
      }
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
    select me
    <Input
      placeholder="try me"
      color="red"
      placeholderColor="rgba(255, 0, 0,0.7)"
    />
  </Wrapper>
);

export default App;
