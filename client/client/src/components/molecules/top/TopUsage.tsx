import React from 'react';
import styled from 'styled-components';
import Image from '../../atoms/Image';
import Logo from '../../atoms/Logo';
import SwingImage from "../../../utils/image/swing.jpg"
import { BASICCOLORS } from "../../../utils/constant/color";
import { FONTSIZE, WIDTH, CLEAR } from "../../../utils/constant/number";
import { TopUsageText } from "../../../utils/constant/text/body/top/text";
import { StyledSpan } from "../../../utils/styled/styledText";
import { Padding } from "../../../utils/styled/styledSpace";
import { media } from '../../../utils/styled/styledRdesign';

// const Container = styled.div`
//   text-align: center;
// `;
// 
const Layout= styled.div<{ layout: string }>`
  display: flex;
  justify-content: ${(props) => props.layout};
  align-items: center;
  ${media.tablet`
        flex-direction: column;
        align-items: center;
      `}
`;

const FixedColumn = styled.div`
  display:flex;
  flex-direction: column;
  border: 2px solid ${BASICCOLORS.PRIMARY};
  border-radius: 4px;
`;


const mainText = TopUsageText.UsageItem.map((t: string, i: number) => {    
    return (
      <Padding left={CLEAR.XSMALL} right={CLEAR.XSMALL} bottom={CLEAR.BASE}>
        <FixedColumn>
          <Padding bottom={CLEAR.XSMALL}>{t}</Padding>
          <Image width={WIDTH.SXMALL} image={SwingImage}/>
        </FixedColumn>
      </Padding>
    )

}
)

const TopUsage: React.FC = () => {
  return (
      <>
        <Padding  bottom={CLEAR.MEDIUM}>
          <StyledSpan color={BASICCOLORS.PRIMARY}>
          <Logo fontSize={FONTSIZE.XXLARGE}>
              {TopUsageText.UsageTitle}
              </Logo>
            </StyledSpan>
        </Padding>
        <Layout layout={"space-around"}>
            {mainText[0]}
            {mainText[1]}
            {mainText[2]}
        </Layout>
        <Layout layout={"center"}>
            {mainText[3]}
            {mainText[4]}
        </Layout>
      </>
  )
}

export default TopUsage;