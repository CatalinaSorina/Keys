import React from "react";
import style from "styled-components";
import { paragraphsDefaultStyle } from "./paragraphsDefaultStyle";
import { combineStyle, removeKeysFromStyle } from "../../data/utils";

const ParagraphStyled = style.p`
    ${({ addStyle, styledComponent }) => `
        text-indent:${addStyle.indent};
        color:${addStyle.color};
        text-shadow:${addStyle.textShadow};

        ${styledComponent && styledComponent}
    `}
`;

const changeTextWithLineBreaks = (text, style, styledComponent) => text.match(/[^\r\n]+/g).map((line, i) =>
    <ParagraphStyled
        key={i + "line"}
        style={removeKeysFromStyle(style, paragraphsDefaultStyle)}
        addStyle={combineStyle(style, paragraphsDefaultStyle)}
        styledComponent={styledComponent}
    >
        {line}
    </ParagraphStyled>
)

const Paragraphs = ({ text, style, styledComponent }) => <>{changeTextWithLineBreaks(text, style, styledComponent)}</>

export default Paragraphs;