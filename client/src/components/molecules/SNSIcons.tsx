import React from 'react';
import styled from 'styled-components';
import Url from '../atoms/Url';
import { FONTAWEICON } from '../../utils/constant/text/fontAweicon';
import ComponentFontAwesomeIcon from '../atoms/FontAwesomeIcon';

interface Props extends PartialColor, PartialFontSize {
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
type URLS = typeof URLs;
const URLs = {
  facebook: 'https://www.facebook.com/',
  twitter: 'https://twitter.com/',
  instagram: 'https://www.instagram.com/',
  youtube: 'https://www.youtube.com/channel/',
} as const;

const SNS: React.FC<Props> = ({ urls, color, fontSize }) => {
  const SnsURLs = Object.entries(urls);
  return (
    <Container>
      {SnsURLs.map((value, num) => {
        return value[1] ? (
          <Url key={num} to={URLs[value[0] as keyof URLS] + value[1]}>
            <ComponentFontAwesomeIcon
              fontSize={fontSize}
              head={FONTAWEICON[value[0] as keyof URLS].head}
              tail={FONTAWEICON[value[0] as keyof URLS].tail}
              color={color}
            />
          </Url>
        ) : (
          <></>
        );
      })}
    </Container>
  );
};

export default SNS;
