// @flow
import React from 'react';
import setComponent from './StyledComponent.styles';

type StyledComponentProps = {
  type: string,
  styledComponent: string,
};

const StyledComponent = (props: StyledComponentProps) => {
  const { type, styledComponent, ...restProps } = props;
  const Component = setComponent(type, styledComponent);
  return <Component {...restProps} />;
};

export default StyledComponent;
