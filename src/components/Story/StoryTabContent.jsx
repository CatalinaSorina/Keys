//@flow
import React from 'react';
import Highlighter from '../Highlighter/Highlighter';
import { getKey } from "../keys";

type StoryTabContentProps = {
    keyName:string,
    keyProps:Array<string>,
    examples:Array<{props:{},code:string}>
}

const StoryTabContent = ({keyName,keyProps,examples}:StoryTabContentProps) => {
    const Key=getKey(keyName);

    return <>
        <h1>Key {keyName}</h1>
        <h3>Properties:</h3>
        <ul> {keyProps.map((prop,index)=><li key={`prop${index}`}>{prop}</li>)} </ul>
        {examples.map((example,index)=><div key={`example${index}`}>
            <Key {...example.props} />
            <Highlighter code={example.code} />
        </div>)}
    </>
}

export default StoryTabContent;