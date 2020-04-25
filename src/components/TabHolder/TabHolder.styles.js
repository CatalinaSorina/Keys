import styled from 'styled-components';
import { TabHolderProps } from './TabHolder';

const TabHolderStyled = styled.input`
  ${({ display: string, inline: boolean, styledComponent: styled }): string => `
        display: ${display};
        flex-direction: ${inline ? 'row' : 'column'}
        
        ${styledComponent ? styledComponent : ''}
    `}
`;

export default TabHolder;
