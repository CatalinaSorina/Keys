import React from "react";
import style from "styled-components";
import { paragraphsDefaultStyle } from "./paragraphsDefaultStyle";
import { combineStyle } from "../../data/utils";

const ParagraphStyled = style.p`
    ${({ addStyle, styledComponent }) => `
        text-indent:${addStyle.indent};
        color:${addStyle.color};
        text-shadow:${addStyle.textShadow};

        ${styledComponent && styledComponent}
    `}
`;

const changeTextWithLineBreaks = (props) => {
    const { text, changeDefaultStyle, styledComponent } = props;

    return text.match(/[^\r\n]+/g).map((line, i) =>
        <ParagraphStyled
            key={i + "line"}
            addStyle={combineStyle(changeDefaultStyle, paragraphsDefaultStyle)}
            styledComponent={styledComponent}
            {...props}
        >
            {line}
        </ParagraphStyled>
    )
}

const Paragraphs = (props) => <>{changeTextWithLineBreaks(props)}</>

export default Paragraphs;