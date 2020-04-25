//@flow
import React from 'react';
import type styled from 'styled-components';
import TabHolderStyled from './TabHolder.styles';

export type TabHolderProps = {
  display: string,
  inline: boolean,
  holderStyledComponent?: styled,
};

const TabHolder = (props: TabHolderProps): TabHolderStyled => {
  const { display, inline, holderStyledComponent } = props;

  return (
    <TabHolderStyled
      display={display}
      inline={inline}
      styledComponent={holderStyledComponent}
      {...(props: any)}
    />
  );
};

TabHolder.defaultProps = {
  display: 'flex',
  inline: false,
};

export default TabHolder;
