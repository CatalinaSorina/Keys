/* eslint-disable no-shadow */
import styled, { keyframes } from 'styled-components';

const opacity = (opacity0, opacity25, opacity50, opacity75, opacity100) => keyframes`
  0% {
    opacity:${opacity0};
  }
  25% {
    opacity:${opacity25};
  }
  50% {
    opacity:${opacity50};
  }
  75% {
    opacity:${opacity75};
  }
  100% {
    opacity:${opacity100};
  }
`;

const rotate = (grade100) => keyframes`
  100% {
    transform: rotate(${grade100});
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  align-items: center;
  margin: 1rem;
  padding: 0;
  background: transparent;
  width: 6rem;
  height: 6rem;
  animation-name: ${() => rotate('360deg')};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

export const Dot = styled.div`
  justify-self: center;
  border-radius: 50%;
  border: ${({ removeBorder, borderColor }) => !removeBorder && `0.05rem solid ${borderColor}`};
  width: 0.5rem;
  height: 0.5rem;
  background: ${({ color }) => color};
  grid-area: 3/2;
`;

export const Petal = styled.div`
  justify-self: center;
  border-radius: 50%;
  border: ${({ removeBorder, borderColor }) => !removeBorder && `0.05rem solid ${borderColor}`};
  width: 0.5rem;
  height: 1.2rem;
  background: ${({ color }) => color};
  grid-area: ${({ position }) => position};
  ${({ rotate }) => rotate && `transform: rotate(${rotate});`};
  animation-name: ${() => opacity(1, 0.25, 0.5, 0.75, 1)};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;
