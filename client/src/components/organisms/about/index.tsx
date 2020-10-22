import React from 'react';
import styled from 'styled-components';
import FreePick from '../../atoms/FreePick';
import Logo from '../../atoms/Logo';
import Text from '../../atoms/Text';
import FlexLayout from '../../atoms/FlexLayout';
import LastImage from '../../../utils/image/topConcept-min.jpg';
import { BASICCOLORS } from '../../../utils/constant/color';
import { FONTSIZE, SIZE, CLEAR } from '../../../utils/constant/number';
import { TopConceptText } from '../../../utils/constant/text/body/top/text';
import { Padding, ALIGNITEMS } from '../../../utils/styled/styledSpace';
import { media } from '../../../utils/styled/styledRdesign';

const Container = styled.div`
  text-align: center;
  width: ${SIZE.SMALL}vw;
  ${media.tablet`
  width: ${SIZE.LARGE}vw;
      
      `}
`;

const headContent = (
  <>
    <Padding top={CLEAR.BASE} bottom={CLEAR.BASE}>
      <Logo color={BASICCOLORS.SECONDARY} fontSize={FONTSIZE.XXLARGE}>
        {TopConceptText.ConceptTitle}
      </Logo>
    </Padding>
  </>
);

const leftContent = (
  <Container>
    <Text text={TopConceptText.ConceptText} fontSize={FONTSIZE.XLARGE} />
  </Container>
);

const rightContent = (
  <Padding>
    <FreePick image={LastImage} />
  </Padding>
);

const TopConcept: React.FC = () => {
  return (
    <Padding bottom={CLEAR.SMALL}>
      {headContent}
      <FlexLayout
        right={rightContent}
        left={leftContent}
        width={SIZE.BASESMALL}
        alignItems={ALIGNITEMS.CENTER}
      />
    </Padding>
  );
};

export default TopConcept;
