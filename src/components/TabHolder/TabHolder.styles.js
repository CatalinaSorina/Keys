import styled from 'styled-components';
import { TabHolderProps } from './TabHolder';

const TabHolderStyled = styled.div`
  ${({ display, inline, styledComponent }:TabHolderProps): string => `
        display: ${display};
        flex-direction: ${inline ? 'row' : 'column'}
        
        ${styledComponent ? styledComponent : ''}
    `}
`;

export default TabHolderStyled;
