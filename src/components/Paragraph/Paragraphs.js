import React from "react";
import style from "styled-components";
import { paragraphsDefaultStyle } from "./paragraphsDefaultStyle";
import { combineStyle } from "../../data/utils";

const ParagraphStyled = style.p`
    text-indent:${({ addStyle }) => addStyle.indent};
    color:${({ addStyle }) => addStyle.color};
    text-shadow:${({ addStyle }) => addStyle.textShadow};
`;

const changeTextWithLineBreaks = (text, style) => text.match(/[^\r\n]+/g).map((line, i) =>
    <ParagraphStyled
        key={i + "line"}
        style={style}
        addStyle={combineStyle(style, paragraphsDefaultStyle)}
    >
        {line}
    </ParagraphStyled>
)

const Paragraphs = ({ text, style }) => <>{changeTextWithLineBreaks(text, style)}</>

export default Paragraphs;