import styled from "styled-components"

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
    height: 90%;
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
        left: 0;
        width: 98vw;
        height: 98vh;
        padding: 1vh 1vw;
        margin: 0;
        z-index: 4;
        border: none;
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

export const TabWrapper = styled.div`
    background-image: radial-gradient(rgba(0,0,0,0.5) 5%, transparent 7%),
    radial-gradient(rgba(255,255,255,0.5) 5%, transparent 7%);
    background-color: #CF92A5;
    background-position: 0 0, 5rem 5rem;
    background-size: 10rem 10rem;
    width:98vw;
    height:98vh;
    position:absolute;
    margin:0;
    top:0;
    padding: 1vh 1vw;
`