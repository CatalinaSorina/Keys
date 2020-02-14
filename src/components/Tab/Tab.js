import React, { useState } from "react";
import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";

const Tab = ({ content, buttonStyle, tabStyle }) => {
    const [buttonText, setButtonText] = useState("open tab");
    const [tabDisplay, setTabDisplay] = useState("none");

    const openTab = () => {
        buttonText === "open tab" ? setButtonText("close tab") : setButtonText("open tab");
        tabDisplay === "none" ? setTabDisplay("flex") : setTabDisplay("none");
    }

    return (<>
        <Button text={buttonText} style={{ ...buttonStyle, position: "relative" }} fireClick={openTab} />
        <Wrapper addStyle={{ ...tabStyle, width: "90%", height: "90%", display: tabDisplay }} content={content} />
    </>)
}

export default Tab;