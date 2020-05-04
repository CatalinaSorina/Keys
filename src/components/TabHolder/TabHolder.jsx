//@flow
import React, { useState, cloneElement } from 'react';
import type { Node } from 'react';
import Wrapper from '../Wrapper/Wrapper';
import type { WrapperProps } from '../Wrapper/Wrapper';
import { combineStyle } from '../../data/utils';
import { tabHolderDefaultStyle,tabDefaultStyle,backgroundDefaultStyle } from './TabHolder.styles';

export type TabHolderProps = {
  activeTabIndex: number,
  removeInline: boolean,
  tabHolderStyle?: WrapperProps,
  backgroundStyle?: WrapperProps,
  children: Node,
};

const TabHolder = ({ activeTabIndex, removeInline, tabHolderStyle, backgroundStyle, children }: TabHolderProps) => {
  const [activeTab, setActiveTab] = useState(activeTabIndex);

  const tabHolderStyleCombined = combineStyle(tabHolderStyle,tabHolderDefaultStyle);
  const {display, flexDirection, width, height, ...restTabHolderStyle} = tabHolderStyleCombined;
  const backgroundStyleCombined = combineStyle(backgroundStyle,backgroundDefaultStyle);
  const tabDefaultStyleCombined = combineStyle(tabDefaultStyle,tabDefaultStyle);

  const tabs = children ? React.Children.map(children, (tab, i) => {
    if (tab.type.name === 'Tab') {
      return i === activeTab
        ? cloneElement(tab, { setActiveTab: ()=>setActiveTab(-1), activeTab:true, withTabHolder:true })
        : cloneElement(tab, { setActiveTab: ()=>setActiveTab(i), activeTab:false, withTabHolder:true });
    }
  }):[];

  return (
    <Wrapper
      display='flex'
      flexDirection={removeInline ? 'row':'column' }
      {...backgroundStyleCombined}
    >
      <Wrapper
        display='flex'
        flexDirection={removeInline ? 'column':'row' }
        width={ tabHolderStyle && tabHolderStyle.hasOwnProperty('width')?
          tabHolderStyle.width
          :(removeInline ? 'auto':'98%') 
        }
        height={ tabHolderStyle && tabHolderStyle.hasOwnProperty('height')? 
          tabHolderStyle.height
          :(removeInline ? '95%':'auto')
        }
        {...restTabHolderStyle}
      >
        {tabs.map(tab=>tab)}
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
