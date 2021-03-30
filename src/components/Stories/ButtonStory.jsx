import React from 'react';
import StoryTab from '../Story/StoryTabContent';
import { KEYS } from '../keys';

const ButtonStory = () => (
  <StoryTab
    keyName={KEYS.BUTTON}
    keyProps={[
      'display',
      'position',
      'margin',
      'padding',
      'width',
      'POSITION: top, right, left, bottom',
      'borderRadius',
      'BORDER: borderWidth, borderStyle, borderColor | border',
      'background | backgroundColor',
      'boxShadow & boxShadowColor',
      'color',
      'textShadow',
      'activeTextShadow & activeColor',
      'outline',
      'hoverBackground & hoverColor',
      "text: a string used to define the button's name",
      'styledComponent: a string used to add styled component',
    ]}

    examples={[{
      props: {
        text: 'Default',
      },
      code: `<Button text="Default" /> 
        or\n<Button>Default</Button>`,
    }, {
      props: {
        text: 'Big',
        width: '10rem',
        padding: '1rem',
        borderRadius: '0',
      },
      code: `<Button text="Big" width="10rem" padding="1rem" borderRadius="0" /> 
        or\n<Button width="10rem" padding="1rem" borderRadius="0">Big</Button>`,
    }, {
      props: {
        text: 'Colored',
        width: '7rem',
        color: '#3F5981',
        backgroundColor: 'lightblue',
        border: 'none',
        hoverBackground: '#507CBF',
        hoverColor: 'lightblue',
      },
      code: `<Button text="Colored" width="7rem" color="#3F5981" backgroundColor="lightblue" border="none" hoverBackground="#507CBF" hoverColor="lightblue" />
        or\n<Button width="7rem" color="#3F5981" backgroundColor="lightblue" border="none" hoverBackground="#507CBF" hoverColor="lightblue">Colored</Button>
        or \nconst btnStyle = { width="7rem", color="#3F5981", backgroundColor="lightblue", border="none", hoverBackground="#507CBF", hoverColor="lightblue" };\n<Button text="Colored" {...btnStyle} />`,
    }, {
      props: {
        text: 'Font with styledComponent',
        width: '15rem',
        border: 'none',
        styledComponent: 'font: 1.5rem Tahoma;',
      },
      code: `<Button text="With font" width="15rem" border="none" styledComponent={\`font: 1.5rem Tahoma;\`} />
        or\n<Button width="15rem" border="none" styledComponent={\`font: 1.5rem Tahoma;\`}>With font</Button>
        or \nconst btnStyleComponent = \`\n    font: 1.5rem Tahoma;\n\`;\n\n<Button text="With font" width="15rem" border="none" styledComponent={btnStyleComponent} />`,
    }]}

    columns={2}
  />
);

export default ButtonStory;
