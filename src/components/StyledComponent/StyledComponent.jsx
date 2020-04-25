// @flow
import * as React from 'react';
import type styled from 'styled-components';
import Component from './StyledComponent.styles';

type StyledComponentProps = {
  type: string,
  styledComponent: styled,
};

const StyledComponent = (props: StyledComponentProps) => {
  const { type, styledComponent } = props;
  return (
    <Component
      type={type}
      styledComponent={styledComponent}
      {...(props: any)}
    />
  );
};

export default StyledComponent;
