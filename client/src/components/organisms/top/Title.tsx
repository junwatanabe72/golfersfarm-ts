import React from 'react';
import styled from 'styled-components';
import FreePick from '../../atoms/FreePick';
import Button from '../../atoms/Button';
import LinkButton from '../../atoms/LinkButton';
import Logo from '../../atoms/Logo';
import Text from '../../atoms/Text';
import FlexLayout from '../../atoms/FlexLayout';
import TopImage from '../../../utils/image/6114.jpg';
import { ROUTE } from '../../../utils/constant/route';
import { BASICCOLORS } from '../../../utils/constant/color';
import { TopTitleText } from '../../../utils/constant/text/body/top/text';
import { FONTSIZE, SIZE, CLEAR } from '../../../utils/constant/number';
import { Padding, ALIGNITEMS } from '../../../utils/styled/styledSpace';

const Container = styled.div`
  text-align: center;
`;

const rightContent = <FreePick image={TopImage} />;

const leftContent = (
  <Container>
    <Padding bottom={CLEAR.XSMALL}>
      <Logo fontSize={FONTSIZE.XXXLARGE}>{TopTitleText.TitleTitle}</Logo>
    </Padding>
    <Text text={TopTitleText.TitleText} />
    <Padding top={CLEAR.XSMALL} bottom={CLEAR.XSMALL}>
      <LinkButton to={ROUTE.LOGIN}>
        <Button color={BASICCOLORS.WHITELIGHT}>{TopTitleText.TitleLink}</Button>
      </LinkButton>
    </Padding>
  </Container>
);

const TopTitle: React.FC = () => {
  return (
    <FlexLayout
      right={rightContent}
      left={leftContent}
      width={SIZE.XXLARGE}
      alignItems={ALIGNITEMS.CENTER}
    />
  );
};

export default TopTitle;
