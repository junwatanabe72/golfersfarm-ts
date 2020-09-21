import React from 'react';
import styled from 'styled-components';
import Url from '../atoms/Url';
import { FONTAWEICON } from '../../utils/constant/text/fontAweicon';
import ComponentFontAwesomeIcon from '../atoms/FontAwesomeIcon';

interface Props extends PartialICOLOR, PartialIFONTSIZE {
  urls: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SNS: React.FC<Props> = ({ urls, color, fontSize }) => {
  return (
    <Container>
      <Url to={urls.twitter}>
        <ComponentFontAwesomeIcon
          fontSize={fontSize}
          head={FONTAWEICON.twitter.head}
          tail={FONTAWEICON.twitter.tail}
          color={color}
        />
      </Url>
      <Url to={urls.facebook}>
        <ComponentFontAwesomeIcon
          fontSize={fontSize}
          head={FONTAWEICON.facebook.head}
          tail={FONTAWEICON.facebook.tail}
          color={color}
        />
      </Url>
      <Url to={urls.instagram}>
        <ComponentFontAwesomeIcon
          fontSize={fontSize}
          head={FONTAWEICON.instagram.head}
          tail={FONTAWEICON.instagram.tail}
          color={color}
        />
      </Url>
      <Url to={urls.youtube}>
        <ComponentFontAwesomeIcon
          fontSize={fontSize}
          head={FONTAWEICON.youtube.head}
          tail={FONTAWEICON.youtube.tail}
          color={color}
        />
      </Url>
    </Container>
  );
};

export default SNS;
