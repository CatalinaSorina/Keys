import styled, { css, keyframes } from 'styled-components';
import { moveOn, selectFrom } from './Cross.utils';

type MotionProps = {
  position: string,
  unicolor: boolean,
  colors: Array<string>,
  color?: string,
};

type WrapperProps = {
  margin: string,
  padding: string,
  width: string,
  height: string,
  background: string,
};

type CircleProps = {
  position: string,
  marginCircle: string,
  size: string,
  color?: string,
  colors: Array<string>,
  colorIndex: number,
  border: string,
};

const motion = ({
  position,
  unicolor,
  colors,
  color,
}: MotionProps) => keyframes`
    12.5%{
        opacity: 0.75;
        ${unicolor && !color && `background:${colors[selectFrom(colors, 0)]}`}
    }
    25% {
        transform: scale(0.75, 0.75);
        grid-area: ${moveOn(position + 2)};
        margin: 0.2rem;
        ${unicolor && !color && `background:${colors[selectFrom(colors, 1)]};`}
    }
    37.5% {
        transform: scale(0.5, 0.5);
        grid-area: ${moveOn(position + 3)};
        margin: 0.1rem;
        ${unicolor && !color && `background:${colors[selectFrom(colors, 2)]};`}
    }
    50% {
        opacity: 0.5;
        ${unicolor && !color && `background:${colors[selectFrom(colors, 3)]};`}
    }
    62.5% {
        transform: scale(0.75, 0.75);
        grid-area: ${moveOn(position + 4)};
        margin: 0.2rem;
        ${unicolor && !color && `background:${colors[selectFrom(colors, 4)]};`}
    }
    75% {
        opacity: 0.75;
        ${unicolor && !color && `background:${colors[selectFrom(colors, 5)]};`}
    }
    87.5% {
        grid-area: ${moveOn(position + 5)};
        ${unicolor && !color && `background:${colors[selectFrom(colors, 6)]};`}
    }
    100% {
        opacity: 1;
        ${unicolor && !color && `background:${colors[selectFrom(colors, 7)]};`}
    }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  border-radius: 1rem;
  ${({
    margin,
    padding,
    width,
    height,
    background,
  }: WrapperProps): string => css`
    margin: ${margin};
    padding: ${padding};
    width: ${width};
    height: ${height};
    background: ${background};
  `}
`;

export const Circle = styled.div`
  border-radius: 50%;
  animation-name: ${motion};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  ${({
    position,
    marginCircle,
    size,
    color,
    colors,
    colorIndex,
    border,
  }: CircleProps): string => css`
    grid-area: ${moveOn(position + 1)};
    margin: ${marginCircle};
    width: ${size};
    height: ${size};
    background: ${color || colors[selectFrom(colors, colorIndex)]};
    border: ${border};
  `}
`;
