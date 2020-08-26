import React from 'react';
import styled from 'styled-components';
import Logo from '../atoms/Logo';
import { BASICCOLORS, PartialICOLOR } from '../../utils/constant/color';
import { CLEAR, PartialICLEAR, FONTSIZE } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';
import { ALIGNITEMSTYPE, ALIGNITEMS } from '../../utils/styled/styledSpace';
import { media } from '../../utils/styled/styledRdesign';

interface Props extends PartialICOLOR, PartialICLEAR {
  title?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Color = styled.div<PartialICOLOR>`
  background-color: ${(props) => props.color};
`;

const PaddingExtend = styled(Padding)<PartialICLEAR>`
  padding: ${(props) => props.clear}vw;
  ${media.tablet`
      padding: ${CLEAR.XSMALL}vw;
      `}
`;

const Sign: React.FC<Props> = ({
  color = BASICCOLORS.WHITELIGHT,
  title,
  children,
  clear = CLEAR.SMALL,
}) => {
  return (
    <Color color={color}>
      <PaddingExtend clear={clear}>
        <Container>
          <Logo fontSize={FONTSIZE.XXXLARGE}>{title}</Logo>
          {children}
        </Container>
      </PaddingExtend>
    </Color>
  );
};

export default Sign;
