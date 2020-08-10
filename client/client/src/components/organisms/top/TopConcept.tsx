import React from 'react';
import styled from 'styled-components';
import FreePick from '../../atoms/FreePick';
import Button from "../../atoms/Button";
import LinkButton from '../../atoms/LinkButton';
import Logo from '../../atoms/Logo';
import Text from '../../atoms/Text';
import FlexLayout from '../../atoms/FlexLayout';
import LastImage from "../../../utils/image/16782.jpg"
import { ROUTE } from "../../../utils/constant/route"
import { BASICCOLORS } from "../../../utils/constant/color";
import { FONTSIZE, WIDTH, CLEAR } from "../../../utils/constant/number";
import { TopConceptText } from "../../../utils/constant/text/body/top/text";
import { Padding } from "../../../utils/styled/styledSpace";



const headContent = (
  <>
    <Padding bottom={CLEAR.SMALL}>
      <Logo fontSize={FONTSIZE.XXLARGE} color={BASICCOLORS.PRIMARY} >
          {TopConceptText.ConceptTitle}
      </Logo>
    </Padding>
  </>
)

const rightContent = (
  <div>
    <Text text={TopConceptText.ConceptText} />
    <Padding top={CLEAR.XSMALL} bottom={CLEAR.XSMALL}>
      <LinkButton to={ROUTE.LOGIN}>
        <Button color={BASICCOLORS.WHITELIGHT}>
          {TopConceptText.ConceptLink}
        </Button>
      </LinkButton>
    </Padding>
    
  </div>
);

const leftContent = (
  <div>
    <FreePick image={LastImage} width={WIDTH.SMALL} />
  </div>
)

const TopConcept: React.FC = () => {
  return (
    <div>
      {headContent}
      <FlexLayout right={rightContent} left={leftContent} width={WIDTH.SMALL} />
    </div>
  )
}

export default TopConcept;