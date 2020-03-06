import React from "react";
import { buttonDefaultStyle } from "./buttonDefaultStyle";
import { combineStyle, removeKeysFromStyle } from "../../data/utils";
import style from "styled-components";

const ButtonStyle = style.button`
    ${({ addMoreStyle, styledComponent }) => `
        width: ${addMoreStyle.width};
        height: ${addMoreStyle.height};
        border: ${addMoreStyle.border};
        border-radius: ${addMoreStyle.borderRadius};
        background-color: ${addMoreStyle.backgroundColor};
        box-shadow: ${addMoreStyle.boxShadow + addMoreStyle.boxShadowColor};
        color: ${addMoreStyle.color};
        outline: ${addMoreStyle.outline};
        padding: ${addMoreStyle.padding};

        &:hover {
            background:${addMoreStyle.hoverBackground};
            color:${addMoreStyle.hoverColor};
        }

        &:active {
            color:${addMoreStyle.activeColor};
        }

        ${styledComponent && styledComponent}
    `}
`;

const Button = (props) => (
    <ButtonStyle
        addMoreStyle={combineStyle(props.changeDefaultStyle, buttonDefaultStyle)}
        styledComponent={props.styledComponent}
        {...props}
    >
        {props.text}
    </ButtonStyle>
);

export default Button;