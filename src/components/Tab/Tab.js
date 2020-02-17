import React, { useState } from "react";
import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";

const Tab = ({ content, openButtonText, closeButtonText, buttonStyle, tabStyle }) => {
    const [buttonText, setButtonText] = useState(openButtonText ? openButtonText : "open tab");
    const [tabDisplay, setTabDisplay] = useState("none");

    const openTab = () => {
        if (openButtonText) {
            buttonText === openButtonText ? (closeButtonText ? setButtonText(closeButtonText) : setButtonText(openButtonText)) : setButtonText(openButtonText);
        } else {
            buttonText === "open tab" ? setButtonText("close tab") : setButtonText("open tab");
        }
        tabDisplay === "none" ? setTabDisplay("flex") : setTabDisplay("none");
    }

    return (<>
        <Button text={buttonText} style={{ ...buttonStyle, position: "relative", marginRight: "1rem" }} fireClick={openTab} />
        <Wrapper addStyle={{ ...tabStyle, width: "90%", height: "90%", display: tabDisplay }} content={content} />
    </>)
}

export default Tab;