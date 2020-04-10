import styled, { keyframes } from 'styled-components';
import { moveOn, setCircleColor, selectFrom } from './Cross.utils';

const motion = ({ position, unicolor, colors }) => keyframes`
    12.5%{
        opacity: 0.75;
        ${unicolor && `background:${colors[selectFrom(colors, 0)]}`}
    }
    25% {
        transform: scale(0.75, 0.75);
        grid-area: ${moveOn(position + 2)};
        margin: 0.2rem;
        ${unicolor && `background:${colors[selectFrom(colors, 1)]};`}
    }
    37.5% {
        transform: scale(0.5, 0.5);
        grid-area: ${moveOn(position + 3)};
        margin: 0.1rem;
        ${unicolor && `background:${colors[selectFrom(colors, 2)]};`}
    }
    50% {
        opacity: 0.5;
        ${unicolor && `background:${colors[selectFrom(colors, 3)]};`}
    }
    62.5% {
        transform: scale(0.75, 0.75);
        grid-area: ${moveOn(position + 4)};
        margin: 0.2rem;
        ${unicolor && `background:${colors[selectFrom(colors, 4)]};`}
    }
    75% {
        opacity: 0.75;
        ${unicolor && `background:${colors[selectFrom(colors, 5)]};`}
    }
    87.5% {
        grid-area: ${moveOn(position + 5)};
        ${unicolor && `background:${colors[selectFrom(colors, 6)]};`}
    }
    100% {
        opacity: 1;
        ${unicolor && `background:${colors[selectFrom(colors, 7)]};`}
    }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ background }) => background};
  border-radius: 1rem;
`;

export const Circle = styled.div`
  grid-area: ${({ position }) => moveOn(position + 1)};
  margin: ${({ margin_circle }) => margin_circle};
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  background: ${({ color, colors, unicolor, colorIndex }) =>
    setCircleColor(color, colors, unicolor, colorIndex)};
  ${({ border }) => `border:${border}`};
  animation-name: ${motion};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;
