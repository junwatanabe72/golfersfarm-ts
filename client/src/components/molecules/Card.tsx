import React from 'react';
import styled from 'styled-components';
import Logo from '../atoms/Logo';
import { BASICCOLORS } from '../../utils/constant/color';
import { CLEAR } from '../../utils/constant/number';
import { Padding } from '../../utils/styled/styledSpace';
import { ALIGNITEMS } from '../../utils/styled/styledSpace';
import { media } from '../../utils/styled/styledRdesign';
import { PartialICOLOR } from '../../@type/utils/color';
import { PartialICLEAR } from '../../@type/utils/numer';
import { PartialITEXTALIGNTYPE } from '../../@type/utils/space';

interface Props extends PartialICOLOR, PartialICLEAR, PartialITEXTALIGNTYPE {
  title?: string;
}

const Color = styled.div<PartialICOLOR>`
  background-color: ${(props) => props.color};
`;

const PaddingExtend = styled(Padding)<PartialICLEAR>`
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
