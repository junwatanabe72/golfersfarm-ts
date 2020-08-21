import React from 'react';
import styled from 'styled-components';
import FreePick from '../../atoms/FreePick';
import Button from '../../atoms/Button';
import LinkButton from '../../atoms/LinkButton';
import Logo from '../../atoms/Logo';
import Text from '../../atoms/Text';
import FlexLayout from '../../atoms/FlexLayout';
import LastImage from '../../../utils/image/16782.jpg';
import { ROUTE } from '../../../utils/constant/route';
import { BASICCOLORS } from '../../../utils/constant/color';
import { FONTSIZE, SIZE, CLEAR } from '../../../utils/constant/number';
import { TopConceptText } from '../../../utils/constant/text/body/top/text';
import { Padding, ALIGNITEMS } from '../../../utils/styled/styledSpace';

const StyledFlexColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const headContent = (
  <>
    <Padding bottom={CLEAR.SMALL}>
      <Logo fontSize={FONTSIZE.XXLARGE}>{TopConceptText.ConceptTitle}</Logo>
    </Padding>
  </>
);

const rightContent = (
  <StyledFlexColumn>
    <Text text={TopConceptText.ConceptText} />
    <Padding top={CLEAR.XSMALL} bottom={CLEAR.XSMALL}>
      <LinkButton to={ROUTE.LOGIN}>
        <Button color={BASICCOLORS.WHITELIGHT}>{TopConceptText.ConceptLink}</Button>
      </LinkButton>
    </Padding>
  </StyledFlexColumn>
);

const leftContent = (
  <div>
    <FreePick image={LastImage} />
  </div>
);

const TopConcept: React.FC = () => {
  return (
    <div>
      {headContent}
      <FlexLayout
        right={rightContent}
        left={leftContent}
        width={SIZE.SMALL}
        alignItems={ALIGNITEMS.CENTER}
      />
    </div>
  );
};

export default TopConcept;
