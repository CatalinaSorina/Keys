import React, { useState } from "react";
import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";

const Tab = ({ content, openTabText, closeTabText, buttonStyle, tabStyle, modalCloseButton, modalCloseButtonStyle }) => {
    const [buttonText, setButtonText] = useState(openTabText ? openTabText : modalCloseButton ? "open modal" : "open tab");
    const [tabDisplay, setTabDisplay] = useState("none");

    const openTab = () => {
        (openTabText) ?
            ((buttonText === openTabText) ?
                (closeTabText ? setButtonText(closeTabText) : setButtonText(openTabText))
                : setButtonText(openTabText))
            : (modalCloseButton ?
                setButtonText("open modal")
                : (buttonText === "open tab" ?
                    setButtonText("close tab")
                    : setButtonText("open tab")));
        tabDisplay === "none" ? setTabDisplay("flex") : setTabDisplay("none");
    }

    const buttonTabStyle = {
        margin: "1rem",
        display: "absolute"
    }

    const modalButtonStyle = {
        position: "fixed",
        top: "1rem",
        right: "1rem",
        width: "2.2rem"
    }

    const checkTabIsModal =
        modalCloseButton ? {
            position: "fixed",
            zIndex: 4,
            top: "0.2rem",
            width: "97.5%",
            height: "95%",
            alignItems: "center",
            background: "rgba(255, 202, 212,0.8)"
        } : null

    const wrapperTabStyle = {
        width: "90%",
        height: "90%",
        border: "0.2rem double #C08497",
        backgroundColor: "#FFCAD4",
        color: "#FFFFFF",
        padding: "1rem",
        textShadow: "0.1rem 0.1rem 0.2rem #C08497",
        fontFamily: "cursive",
        ...checkTabIsModal
    }

    const closeModal = () => {
        openTabText ? setButtonText(openTabText) : setButtonText("open modal");
        setTabDisplay("none");
    }

    return (<>
        <Button text={buttonText} style={{ ...buttonTabStyle, ...buttonStyle }} fireClick={openTab} />
        <Wrapper style={{ ...wrapperTabStyle, ...tabStyle, display: tabDisplay }}
            content={<>
                {modalCloseButton && <Button text="x" style={{ ...modalButtonStyle, ...modalCloseButtonStyle }} fireClick={() => closeModal()} />}
                {content}
            </>}
        />
    </>)
}

export default Tab;