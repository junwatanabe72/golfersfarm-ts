import React from 'react';
import styled from 'styled-components';
import Logo from '../../atoms/Logo';
import { BASICCOLORS } from '../../../utils/constant/color';
import { FONTSIZE, CLEAR } from '../../../utils/constant/number';
import { Padding } from '../../../utils/styled/styledSpace';
import * as Text from '../../../utils/constant/text/body/tos';

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

const TosContents: React.FC = () => {
  return (
    <Container>
      <Padding all={CLEAR.TINY} />
      {Text.lead}
      <Padding all={CLEAR.TINY} />
      <Logo fontSize={FONTSIZE.XXXLARGE}>{Text.tosTitle}</Logo>
      {Text.head.map((headText, num) => {
        return (
          <React.Fragment key={num}>
            <StyledP>{`第${num + 1}条.${headText}`}</StyledP>
            {num === 0 && Text.contentLeadOne}
            {num === 5 && Text.contentLeadSix}
            {Text.body[num].map((bodyText, key) => {
              return (
                <React.Fragment key={key}>
                  <StyledChildP>{`${key + 1}.${bodyText}`}</StyledChildP>
                  {num === 5 &&
                    key === 5 &&
                    Text.sixthPost.map((post, postKey) => {
                      return (
                        <StyledGChildP key={postKey}>{`${postKey + 1}.${post}`}</StyledGChildP>
                      );
                    })}
                </React.Fragment>
              );
            })}
          </React.Fragment>
        );
      })}
    </Container>
  );
};

export default TosContents;
