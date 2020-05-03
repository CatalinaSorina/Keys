//@flow
import React, { useState } from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';
import type { ButtonProps } from '../Button/Button';
import type { WrapperProps } from '../Wrapper/Wrapper';
import type { Node } from 'react';
import { combineStyle } from '../../data/utils';
import { activeButtonDefaultStyle, tabDefaultStyle } from './Tab.styles';

type TabProps = {
  openTabText: string,
  closeTabText?: string,
  activeTab: boolean,
  buttonStyle: ButtonProps,
  activeButtonStyle?: ButtonProps,
  tabStyle: WrapperProps,
  children: Node,
};

const Tab = ({
  openTabText,
  closeTabText,
  activeTab,
  buttonStyle,
  activeButtonStyle,
  tabStyle,
  children,
}: TabProps) => {
  const [active, setActive] = useState(activeTab);

  const buttonCurrentStyle = active
    ? combineStyle(activeButtonStyle, activeButtonDefaultStyle)
    : buttonStyle;
  const tabStyleCombined = combineStyle(tabStyle, tabDefaultStyle);

  const { display, ...restTabStyleCombined } = tabStyleCombined;
  const displayTab = display !== 'none' ? display : 'flex';

  return (
    <React.Fragment>
      <Button
        {...buttonCurrentStyle}
        onClick={() => setActive(!active)}
        text={active && closeTabText ? closeTabText : openTabText}
      />
      <Wrapper display={active ? displayTab : 'none'} {...restTabStyleCombined}>
        {children}
      </Wrapper>
    </React.Fragment>
  );
};

Tab.defaultProps = {
  openTabText: 'Open',
  activeTab: false,
  buttonStyle: {}
};

export default Tab;
