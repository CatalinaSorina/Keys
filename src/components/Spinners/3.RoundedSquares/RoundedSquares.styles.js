import styled, { keyframes, css } from 'styled-components';

const skew = (color1, color2, color3) => keyframes`
  0% {
    transform: skew(30deg,30deg);
    background: ${color1};
  }
  50% {
    transform: skew(0deg,0deg);
    background: ${color2};
  }
  100% {
    transform: skew(-30deg,-30deg);
    background: ${color3};
  }
`;

const rotate = (color1, color2, color3) => keyframes`
  0% {
    transform: rotate(30deg);
    background: ${color1};
  }
  50% {
    transform: rotate(0deg);
    background: ${color2};
  }
  100% {
    transform: rotate(-30deg);
    background: ${color3};
  }
`;

const scale = (color1, color2, color3) => keyframes`
  0% {
    transform: scale(1);
    background: ${color1};
  }
  50% {
    transform: scale(0.5);
    background: ${color2};
  }
  100% {
    transform: scale(0.25);
    background: ${color3};
  }
`;

const matrix = (color1, color2, color3) => keyframes`
  0% {
    transform: matrix(0.5, 0.5, -0.5, 0.5, -0.5, 25);
    background: ${color1};
  }
  50% {
    transform: matrix(0.8, 0.8, -0.8, 0.8, -0.8, 30);
    background: ${color2};
  }
  100% {
    background: ${color3};
  }
`;

const translate = (color1, color2, color3) => keyframes`
  0% {
    transform: translate(1rem,1rem);
    background: ${color1};
  }
  50% {
    transform: translate(-1rem,0rem);
    background: ${color2};
  }
  100% {
    transform: translate(0rem,-1rem);
    background: ${color3};
  }
`;

const getAnimation = (name, color) => {
  const color1 = `rgba(${color},1)`;
  const color2 = `rgba(${color},0.5)`;
  const color3 = `rgba(${color},0.1)`;
  switch (name) {
    case 'skew':
      return skew(color1, color2, color3);
    case 'rotate':
      return rotate(color1, color2, color3);
    case 'scale':
      return scale(color1, color2, color3);
    case 'matrix':
      return matrix(color1, color2, color3);
    case 'translate':
      return translate(color1, color2, color3);
    default:
      return skew(color1, color2, color3);
  }
};

export const SquareHolder = styled.div`
  display: flex;
`;

export const RoundedSquare = styled.div`
  ${({
 animation, time, delay, type, color, borderColor, borderRadius, size, margin,
}) => css`
    border-radius: ${borderRadius};
    width: ${size};
    height: ${size};
    margin: ${margin};
    background: ${color};
    border: 0.1rem solid ${borderColor};
    animation: ${getAnimation(animation, color)} ${time || '1s'} ${delay || '0.1s'} infinite ${type || 'alternate'};
  `}
`;
