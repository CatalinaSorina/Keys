// @flow
import React from 'react';
import { Wrapper, Spider, SpiderFeet, SiteLine, Site } from './Web.styles';

type WebProps = {
  loading: boolean,
  color: string,
  spiderColor: string,
};

const Web = ({ loading = true, color="white", spiderColor="black" }:WebProps) =>
  loading && (
    <Wrapper>
      <Spider color={spiderColor}>
        <SpiderFeet color={spiderColor}>x</SpiderFeet>
        <SpiderFeet color={spiderColor} rotate="35deg">x</SpiderFeet>
      </Spider>
      <SiteLine rotate="44deg" color={color} />
      <Site color={color} size="8rem" shadow="1.4rem">
        <Site color={color} size="5rem" shadow="1rem">
          <Site color={color} size="3rem" shadow="0.8rem">
            <Site color={color} size="1rem" shadow="0.3rem" />
          </Site>
        </Site>
      </Site>
      <SiteLine rotate="-44deg" color={color} />
    </Wrapper>
  );
export default Web;
