import React from "react";
import { buttonDefaultStyle } from "./buttonDefaultStyle";
import { combineStyle } from "../../data/utils";
import style from "styled-components";

const ButtonStyle = style.button`
    width: ${({ addMoreStyle }) => addMoreStyle.width};
    height: ${({ addMoreStyle }) => addMoreStyle.height};
    border: ${({ addMoreStyle }) => addMoreStyle.border};
    border-radius: ${({ addMoreStyle }) => addMoreStyle.borderRadius};
    background-color: ${({ addMoreStyle }) => addMoreStyle.backgroundColor};
    box-shadow: ${({ addMoreStyle }) => addMoreStyle.boxShadow + addMoreStyle.boxShadowColor};
    color: ${({ addMoreStyle }) => addMoreStyle.color};
    outline: ${({ addMoreStyle }) => addMoreStyle.outline};
    padding: ${({ addMoreStyle }) => addMoreStyle.padding};

    &:hover {
        background:${({ addMoreStyle }) => addMoreStyle.hoverBackground};
        color:${({ addMoreStyle }) => addMoreStyle.hoverColor};
    }
    &:active {
        color:${({ addMoreStyle }) => addMoreStyle.backgroundColor};
    }
`;

const Button = ({ style, text, fireClick }) => (
    <ButtonStyle style={style} addMoreStyle={combineStyle(style, buttonDefaultStyle)} onClick={fireClick}>{text}</ButtonStyle>
);

export default Button;