import style from 'styled-components';

const ButtonStyle = style.button`
    ${({ addStyle, styledComponent }) => `
        display: ${addStyle.display};
        position: ${addStyle.position};
        top: ${addStyle.top};
        right: ${addStyle.right};
        left: ${addStyle.left};
        bottom: ${addStyle.bottom};
        width: ${addStyle.width};
        border: ${addStyle.border};
        border-radius: ${addStyle.borderRadius};
        background-color: ${addStyle.backgroundColor};
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

        ${styledComponent && styledComponent}
    `}
`;

export default ButtonStyle;
