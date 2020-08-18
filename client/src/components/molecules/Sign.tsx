import React from 'react';
import styled from 'styled-components';
import Logo from '../atoms/Logo';
import { BASICCOLORS, ICOLOR } from '../../utils/constant/color';
import { CLEAR, ICLEAR, FONTSIZE } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';
import { ALIGNITEMSTYPE } from '../../utils/styled/styledSpace';
import { media } from '../../utils/styled/styledRdesign';

type PartialICLEAR = Partial<ICLEAR>;
type PartialICOLOR = Partial<ICOLOR>;
interface Props extends PartialICOLOR, PartialICLEAR {
  title?: string;
  textAlign?: ALIGNITEMSTYPE;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Color = styled.div<PartialICOLOR>`
  background-color: ${(props) => props.color};
`;

const PaddingExtend = styled(Padding)<{ clear: Props['clear'] }>`
  padding: ${(props) => props.clear}vw;
  ${media.tablet`
      padding: ${CLEAR.XSMALL}vw;
      `}
`;

const Sign: React.FC<Props> = ({ textAlign, color, title, children, clear }) => {
  return (
    <Color color={color}>
      <PaddingExtend clear={clear}>
        <Container>
          <Logo color={BASICCOLORS.PRIMARY} textAlign={textAlign} fontSize={FONTSIZE.XXXLARGE}>
            {title}
          </Logo>
          {children}
        </Container>
      </PaddingExtend>
    </Color>
  );
};

export default Sign;
