import React from "react";
import styled from 'styled-components';

const StyledComponent = (props) => {
    const Component = styled(props.componentType)`
        ${props.componentStyledComponent && props.componentStyledComponent}
    `
    return <Component {...props} />
};

export default StyledComponent;