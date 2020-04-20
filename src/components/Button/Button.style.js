import style from 'styled-components';

const ButtonStyle = style.button`
    ${({ addStyle, styledComponent }) => `
        width: ${addStyle.width};
        border: ${addStyle.border};
        border-radius: ${addStyle.borderRadius};
        background-color: ${addStyle.backgroundColor};
        box-shadow: ${addStyle.boxShadow + addStyle.boxShadowColor};
        color: ${addStyle.color};
        outline: ${addStyle.outline};
        padding: ${addStyle.padding};

        &:hover {
            background:${addStyle.hoverBackground};
            color:${addStyle.hoverColor};
        }

        &:active {
            color:${addStyle.activeColor};
        }

        ${styledComponent && styledComponent}
    `}
`;

export default ButtonStyle;