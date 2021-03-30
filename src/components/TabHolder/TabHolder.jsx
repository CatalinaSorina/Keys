/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, cloneElement } from 'react';
import type { Node } from 'react';
import Wrapper from '../Wrapper/Wrapper';
import type { WrapperProps } from '../Wrapper/Wrapper';
import { combineStyle } from '../../data/utils';
import {
  tabHolderDefaultStyle,
  tabDefaultStyle,
  backgroundDefaultStyle,
  removeBackground,
} from './TabHolder.styles';

export type TabHolderProps = {
  activeTabIndex?: number,
  dynamicActiveTabIndex?: number,
  removeInline?: boolean,
  tabHolderStyle?: WrapperProps,
  backgroundStyle?: WrapperProps,
  children: Node,
  removeDefaultBackground: boolean,
};

const TabHolder = ({
  activeTabIndex,
  dynamicActiveTabIndex,
  removeInline,
  tabHolderStyle,
  backgroundStyle,
  children,
  removeDefaultBackground,
}: TabHolderProps) => {
  const [activeTab, setActiveTab] = useState(activeTabIndex);

  useEffect(() => {
    (dynamicActiveTabIndex || dynamicActiveTabIndex === 0) && setActiveTab(dynamicActiveTabIndex);
  }, [dynamicActiveTabIndex]);

  const tabHolderStyleCombined = combineStyle(
    tabHolderStyle,
    tabHolderDefaultStyle,
  );
  const {
    display,
    flexDirection,
    width,
    height,
    ...restTabHolderStyle
  } = tabHolderStyleCombined;
  const backgroundStyleDefined = backgroundStyle
    ? combineStyle(backgroundStyle, backgroundDefaultStyle)
    : backgroundDefaultStyle;
  const backgroundStyleCombined = removeDefaultBackground
    ? combineStyle(backgroundStyle, removeBackground)
    : backgroundStyleDefined;

  // eslint-disable-next-line consistent-return
  const tabs = children && React.Children.map(children, (child, i) => {
    // eslint-disable-next-line no-console
    console.log(child.type.name);
    return i === activeTab
      ? cloneElement(child, {
        setActiveTab: () => setActiveTab(-1),
        activeTab: true,
        withTabHolder: true,
      })
      : cloneElement(child, {
        setActiveTab: () => setActiveTab(i),
        activeTab: false,
        withTabHolder: true,
      });
    });

  return (
    <Wrapper
      display="flex"
      flexDirection={removeInline ? 'row' : 'column'}
      {...backgroundStyleCombined}
    >
      <Wrapper
        display="flex"
        flexDirection={removeInline ? 'column' : 'row'}
        width={removeInline ? 'auto' : width}
        height={removeInline ? '95%' : height}
        {...restTabHolderStyle}
      >
        {tabs && tabs.map((tab) => tab)}
      </Wrapper>

      {activeTab !== -1 && (
        <Wrapper
          {...combineStyle(tabs[activeTab].props.tabStyle, tabDefaultStyle)}
        >
          {tabs[activeTab].props.children}
        </Wrapper>
      )}
    </Wrapper>
  );
};

TabHolder.defaultProps = {
  activeTabIndex: 0,
  dynamicActiveTabIndex: null,
  removeInline: false,
  tabHolderStyle: null,
  backgroundStyle: null,
};

export default TabHolder;
