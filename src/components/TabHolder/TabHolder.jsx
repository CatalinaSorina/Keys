//@flow
import React, { useState, cloneElement } from 'react';
import type { Node } from 'react';
import Wrapper from '../Wrapper/Wrapper';
import type { WrapperProps } from '../Wrapper/Wrapper';
import { combineStyle } from '../../data/utils';
import { tabHolderDefaultStyle,tabDefaultStyle,backgroundDefaultStyle,removeBackground } from './TabHolder.styles';

export type TabHolderProps = {
  activeTabIndex: number,
  removeInline?: boolean,
  tabHolderStyle?: WrapperProps,
  backgroundStyle?: WrapperProps,
  children: Node,
  removeDefaultBackground: boolean,
};

const TabHolder = ({ activeTabIndex, removeInline, tabHolderStyle, backgroundStyle, children, removeDefaultBackground }: TabHolderProps) => {
  const [activeTab, setActiveTab] = useState(activeTabIndex);

  const tabHolderStyleCombined = combineStyle(tabHolderStyle,tabHolderDefaultStyle);
  const {display, flexDirection, width, height, ...restTabHolderStyle} = tabHolderStyleCombined;
  const backgroundStyleDefined = backgroundStyle? combineStyle(backgroundStyle,backgroundDefaultStyle):backgroundDefaultStyle;
  const backgroundStyleCombined = removeDefaultBackground? combineStyle(backgroundStyleDefined,removeBackground):backgroundStyleDefined;

  const tabs = children && React.Children.map(children, (child, i) => {
    if (child.type.name === 'Tab') {
      return i === activeTab
      ? cloneElement(child, { setActiveTab: ()=>setActiveTab(-1), activeTab:true, withTabHolder:true })
      : cloneElement(child, { setActiveTab: ()=>setActiveTab(i), activeTab:false, withTabHolder:true });
    }
  });

  return (
    <Wrapper
      display='flex'
      flexDirection={removeInline ? 'row':'column' }
      {...backgroundStyleCombined}
    >
      <Wrapper
        display='flex'
        flexDirection={removeInline ? 'column':'row' }
        width={removeInline ? 'auto':'98%'}
        height={removeInline ? '95%':'auto'}
        {...restTabHolderStyle}
      >
        {tabs && tabs.map(tab=>tab)}
      </Wrapper>
      
      {activeTab !== -1 && 
      <Wrapper {...combineStyle(tabs[activeTab].props.tabStyle,tabDefaultStyle)}>
        {tabs[activeTab].props.children}
      </Wrapper>}
    </Wrapper>
  );
};

TabHolder.defaultProps = {
  activeTabIndex: 0,
  inline: true,
};

export default TabHolder;
