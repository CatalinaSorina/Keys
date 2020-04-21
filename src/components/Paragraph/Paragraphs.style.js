import style from "styled-components";

const ParagraphStyled = style.p`
    ${({ addStyle, styledComponent }) => `
        text-indent:${addStyle.indent};
        color:${addStyle.color};
        text-shadow:${addStyle.textShadow};

        ${styledComponent && styledComponent}
    `}
`;

export default ParagraphStyled;