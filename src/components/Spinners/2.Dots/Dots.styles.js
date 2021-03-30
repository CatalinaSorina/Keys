import styled, { keyframes } from 'styled-components';

export const translate = (
  translate0,
  translate30,
  translate60,
  translate100,
) => keyframes`
    0% {
        transform: translate(${translate0});
    }
    30% {
        transform: translate(${translate30});
    }
    60% {
        transform: translate(${translate60});
    }
    100% {
        transform: translate(${translate100});
    }
`;

export const scale = (scale0, scale50, scale100) => keyframes`
    0% {
        transform: scale(${scale0});
    }
    50% {
        transform: scale(${scale50});
    }
    100% {
        transform: scale(${scale100});
    }
`;

export const Wrapper = styled.div`
  display: flex;
  margin: 1rem;
  padding: 0;
  background: transparent;
  border-radius: 1rem;
`;

export const Dot = styled.div`
  border-radius: 50%;
  border: 0.05rem solid ${({ borderColor }) => borderColor};
  width: 1rem;
  height: 1rem;
  margin: 0.3rem;
  background: ${({ color }) => color};
  animation-name: ${({ motion }) => motion};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;
