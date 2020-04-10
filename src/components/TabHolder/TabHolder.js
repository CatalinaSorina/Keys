import React, { useState } from 'react';
import Tab from "./Tab/Tab";

const TabHolderStyled = styled.input`
    ${({ inline, styledComponent }) => `
        display: flex;
        flex-direction: ${inline ? "row" : "column"}
        
        ${styledComponent && styledComponent}
    `}
`

const TabHolder = (props) => {
    const { inline, holderStyledComponent, ...restProps } = props;

    return <TabHolderStyled styledComponent={holderStyledComponent} inline={inline} {...restProps} />;
}

export default TabHolder;