// @flow
import * as React from 'react';
import styled from 'styled-components';

type StyledComponentProps = {
  type: string,
  styledComponent: styled,
};

const StyledComponent = (props: StyledComponentProps) => {
  const { type, styledComponent } = props;

  const Component = styled(type)`
    ${styledComponent && styledComponent}
  `;

  return <Component {...(props: any)} />;
};

export default StyledComponent;
