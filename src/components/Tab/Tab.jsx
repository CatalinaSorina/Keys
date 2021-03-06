// @flow
import React, { useState } from 'react';
import type { Node } from 'react';
import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';
import type { ButtonProps } from '../Button/Button';
import type { WrapperProps } from '../Wrapper/Wrapper';
import { combineStyle } from '../../data/utils';
import { activeButtonDefaultStyle, tabDefaultStyle } from './Tab.styles';

type TabProps = {
  openTabText?: string,
  closeTabText?: string,
  activeTab?: boolean,
  buttonStyle?: ButtonProps,
  activeButtonStyle?: ButtonProps,
  tabStyle?: WrapperProps,
  children: Node,
  setActiveTab?: Function,
  withTabHolder?: boolean,
};

const Tab = ({
  openTabText,
  closeTabText,
  activeTab,
  buttonStyle,
  activeButtonStyle,
  tabStyle,
  children,
  setActiveTab,
  withTabHolder,
}: TabProps) => {
  const [active, setActive] = useState(activeTab);

  const checkActiveTab = setActiveTab ? activeTab : active;
  const buttonCurrentStyle = checkActiveTab
    ? combineStyle(activeButtonStyle, activeButtonDefaultStyle)
    : buttonStyle;
  const tabStyleCombined = tabStyle ? combineStyle(tabStyle, tabDefaultStyle) : tabDefaultStyle;

  const { display, ...restTabStyleCombined } = tabStyleCombined;
  const displayTab = display !== 'none' ? display : 'flex';

  return (
    <>
      <Button
        {...buttonCurrentStyle}
        onClick={() => (setActiveTab ? setActiveTab() : setActive(!active))}
        text={checkActiveTab && closeTabText ? closeTabText : openTabText}
      />
      {!withTabHolder && (
        <Wrapper
          display={active ? displayTab : 'none'}
          {...restTabStyleCombined}
        >
          {children}
        </Wrapper>
      )}
    </>
  );
};

Tab.defaultProps = {
  openTabText: 'Open',
  closeTabText: null,
  activeTab: false,
  buttonStyle: {},
  withTabHolder: false,
  activeButtonStyle: null,
  tabStyle: null,
  setActiveTab: null,
};

export default Tab;
