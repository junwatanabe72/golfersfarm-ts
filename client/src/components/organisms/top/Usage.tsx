import React from 'react';
import styled from 'styled-components';
import Image from '../../atoms/Image';
import Logo from '../../atoms/Logo';
import SwingImage from '../../../utils/image/swing.jpg';
import { BASICCOLORS } from '../../../utils/constant/color';
import { FONTSIZE, SIZE, CLEAR } from '../../../utils/constant/number';
import { TopUsageText } from '../../../utils/constant/text/body/top/text';
import { Padding } from '../../../utils/styled/styledSpace';
import { media } from '../../../utils/styled/styledRdesign';
import { editTitleList } from '../../../utils/constant/text/common';

const Layout = styled.div<{ layout: string }>`
  display: flex;
  justify-content: ${(props) => props.layout};
  align-items: center;
  ${media.tablet`
        flex-direction: column;
        align-items: center;
      `}
`;

const FixedColumn = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${BASICCOLORS.PRIMARY};
  border-radius: 4px;
`;

const mainText = Object.values(editTitleList).map((t: string, i: number) => {
  return (
    <Padding left={CLEAR.XSMALL} right={CLEAR.XSMALL} bottom={CLEAR.BASE}>
      <FixedColumn>
        <Padding bottom={CLEAR.XSMALL}>{t}</Padding>
        <Image width={SIZE.SXMALL} image={SwingImage} />
      </FixedColumn>
    </Padding>
  );
});

const TopUsage: React.FC = () => {
  return (
    <>
      <Padding bottom={CLEAR.XSMALL}>
        <Logo fontSize={FONTSIZE.XXLARGE} color={BASICCOLORS.PRIMARY}>
          {TopUsageText.UsageTitle}
        </Logo>
      </Padding>
      <Layout layout={'space-around'}>
        {mainText[0]}
        {mainText[1]}
        {mainText[2]}
      </Layout>
      <Layout layout={'center'}>
        {mainText[3]}
        {mainText[4]}
      </Layout>
    </>
  );
};

export default TopUsage;
