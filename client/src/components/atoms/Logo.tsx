import React from 'react';
import styled from 'styled-components';
import { FONTSIZE, IFONTSIZE, IFONTSIZEWEIGHT } from '../../utils/constant/number';
import { BASICCOLORS, ICOLOR } from '../../utils/constant/color';
import { ALIGNITEMSTYPE, ALIGNITEMS } from '../../utils/styled/styledSpace';

type PartialIFONTSIZE = Partial<IFONTSIZE>;
type PartialICOLOR = Partial<ICOLOR>;
type PartialIFONTSIZEWEIGHT = Partial<IFONTSIZEWEIGHT>;
type PartialALIGNITEMSTYPE = Partial<ALIGNITEMSTYPE>;
interface Props extends PartialICOLOR, PartialIFONTSIZE, PartialIFONTSIZEWEIGHT {
  textAlign?: ALIGNITEMSTYPE;
}

const Styledh2 = styled.h2<Props>`
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight}px;
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
`;

const Logo: React.FC<Props> = ({
  fontSize = FONTSIZE.MEDIUM,
  textAlign = ALIGNITEMS.CENTER,
  fontWeight = 400,
  children,
  color = BASICCOLORS.PRIMARY,
}) => {
  return (
    <Styledh2 color={color} fontWeight={fontWeight} fontSize={fontSize} textAlign={textAlign}>
      {children}
    </Styledh2>
  );
};

export default Logo;
