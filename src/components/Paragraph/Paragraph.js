import React from "react";
import style from "styled-components";
import { paragraphDefaultStyle } from "./paragraphDefaultStyle";
import { combineStyle } from "../../data/utils";

const ParagraphStyled = style.p`
    text-indent:${({ addStyle }) => addStyle.indent};
`;

const changeTextWithLineBreaks = (text, style) => text.match(/[^\r\n]+/g).map((line, i) =>
    <ParagraphStyled
        key={i + "line"}
        style={style}
        addStyle={combineStyle(style, paragraphDefaultStyle)}
    >
        {line}
    </ParagraphStyled>
)

const P = ({ text, style }) => <>{changeTextWithLineBreaks(text, style)}</>

export default P;