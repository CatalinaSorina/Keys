import styled from "styled-components";

export const BarchartWrapper = styled.div`
  display: flex;
  ${({ barchartWrapperStyle }) => `
        width:${barchartWrapperStyle.width};
        background-color:${barchartWrapperStyle.backgroundColor};
        height:${barchartWrapperStyle.height};
        margin-right:${barchartWrapperStyle.marginRight};
        margin-left:${barchartWrapperStyle.marginLeft};
        margin-top:${barchartWrapperStyle.marginTop};
        margin-bottom:${barchartWrapperStyle.marginBottom};
        border:${barchartWrapperStyle.border};
        border-radius:${barchartWrapperStyle.borderRadius};
        cursor:${barchartWrapperStyle.cursor};
        flex-direction:${barchartWrapperStyle.flexDirection};
        align-items:${barchartWrapperStyle.alignItems};
    `}
`;

export const BarchartPercentStyle = styled.div`
  ${({ barchartPercentStyle, backgroundColor, textColor, width }) => `
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${width};
        background-color: ${backgroundColor};
        height: ${barchartPercentStyle.height};
        color: ${textColor};
        text-shadow: ${barchartPercentStyle.textShadow};
        border-right: ${barchartPercentStyle.borderRight};
        border-bottom: ${barchartPercentStyle.borderBottom};
        margin-bottom: ${barchartPercentStyle.marginBottom};
        margin-right: ${barchartPercentStyle.marginRight};
        border-left: ${barchartPercentStyle.borderLeft};
        border-top: ${barchartPercentStyle.borderTop};
        border-radius: ${barchartPercentStyle.borderRadius};
        font-size: ${barchartPercentStyle.fontSize};
        font-weight: ${barchartPercentStyle.fontWeight};
    `}
`;