import styled from 'styled-components';
import darkBg from '../../assets/charcoal.png';
import paperBg from '../../assets/paper.png';

export const DARK = 'Charcoal';
export const PAPER = 'Paper';

const Dark = styled.div`
  .hljs {
    padding: 1rem;
    font-size: 1rem;
    background: white url(${darkBg});
    text-shadow: 0rem 0.03rem 0.05rem black;
    border: 0.05rem solid black;
    color: pink;
  }

  .hljs-comment,
  .hljs-quote {
    color: #586e75;
    font-style: italic;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal,
  .hljs-addition {
    color: #f98c76;
  }

  .hljs-number,
  .hljs-string,
  .hljs-doctag,
  .hljs-regexp {
    color: #66ba8e;
  }

  .hljs-title,
  .hljs-section,
  .hljs-built_in,
  .hljs-name {
    color: #ffbb56;
  }

  .hljs-variable,
  .hljs-template-variable,
  .hljs-class .hljs-title,
  .hljs-type,
  .hljs-tag {
    color: #dc911f;
  }

  .hljs-attribute {
    color: #b89859;
  }

  .hljs-symbol,
  .hljs-bullet,
  .hljs-link,
  .hljs-subst,
  .hljs-meta {
    color: #cb4b16;
  }

  .hljs-deletion {
    color: #dc322f;
  }

  .hljs-selector-id,
  .hljs-selector-class {
    color: #d3a60c;
  }

  .hljs-formula {
    background: #1f8aa5;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  *::selection {
    color: #f9c076;
  }
`;

const Paper = styled.div`
  .hljs {
    padding: 1rem;
    font-size: 1rem;
    background: white url(${paperBg});
    text-shadow: 0rem 0.03rem 0.05rem black;
    border: 0.05rem solid #c8c8c8;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal {
    color: #4298dd;
    font-weight: bold;
  }

  .hljs,
  .hljs-subst {
    color: #748d4d;
  }

  .hljs-string,
  .hljs-title,
  .hljs-section,
  .hljs-type,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-attribute,
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-addition,
  .hljs-variable,
  .hljs-template-tag,
  .hljs-template-variable,
  .hljs-link {
    color: #df8057;
  }

  .hljs-comment,
  .hljs-quote,
  .hljs-deletion,
  .hljs-meta {
    color: #e60415;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal,
  .hljs-doctag,
  .hljs-title,
  .hljs-section,
  .hljs-type,
  .hljs-name,
  .hljs-selector-id,
  .hljs-strong {
    font-weight: bold;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  *::selection {
    color: gray;
    text-shadow: none;
  }
`;

export const Select = styled.select`
  font-size: 1rem;
  padding: 0.5rem;
  background: pink;
  outline: none;
  color: indianred;
  border-radius: 1rem;
`;

export const getStyle = (type) => {
  switch (type) {
    case DARK:
      return Dark;
    case PAPER:
      return Paper;
    default:
      return 'Style not defined !';
  }
};
