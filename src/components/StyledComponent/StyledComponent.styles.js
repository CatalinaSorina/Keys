import styled from 'styled-components';

export const setComponent = (type,styledComponent) => styled(type)`
  ${styledComponent}
`;