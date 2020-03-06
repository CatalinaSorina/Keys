import React, { useState } from "react";
import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";

const Tab = (props) => {
    const { openTabText, closeTabText, buttonStyledComponent, tabStyledComponent, tabAsModal, modalCloseButtonStyle, children } = props;
    const [buttonText, setButtonText] = useState(openTabText ? openTabText : tabAsModal ? "open modal" : "open tab");
    const [tabDisplay, setTabDisplay] = useState("none");

    const openTab = () => {
        (openTabText) ?
            ((buttonText === openTabText) ?
                (closeTabText ? setButtonText(closeTabText) : setButtonText(openTabText))
                : setButtonText(openTabText))
            : (tabAsModal ?
                setButtonText("open modal")
                : (buttonText === "open tab" ?
                    setButtonText("close tab")
                    : setButtonText("open tab")));
        tabDisplay === "none" ? setTabDisplay("flex") : setTabDisplay("none");
    }

    const buttonTabStyle = `
        margin: 1rem;
        display: absolute;
    `

    const modalButtonStyle = `
        position: fixed;
        top: 1rem;
        right: 1rem;
        width: 2.2rem;
    `

    const wrapperTabStyle = `
        display: ${tabDisplay};
        width: 90%;
        height: 90%;
        border: 0.2rem double #C08497;
        background-color: #FFCAD4;
        color: #FFFFFF;
        padding: 1rem;
        text-shadow: 0.1rem 0.1rem 0.2rem #C08497;
        font-family: cursive;
        ${tabAsModal && `
            position: fixed;
            z-index: 4;
            top: 0.2rem;
            width: 97.5%;
            height: 95%;
            align-items: center;
            background: rgba(255, 202, 212,0.8);
        `}
    `

    const closeModal = () => {
        openTabText ? setButtonText(openTabText) : setButtonText("open modal");
        setTabDisplay("none");
    }

    return (<>
        <Button text={buttonText} styledComponent={buttonTabStyle + buttonStyledComponent} onClick={openTab} />
        <Wrapper styledComponent={wrapperTabStyle + tabStyledComponent} >
            {tabAsModal && <Button text="x" styledComponent={modalButtonStyle + modalCloseButtonStyle} onClick={() => closeModal()} />}
            {children}
        </Wrapper>
    </>)
}

export default Tab;