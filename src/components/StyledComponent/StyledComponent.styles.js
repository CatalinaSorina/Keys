import styled from 'styled-components';

const setComponent = (type, styledComponent) => styled(type)`
  ${styledComponent}
`;

export default setComponent;
