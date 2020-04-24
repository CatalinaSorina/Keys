//@flow
import styled from 'styled-components';

type WrapperStyleProps = {
  addStyle: {
    display: string,
    flexDirection: string,
    alignItems: string,
    justifyContent: string,
    width: string,
    height: string,
    padding: string,
    margin: string,
    color: string,
    borderWidth: string,
    borderStyle: string,
    borderColor: string,
    backgroundColor: string,
    overflow: string,
    cursor: string,
    scrollbarWidth: string,
    scrollbarTrackBoxShadow: string,
    scrollbarThumbBorderRadius: string,
    scrollbarThumbBackgroundImage: string,
    selectColor: string,
    selectBackgroundColor: string,
    selectTextShadow: string,
  },
  styledComponent?: styled,
};

export const WrapperStyle = styled.div`
  ${({ addStyle, styledComponent }: WrapperStyleProps) => `
    display: ${addStyle.display};
    flex-direction: ${addStyle.flexDirection};
    align-items: ${addStyle.alignItems};
    justify-content: ${addStyle.justifyContent};
    width: ${addStyle.width};
    height: ${addStyle.height};
    padding: ${addStyle.padding};
    margin: ${addStyle.margin};
    color: ${addStyle.color};
    border-width: ${addStyle.borderWidth};
    border-style: ${addStyle.borderStyle};
    border-color: ${addStyle.borderColor};
    background-color: ${addStyle.backgroundColor};
    overflow: ${addStyle.overflow};
    cursor: ${addStyle.cursor};

    *::-webkit-scrollbar {
      width: ${addStyle.scrollbarWidth};
    }

    *::-webkit-scrollbar-track {
      box-shadow: ${addStyle.scrollbarTrackBoxShadow};
    }

    *::-webkit-scrollbar-thumb {
      border-radius: ${addStyle.scrollbarThumbBorderRadius};
      background-image: ${addStyle.scrollbarThumbBackgroundImage};
    }

    &::selection, *::selection {
      color: ${addStyle.selectColor};
      background-color:${addStyle.selectBackgroundColor};
      text-shadow:${addStyle.selectTextShadow};
    }

    ${styledComponent ? styledComponent : ''}
  `}
`;

export default WrapperStyle;
