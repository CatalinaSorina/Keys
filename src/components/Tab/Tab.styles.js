export const buttonTabStyle = (active, activeButtonStyle) => `
    ${active && `
        background-color: #CF92A5;
        text-shadow:0 0.05rem 0.2rem #C08497;
        &:active {
            text-shadow:none;
        }
        ${activeButtonStyle && activeButtonStyle}
    `}
    display: absolute;
`

export const wrapperTabStyle = (tabDisplay, tabAsModal) => `
    display: ${tabDisplay};
    width: 98%;
    height: 95%;
    border: 0.2rem double #C08497;
    background-color: #FFCAD4;
    color: #FFFFFF;
    padding: 1rem;
    margin-top: 0.5rem;
    text-shadow: 0.1rem 0.1rem 0.2rem #C08497;
    font-family: cursive;
    ${tabAsModal && `
        position: fixed;
        top: 0;
        margin: 0;
        z-index: 4;
        border: none;
        width: 100vw;
        height: 100vh;
        align-items: center;
        background: rgba(255, 202, 212,0.8);
    `}
`

export const modalButtonStyle = `
    position: fixed;
    top: 0.5rem;
    right: 0.5rem;
    width: 2.2rem;
`