//@flow
import React from 'react';
import Tab from "../Tab/Tab";
import Highlighter from '../Highlighter/Highlighter';
import { getKey } from "../keys";

type StoryTabProps = {
    keyName:string,
    keyProps:Array<string>,
    examples:Array<{props:[],code:string}>
}

const StoryTab = ({keyName,keyProps,examples}:StoryTabProps):Tab => {
    const Key=getKey(keyName);

    return (
        <Tab openTabText={keyName}>
            <h1>Key {keyName}</h1>
            <h3>Properties:</h3>
            <ul> {keyProps.map((prop,index)=><li key={`prop${index}`}>{prop}</li>)} </ul>
            {examples.map((example,index)=><div key={`example${index}`}>
                <Key {...example.props} />
                <Highlighter code={example.code} />
            </div>)}
        </Tab>
    )
}

export default StoryTab;