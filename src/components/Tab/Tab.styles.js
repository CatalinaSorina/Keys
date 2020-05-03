import styled from 'styled-components';

export const activeButtonDefaultStyle = {
  backgroundColor: '#CF92A5',
  textShadow: '0 0.05rem 0.2rem #C08497',
  activeTextShadow: 'none',
};

export const tabDefaultStyle = {
  width: '95.5vw',
  height: '88vh',
  borderWidth: '0.5vh 0.28vw',
  borderStyle: 'double',
  borderColor: '#C08497',
  backgroundColor: '#FFCAD4',
  color: '#FFFFFF',
  padding: '1vh 1vw',
  marginTop: '1vh',
  textShadow: '0.1rem 0.1rem 0.2rem #C08497',
};

export const TabWrapper = styled.div`
  background-image: radial-gradient(rgba(0, 0, 0, 0.5) 5%, transparent 7%),
    radial-gradient(rgba(255, 255, 255, 0.5) 5%, transparent 7%);
  background-color: #cf92a5;
  background-position: 0 0, 5rem 5rem;
  background-size: 10rem 10rem;
  width: 98vw;
  height: 98vh;
  position: absolute;
  margin: 0;
  top: 0;
  padding: 1vh 1vw;
`;
