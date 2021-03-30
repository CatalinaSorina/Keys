import style, { css } from 'styled-components';

const ButtonStyle = style.button`
    ${({ addStyle, styledComponent }) => `
        display: ${addStyle.display};
        position: ${addStyle.position};
        margin: ${addStyle.margin};
        top: ${addStyle.top};
        right: ${addStyle.right};
        left: ${addStyle.left};
        bottom: ${addStyle.bottom};
        width: ${addStyle.width};
        ${addStyle.border
            ? `border: ${addStyle.border};`
            : `border-width: ${addStyle.borderWidth};
            border-style: ${addStyle.borderStyle};
            border-color: ${addStyle.borderColor};
        `}
        border-radius: ${addStyle.borderRadius};
        ${addStyle.background
            ? `background: ${addStyle.background};`
            : `background-color: ${addStyle.backgroundColor};`}
        box-shadow: ${addStyle.boxShadow + addStyle.boxShadowColor};
        color: ${addStyle.color};
        text-shadow:${addStyle.textShadow};
        outline: ${addStyle.outline};
        padding: ${addStyle.padding};

        &:hover {
            background:${addStyle.hoverBackground};
            color:${addStyle.hoverColor};
        }

        &:active {
            color:${addStyle.activeColor};
            text-shadow:${addStyle.activeTextShadow};
        }

        ${css`${styledComponent && styledComponent}`}
    `}
`;

export default ButtonStyle;
