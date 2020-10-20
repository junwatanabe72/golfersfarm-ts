import React from 'react';
import styled from 'styled-components';
import Logo from '../../atoms/Logo';
import { BASICCOLORS } from '../../../utils/constant/color';
import { FONTSIZE, CLEAR } from '../../../utils/constant/number';
import { Padding } from '../../../utils/styled/styledSpace';
import * as Text from '../../../utils/constant/text/body/privacy';

const Container = styled.div`
  text-align: left;
`;

const StyledP = styled.p`
  color: ${BASICCOLORS.BASICDARK};
  font-size: ${FONTSIZE.XLARGE}px;
`;
const StyledChildP = styled.p`
  padding-left: ${CLEAR.XSMALL}vw;
`;
const StyledGChildP = styled.p`
  padding-left: ${CLEAR.BASE}vw;
`;

const PrivacyContents: React.FC = () => {
  return (
    <Container>
      <Padding all={CLEAR.TINY} />
      {Text.lead}
      <Padding all={CLEAR.TINY} />
      <Logo fontSize={FONTSIZE.XXXLARGE}>{Text.privacyTitle}</Logo>
      {Text.privacyHead.map((text, num) => {
        return (
          <React.Fragment key={num}>
            <StyledP>{text}</StyledP>
            {num !== 2 ? (
              <StyledChildP>{Text.privacyBody[num]}</StyledChildP>
            ) : (
              <>
                <StyledChildP>{Text.privacyBody[num]}</StyledChildP>
                {Text.forbitComtents.map((value, key) => {
                  return <StyledGChildP key={key}>{value}</StyledGChildP>;
                })}
              </>
            )}
          </React.Fragment>
        );
      })}
      <Padding all={CLEAR.TINY} />
      <Logo fontSize={FONTSIZE.XXXLARGE}>{Text.disclaimerTitle}</Logo>
      {Text.disclaimerHead.map((text: string, num) => {
        return (
          <React.Fragment key={num}>
            <StyledP>{text}</StyledP>
            <StyledChildP>{Text.disclaimerBody[num]}</StyledChildP>
          </React.Fragment>
        );
      })}
    </Container>
  );
};

export default PrivacyContents;
