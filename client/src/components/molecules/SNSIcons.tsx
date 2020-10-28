import React from 'react';
import styled from 'styled-components';
import Url from '../atoms/Url';
import { FONTAWEICON } from '../../utils/constant/text/fontAweicon';
import ComponentFontAwesomeIcon from '../atoms/FontAwesomeIcon';
import { Padding } from '../../utils/styled/styledSpace';
import { CLEAR } from '../../utils/constant/number';

interface Props extends PartialFontSize {
  urls: SNSUserType;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const URLs = {
  facebook: 'https://www.facebook.com/',
  twitter: 'https://twitter.com/',
  instagram: 'https://www.instagram.com/',
  youtube: 'https://www.youtube.com/channel/',
} as const;

type URLTypes = keyof typeof URLs;

const colors = {
  facebook: '#4267b2',
  twitter: '#1da1f2',
  instagram: '#D93177',
  youtube: '#Ff0000',
} as const;

const SNS: React.FC<Props> = ({ urls, fontSize }) => {
  const SnsURLs = Object.entries(urls);
  return (
    <Container>
      {SnsURLs.map(([key, value]: [string, string | undefined], num: number) => {
        return (
          <React.Fragment key={num}>
            {value && (
              <Url to={URLs[key as URLTypes] + value}>
                <Padding right={CLEAR.TINY}>
                  <ComponentFontAwesomeIcon
                    fontSize={fontSize}
                    head={FONTAWEICON[key as URLTypes].head}
                    tail={FONTAWEICON[key as URLTypes].tail}
                    color={colors[key as URLTypes]}
                  />
                </Padding>
              </Url>
            )}
          </React.Fragment>
        );
      })}
    </Container>
  );
};

export default SNS;
