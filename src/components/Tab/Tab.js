import React, { useState } from "react";
import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";
import { buttonTabStyle, modalButtonStyle, wrapperTabStyle } from "./Tab.styles";

const Tab = (props) => {
    const {
        openTabText = "open",
        closeTabText = "close",
        buttonStyledComponent = "",
        tabStyledComponent = "",
        tabAsModal = false,
        modalCloseButtonStyle = "",
        children,
        activeTab = false,
        activeButtonStyle = "",
        ...restProps
    } = props;
    const [active, setActive] = useState(activeTab);
    const [buttonText, setButtonText] = useState(active ? (closeTabText ? closeTabText : "close") : openTabText ? openTabText : "open");
    const [tabDisplay, setTabDisplay] = useState(active ? "flex" : "none");

    const setTab = () => {
        if (tabDisplay === "none") {
            setTabDisplay("flex");
            setActive(true);
            setButtonText(closeTabText);
        } else {
            setTabDisplay("none");
            setActive(false);
            setButtonText(openTabText);
        }
    }

    return (<React.Fragment {...restProps}>
        <Button text={buttonText} styledComponent={buttonStyledComponent + buttonTabStyle(active, activeButtonStyle)} onClick={setTab} />
        <Wrapper styledComponent={wrapperTabStyle(tabDisplay, tabAsModal) + tabStyledComponent} >
            {tabAsModal && <Button text="x" styledComponent={modalButtonStyle + modalCloseButtonStyle} onClick={() => setTab()} />}
            {children}
        </Wrapper>
    </React.Fragment>)
}

export default Tab;