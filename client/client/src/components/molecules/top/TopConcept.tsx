import React from 'react';
import styled from 'styled-components';
import FreePick from '../../atoms/FreePick';
import Button from "../../atoms/Button";
import LinkButton from '../../atoms/LinkButton';
import Logo from '../../atoms/Logo';
import LastImage from "../../../utils/image/16782.jpg"
import { ROUTE } from "../../../utils/constant/route"
import { BASICCOLORS } from "../../../utils/constant/color";
import { FONTSIZE, WIDTH, CLEAR } from "../../../utils/constant/number";
import { TopConceptText } from "../../../utils/constant/text/body/top/text";
import { StyledSpan } from "../../../utils/styled/styledText";
import { Padding } from "../../../utils/styled/styledSpace";
import { media } from '../../../utils/styled/styledRdesign';

const Container = styled.div`
  font-size: 2vw;
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${media.tablet`
        flex-direction: column;
        align-items: center;
      `}
`;

const ResponseText = styled.div`
  ${media.tablet`
       padding-top: ${CLEAR.LARGE}px;
      `}
`;

const mainText = TopConceptText.ConceptText.map((t: string, i: number) => {
  if (i === TopConceptText.ConceptText.length-1) {
    return (
      <Padding bottom={CLEAR.XSMALL}>
        <LinkButton to={ROUTE.LOGIN}>
          <Button color={BASICCOLORS.WHITELIGHT}>
            {t}
          </Button>
        </LinkButton>
      </Padding>
    )
  } else {
    return (
      <Padding bottom={CLEAR.XSMALL}>{t}</Padding>
    )
  }
}
)

const TopConcept: React.FC = () => {
  return (
    <>
        <Padding bottom={CLEAR.MEDIUM}>
          <StyledSpan color={BASICCOLORS.PRIMARY}>
            {/* <Logo fontSize={FONTSIZE.XXLARGE}> */}
              <Container>
            {TopConceptText.ConceptTitle}
            </Container>
            {/* </Logo> */}
          </StyledSpan>
        </Padding>
        <Layout>
          <FreePick image={LastImage} width={WIDTH.SMALL} />
          <ResponseText>
            {mainText}
          </ResponseText>
        </Layout>
    </>
  )
}

export default TopConcept;