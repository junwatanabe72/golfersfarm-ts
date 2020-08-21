import React from 'react';
import styled from 'styled-components';
import Logo from '../atoms/Logo';
import { BASICCOLORS, ICOLOR } from '../../utils/constant/color';
import { CLEAR, ICLEAR } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';
import { ALIGNITEMS, ALIGNITEMSTYPE } from '../../utils/styled/styledSpace';
import { media } from '../../utils/styled/styledRdesign';

type PartialICLEAR = Partial<ICLEAR>;
type PartialICOLOR = Partial<ICOLOR>;
interface Props extends PartialICOLOR, PartialICLEAR {
  title?: string;
  textAlign?: ALIGNITEMSTYPE;
}

const Color = styled.div<PartialICOLOR>`
  background-color: ${(props) => props.color};
`;

const PaddingExtend = styled(Padding)<{ clear: Props['clear'] }>`
  padding: ${(props) => props.clear}vw;
  ${media.tablet`
      padding: ${CLEAR.XSMALL}vw;
      `}
`;

const Card: React.FC<Props> = ({
  textAlign = ALIGNITEMS.START,
  color = BASICCOLORS.WHITELIGHT,
  title,
  children,
  clear = CLEAR.XSMALL,
}) => {
  return (
    <Color color={color}>
      <PaddingExtend clear={clear}>
        <Logo textAlign={textAlign}>{title}</Logo>
        {children}
      </PaddingExtend>
    </Color>
  );
};

export default Card;
