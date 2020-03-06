import React from "react";
import styled from 'styled-components';

const StyledComponent = (props) => {
    const Component = styled(props.type)`
        ${props.styledComponent && props.styledComponent}
    `
    return <Component {...props} />
};

export default StyledComponent;