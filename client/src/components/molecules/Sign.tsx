import React from 'react';
import styled from 'styled-components';
import Logo from '../atoms/Logo';
import { BASICCOLORS } from '../../utils/constant/color';
import { CLEAR, FONTSIZE } from '../../utils/constant/number';
import { Padding, ALIGNITEMS } from '../../utils/styled/styledSpace';
import { media } from '../../utils/styled/styledRdesign';

interface Props extends PartialColor, PartialClear, PartialAlignItemsType {
  title?: string;
}

const Container = styled.div<{ alignItems: Props['alignItems'] }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
`;

const Color = styled.div<PartialColor>`
  background-color: ${(props) => props.color};
`;

const PaddingExtend = styled(Padding)<PartialClear>`
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
  alignItems = ALIGNITEMS.CENTER,
}) => {
  return (
    <Color color={color}>
      <PaddingExtend clear={clear}>
        <Container alignItems={alignItems}>
          <Logo fontSize={FONTSIZE.XXXLARGE}>{title}</Logo>
          {children}
        </Container>
      </PaddingExtend>
    </Color>
  );
};

export default Sign;
