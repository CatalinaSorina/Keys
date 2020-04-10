import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Cross from './Cross/Cross';

const Spinners = () => {
  return (
    <Wrapper
      style={{
        width: '70%',
        height: '70%',
        padding: '2rem',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#CF92A5',
      }}
    >
      <h1>Spinners:</h1>
      <Wrapper
        style={{
          width: '50rem',
          height: 'inherit',
          justifyContent: 'space-around',
          alignItems: 'center',
          border: 'none',
          background: 'transparent',
        }}
      >
        <div style={{ display: 'flex' }}>
          <Cross />
          <Cross unicolor />
          <Cross colors="green" />
          <Cross colors="green" unicolor />
          <Cross colors="blue" unicolor />
          <Cross colors="blue" />
        </div>
        <div style={{ display: 'flex' }}>
          <Cross colors="peach" />
          <Cross colors="peach" unicolor />
          <Cross colors="rainbow" />
          <Cross colors="rainbow" unicolor />
          <Cross colors={["red","yellow","blue","green","black","purple","orange","lightgreen"]} unicolor />
          <Cross colors={["red","yellow","blue","green"]} />
        </div>
      </Wrapper>
    </Wrapper>
  );
};

export default Spinners;
