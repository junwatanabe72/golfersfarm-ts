import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import LinkButton from '../../atoms/LinkButton';
import Logo from '../../atoms/Logo';
import Text from '../../atoms/Text';
import { ROUTE } from '../../../utils/constant/route';
import { BASICCOLORS } from '../../../utils/constant/color';
import { TopTitleText } from '../../../utils/constant/text/body/top/text';
import { FONTSIZE, CLEAR } from '../../../utils/constant/number';
import { Padding } from '../../../utils/styled/styledSpace';

const Container = styled.div`
  text-align: center;
`;

const StyledDiv = styled.div`
  color: ${BASICCOLORS.SECONDARY};
  font-size: 40px;
`;

const TopTitle: React.FC = () => {
  return (
    <Container>
      <Padding top={CLEAR.LARGE}>
        <Logo
          color={BASICCOLORS.BASICDARK}
          fontSize={FONTSIZE.XXXLARGE}
          fontSizeTab={FONTSIZE.XXLARGE}
        >
          {TopTitleText.TitleTitle}
        </Logo>
      </Padding>
      <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
        <StyledDiv>Golfersfarm</StyledDiv>
      </Padding>
      <Text fontSize={FONTSIZE.LARGE} text={TopTitleText.TitleText} />
      <Padding top={CLEAR.XSMALL} bottom={CLEAR.MEDIUMLARGE}>
        <LinkButton to={ROUTE.LOGIN}>
          <Button color={BASICCOLORS.WHITELIGHT}>{TopTitleText.TitleLink}</Button>
        </LinkButton>
      </Padding>
    </Container>
  );
};

export default TopTitle;
