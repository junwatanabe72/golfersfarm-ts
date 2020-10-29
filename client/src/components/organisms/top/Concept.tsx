import React from 'react';
import styled from 'styled-components';
import FreePick from '../../atoms/FreePick';
import Button from '../../atoms/Button';
import LinkButton from '../../atoms/LinkButton';
import Logo from '../../atoms/Logo';
import Text from '../../atoms/Text';
import FlexLayout from '../../atoms/FlexLayout';
import LastImage from '../../../utils/image/topConcept-min.jpg';
import { ROUTE } from '../../../utils/constant/route';
import { BASICCOLORS } from '../../../utils/constant/color';
import { FONTSIZE, SIZE, CLEAR } from '../../../utils/constant/number';
import { TopConceptText } from '../../../utils/constant/text/body/top/text';
import { Padding, ALIGNITEMS } from '../../../utils/styled/styledSpace';
import { media } from '../../../utils/styled/styledRdesign';

const Container = styled.div`
  text-align: ${ALIGNITEMS.START};
  width: ${SIZE.SMALL}vw;
  ${media.tablet`
  width: ${SIZE.LARGE}vw;
      text-align: ${ALIGNITEMS.CENTER};
      `}
`;

const StyledDiv = styled.div`
  background-color: ${BASICCOLORS.WHITE};
  border-radius: 5px;
`;
const headContent = (
  <>
    <Padding top={CLEAR.BASE} bottom={CLEAR.SMALL}>
      <Logo color={BASICCOLORS.SECONDARY} fontSize={FONTSIZE.XXLARGE} fontSizeTab={FONTSIZE.XLARGE}>
        {TopConceptText.ConceptTitle}
      </Logo>
    </Padding>
  </>
);

const rightContent = (
  <Container>
    <Text text={TopConceptText.ConceptText} alignItems={ALIGNITEMS.START} />
    <Padding top={CLEAR.XSMALL} bottom={CLEAR.BASE}>
      <LinkButton to={ROUTE.LOGIN}>
        <Button color={BASICCOLORS.WHITELIGHT}>{TopConceptText.ConceptLink}</Button>
      </LinkButton>
    </Padding>
  </Container>
);

const leftContent = (
  <Padding bottom={CLEAR.BASE}>
    <FreePick image={LastImage} />
  </Padding>
);

const TopConcept: React.FC = () => {
  return (
    <StyledDiv>
      {headContent}
      <FlexLayout
        right={rightContent}
        left={leftContent}
        width={SIZE.BASESMALL}
        alignItems={ALIGNITEMS.CENTER}
      />
    </StyledDiv>
  );
};

export default TopConcept;
