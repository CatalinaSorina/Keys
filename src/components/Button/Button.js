import React from "react";
import { buttonDefaultStyle } from "./buttonDefaultStyle";
import { combineStyle } from "../../data/utils";
import style from "styled-components";

const ButtonStyle = style.button`
    ${({ addStyle, styledComponent }) => `
        width: ${addStyle.width};
        height: ${addStyle.height};
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

const Button = (props) => {
    const { changeDefaultStyle, styledComponent, text, ...restProps } = props;
    return <ButtonStyle
        addStyle={combineStyle(changeDefaultStyle, buttonDefaultStyle)}
        styledComponent={styledComponent}
        {...restProps}
    >
        {text}
    </ButtonStyle>
};

export default Button;