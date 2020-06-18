import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Cross from './1.Cross/Cross';
import Dots from './2.Dots/Dots';
import RoundedSquares from './3.RoundedSquares/RoundedSquares';
import Keyboard from './4.Keyboard/Keyboard';
import Flower from './5.Flower/Flower';
import Web from './6.Web/Web';

const Spinners = () => {
  return (
    <Wrapper
      style={{
        width: '70%',
        height: '70%',
        padding: '2rem',
        border: '0.1rem solid #2D3142',
        background: '#CF92A5',
      }}
    >
      <h1>Spinners:</h1>
      <Wrapper
        width="100%"
        height="25rem"
        justifyContent="space-around"
        alignItems="center"
        border="none"
        background="transparent"
      >
        <table>
          <thead>
            <tr>
              <th>Cross</th>
              <th>Dots</th>
              <th>RoundedSquares</th>
              <th>Keyboard</th>
              <th>Flower</th>
              <th>Web</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Cross colors="rainbow" unicolor /></td>
              <td><Dots colors={['#F3DA25', '#25F389', '#25B1F3']} borderColors="rgba(6, 31, 43,0.5)" /></td>
              <td><RoundedSquares rgbColorNumbers="91, 167, 133" borderColor="#549175" /></td>
              <td><Keyboard textColor="black" /></td>
              <td><Flower color="#88BFE1" middleColor="#FFC300" removeMiddleBorder borderColor='#3C5564' /></td>
              <td><Web color="black" /></td>
            </tr>
          </tbody>
        </table>
      </Wrapper>
    </Wrapper>
  );
};

export default Spinners;