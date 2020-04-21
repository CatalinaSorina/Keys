// @flow
import React from 'react';
import ParagraphStyled from './Paragraphs.style';
import styled from 'styled-components';

type ParagraphsProps = {
  indent: string,
  color: string,
  textShadow: string,
  text?: string,
  styledComponent?: styled
};

const Paragraphs = (props: ParagraphsProps): ParagraphStyled => {
  const { indent, color, textShadow, text, styledComponent } = props;
  const paragraphs = text && text.match(/[^\r\n]+/g);

  return paragraphs && paragraphs.map((line, i) => (
    <ParagraphStyled
      key={i + 'line'}
      addStyle={{
        indent,
        color,
        textShadow,
      }}
      styledComponent={styledComponent}
      {...(props: any)}
    >
      {line}
    </ParagraphStyled>
  ));
};

Paragraphs.defaultProps = {
  indent: '1rem',
  color: '#C08497',
  textShadow: '0 0.05rem 0.05rem #C08497',
};

export default Paragraphs;
