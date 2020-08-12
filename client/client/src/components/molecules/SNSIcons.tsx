import React from 'react';
import styled from 'styled-components';
import { ICOLOR } from "../../utils/constant/color";
import Url from "../atoms/Url";
import { FONTAWEICON } from "../../utils/constant/text/text";
import ComponentFontAwesomeIcon from '../atoms/FontAwesomeIcon';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props extends ICOLOR {
  urls: {
    facebook: string,
    twitter: string,
    instagram: string,
    youtube: string,
  }
}

const SNS: React.FC<Props> = ({ urls,color }) => {
  return (
    <Container>
      <Url to={urls.twitter}>
        <ComponentFontAwesomeIcon head={FONTAWEICON.twitter.head} tail={FONTAWEICON.twitter.tail} color={color} />
      </Url>
      <Url to={urls.facebook}>
        <ComponentFontAwesomeIcon head={FONTAWEICON.facebook.head} tail={FONTAWEICON.facebook.tail} color={color} />
      </Url>
      <Url to={urls.instagram}>
        <ComponentFontAwesomeIcon head={FONTAWEICON.instagram.head} tail={FONTAWEICON.instagram.tail} color={color} />
      </Url>
      <Url to={urls.youtube}>
        <ComponentFontAwesomeIcon head={FONTAWEICON.youtube.head} tail={FONTAWEICON.youtube.tail} color={color} />
      </Url>
    </Container>
  );
};

export default SNS;