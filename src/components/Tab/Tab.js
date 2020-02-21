import React, { useState } from "react";
import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";

const Tab = ({ content, openTabText, closeTabText, buttonStyle, tabStyle }) => {
    const [buttonText, setButtonText] = useState(openTabText ? openTabText : "open tab");
    const [tabDisplay, setTabDisplay] = useState("none");

    const openTab = () => {
        if (openTabText) {
            buttonText === openTabText ? (closeTabText ? setButtonText(closeTabText) : setButtonText(openTabText)) : setButtonText(openTabText);
        } else {
            buttonText === "open tab" ? setButtonText("close tab") : setButtonText("open tab");
        }
        tabDisplay === "none" ? setTabDisplay("flex") : setTabDisplay("none");
    }

    const buttonTabStyle = {
        margin: "1rem",
        display: "absolute"
    }

    const wrapperTabStyle = {
        width: "90%",
        height: "90%",
        border: "0.2rem double #C08497",
        backgroundColor: "#FFCAD4",
        color: "#FFFFFF",
        padding: "1rem",
        textShadow: "0.1rem 0.1rem 0.2rem #C08497",
        fontFamily: "cursive"
    }

    return (<>
        <Button text={buttonText} style={{ ...buttonTabStyle, ...buttonStyle }} fireClick={openTab} />
        <Wrapper style={{ ...wrapperTabStyle, ...tabStyle, display: tabDisplay }} content={content} />
    </>)
}

export default Tab;