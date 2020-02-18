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
        backgroundColor: "#91A6FF",
        boxShadowColor: "#FF88DC",
        color: "#FAFF7F"
    }

    const wrapperTabStyle = {
        width: "90%",
        height: "90%",
        backgroundColor: "rgba(255,255,255,0.3)",
        borderColor: "#FF5154",
        color: "#91A6FF",
        fontFamily: "cursive"
    }

    return (<>
        <Button text={buttonText} style={{ ...buttonTabStyle, ...buttonStyle }} fireClick={openTab} />
        <Wrapper style={{ ...wrapperTabStyle, ...tabStyle, display: tabDisplay }} content={content} />
    </>)
}

export default Tab;