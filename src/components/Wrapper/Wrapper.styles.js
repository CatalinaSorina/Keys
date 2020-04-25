//@flow
import styled from 'styled-components';

type WrapperStyleProps = {
  addStyle: {
    display: string,
    position: string,
    flexDirection: string,
    alignItems: string,
    justifyContent: string,
    width: string,
    height: string,
    padding: string,
    margin: string,
    font: string,
    fontSize: string,
    fontFamily: string,
    color: string,
    textShadow: string,
    border?: string,
    borderWidth: string,
    borderStyle: string,
    borderColor: string,
    boxShadow: string,
    background?: string,
    backgroundColor: string,
    overflow: string,
    cursor: string,
    zIndex: string,
    top: string,
    left: string,
    bottom: string,
    right: string,
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
    position: ${addStyle.position};
    flex-direction: ${addStyle.flexDirection};
    align-items: ${addStyle.alignItems};
    justify-content: ${addStyle.justifyContent};
    width: ${addStyle.width};
    height: ${addStyle.height};
    padding: ${addStyle.padding};
    margin: ${addStyle.margin};
    ${addStyle.font
        ? `font: ${addStyle.font};`
        : `
          font-size: ${addStyle.fontSize};
          font-family: ${addStyle.fontFamily};
        `}
    color: ${addStyle.color};
    text-shadow: ${addStyle.textShadow};
    ${addStyle.border
        ? `border: ${addStyle.border};`
        : `
          border-width: ${addStyle.borderWidth};
          border-style: ${addStyle.borderStyle};
          border-color: ${addStyle.borderColor};
        `}
    box-shadow: ${addStyle.boxShadow};
    ${addStyle.background
        ? `background: ${addStyle.background};`
        : `background-color: ${addStyle.backgroundColor};`}
    overflow: ${addStyle.overflow};
    cursor: ${addStyle.cursor};
    z-index: ${addStyle.zIndex};
    top: ${addStyle.top};
    left: ${addStyle.left};
    bottom: ${addStyle.bottom};
    right: ${addStyle.right};

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
