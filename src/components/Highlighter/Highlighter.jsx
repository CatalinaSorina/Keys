import React, { useEffect, useState } from 'react';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import { DARK, PAPER, getStyle, Select } from './Highlighter.styles';
hljs.registerLanguage('javascript', javascript);

const Highlighter = ({code}) => {
  const node = React.createRef();
  const [styleCode, setStyleCode] = useState(DARK);
  const Style = getStyle(styleCode);

  useEffect(() => {
    hljs.highlightBlock(node.current);
  }, [node]);

  return (
    <Style>
      <Select onChange={(e) => setStyleCode(e.target.value)} value={styleCode}>
        <option value={DARK}>{DARK}</option>
        <option value={PAPER}>{PAPER}</option>
      </Select>
      <pre ref={node}>
        <code className="javascript">
          <p>{code}</p>
        </code>
      </pre>
    </Style>
  );
};

export default Highlighter;
