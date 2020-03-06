import React from "react";
import styled from 'styled-components';

const StyledComponent = (props) => {
    const { type, styledComponent, ...restProps } = props;

    const Component = styled(type)`
        ${styledComponent && styledComponent}
    `
    return <Component {...restProps} />
};

export default StyledComponent;