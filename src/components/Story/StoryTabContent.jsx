//@flow
import React from 'react';
import type { Node } from 'react';
import Highlighter from '../Highlighter/Highlighter';
import { getKey } from "../keys";

type StoryTabContentProps = {
    keyName:string,
    keyProps:Array<string>,
    examples:Array<{props:{},code:string}>,
    columns:number,
    hidePropsTitle:boolean,
    children:Node,
}

const StoryTabContent = ({keyName,keyProps,examples,columns,hidePropsTitle,children}:StoryTabContentProps) => {
    const Key=getKey(keyName);

    return <div>
        <h1>Key {keyName}</h1>
        {!hidePropsTitle && <h3>Properties:</h3>}
        <ul style={{columns:columns}}> {keyProps.map((prop,index)=><li key={`prop${index}`}>{prop}</li>)} </ul>
        {examples && examples.map((example,index)=><div key={`example${index}`}>
            {example.props && <Key {...example.props} />}
            {example.code && <Highlighter code={example.code} />}
        </div>)}
        {children}
    </div>
}

export default StoryTabContent;