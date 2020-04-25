import styled from 'styled-components';

const Component = styled(({ type }) => type)`
  ${({ styledComponent }) => styledComponent && styledComponent}
`;

export default Component;
