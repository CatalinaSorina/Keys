import React from 'react';
import './App.css';
import * as Keys from './components/keys';

const App = () => {
  return (
    <>
      <Keys.TabHolder activeTabIndex={0} removeInline>
        <Keys.Tab openTabText="Button">
          <h1>Key Button</h1>
          <h3>Properties:</h3>
          <ul>
            <li>display</li>
            <li>position</li>
            <li>margin</li>
            <li>padding</li>
            <li>width</li>
            <li>POSITION: top, right, left, bottom</li>
            <li>borderRadius</li>
            <li>BORDER: borderWidth, borderStyle, borderColor | border</li>
            <li>background | backgroundColor</li>
            <li>boxShadow & boxShadowColor</li>
            <li>color</li>
            <li>textShadow</li>
            <li>activeTextShadow & activeColor</li>
            <li>outline</li>
            <li>hoverBackground & hoverColor</li>
            <li>text: a string used to define the button's name</li>
            <li>styledComponent: a string used to add styled component </li>
          </ul>
          <div>
            <Keys.Button text="Default" />
            <Keys.Highlighter
              code={`<Button text="Default" /> 
               or\n<Button>Default</Button>`}
            />
          </div>
          <div>
            <Keys.Button
              text="Big"
              width="10rem"
              padding="1rem"
              borderRadius="0"
            />
            <Keys.Highlighter
              code={`<Button text="Big" width="10rem" padding="1rem" borderRadius="0" /> 
               or\n<Button width="10rem" padding="1rem" borderRadius="0">Big</Button>`}
            />
          </div>
          <div>
            <Keys.Button
              text="Colored"
              width="7rem"
              color="#3F5981"
              backgroundColor="lightblue"
              border="none"
              hoverBackground="#507CBF"
              hoverColor="lightblue"
            />
            <Keys.Highlighter
              code={`<Button text="Colored" width="7rem" color="#3F5981" backgroundColor="lightblue" border="none" hoverBackground="#507CBF" hoverColor="lightblue" />
            or\n<Button width="7rem" color="#3F5981" backgroundColor="lightblue" border="none" hoverBackground="#507CBF" hoverColor="lightblue">Colored</Button>
            or \nconst btnStyle = { width="7rem", color="#3F5981", backgroundColor="lightblue", border="none", hoverBackground="#507CBF", hoverColor="lightblue" };\n<Button text="Colored" {...btnStyle} />`}
            />
          </div>
          <div>
            <Keys.Button text="With font" width="8rem" border="none" styledComponent={`font: 1.5rem Tahoma;`} />
            <Keys.Highlighter
              code={`<Button text="With font" width="8rem" border="none" styledComponent={\`font: 1.5rem Tahoma;\`} />
            or\n<Button width="8rem" border="none" styledComponent={\`font: 1.5rem Tahoma;\`}>With font</Button>
            or \nconst btnStyleComponent = {\`\n    font: 1.5rem Tahoma;\n\`};\n\n<Button text="With font" width="8rem" border="none" styledComponent={btnStyleComponent} />`}
            />
          </div>
        </Keys.Tab>
        <Keys.Tab openTabText="Input"></Keys.Tab>
        <Keys.Tab openTabText="Paragraph"></Keys.Tab>
        <Keys.Tab openTabText="Wrapper"></Keys.Tab>
        <Keys.Tab openTabText="Modal"></Keys.Tab>
        <Keys.Tab openTabText="Tabs"></Keys.Tab>
        <Keys.Tab openTabText="Highlighter"></Keys.Tab>
        <Keys.Tab openTabText="Spinners"></Keys.Tab>
        <Keys.Tab openTabText="Styled component"></Keys.Tab>
      </Keys.TabHolder>
    </>
  );
};

export default App;
