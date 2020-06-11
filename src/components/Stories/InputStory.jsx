import React from 'react';
import StoryTab from '../Story/StoryTabContent';
import { KEYS } from '../keys';

const InputStory = () => (
  <StoryTab
    keyName={KEYS.INPUT}
    keyProps={[
      'width',
      'height',
      'padding',
      'margin',
      'border',
      'borderRadius',
      'outline',
      'color',
      'backgroundColor',
      'fontSize',
      'textShadow',
      'textAlign',
      'placeholderColor',
      'placeholderTextShadow',
      'type',
      'text: a string used to define input value if input type is text',
      'value: if the type of the input is not text',
      'onChange: a function to add changes if the input value is changed',
      'styledComponent: a string used to add styled component',
    ]}
    examples={[
      {
        props: {
          text: 'Default',
        },
        code: `<Input text="Default" />`,
      },
      {
        props: {
          text: 'Big',
          width: '18rem',
          padding: '2rem',
          borderRadius: '0',
        },
        code: `<Input text="Big" width="18rem" padding="2rem" borderRadius="0" />`,
      },
      {
        props: {
          placeholder: 'Colorful placeholder',
          fontSize:'1.2rem',
          color: '#4E745B',
          backgroundColor: '#82CC9B',
          border: 'none',
          placeholderColor: '#7C5E5E',
          placeholderTextShadow:'none',
        },
        code: `<Input placeholder="Colorful placeholder" fontSize="1.2rem" color="#4E745B" backgroundColor="#82CC9B" border="none" placeholderColor="#7C5E5E" placeholderTextShadow="none" />
    or \nconst inputStyle = { fontSize="1.2rem",
    color="#4E745B",
    backgroundColor="#82CC9B",
    border="none",
    placeholderColor="#7C5E5E"
    placeholderTextShadow="none"\n};\n<Input placeholder="Colorful placeholder" {...inputStyle} />`,
      },
      {
        props: {
          text: 'Font with styledComponent',
          width: '20rem',
          border: 'none',
          styledComponent: `font: 1.5rem Tahoma; font-style:italic;`,
        },
        code: `<Input text="With font" width="20rem" border="none" styledComponent={\`font: 1.5rem Tahoma;font-style:italic;\`} />
    or \nconst inputStyleComponent = \`
    font: 1.5rem Tahoma;
    font-style:italic;\n\`;\n\n<Input text="With font" width="20rem" border="none" styledComponent={inputStyleComponent} />`,
      },
    ]}
    columns={2}
  />
);

export default InputStory;
