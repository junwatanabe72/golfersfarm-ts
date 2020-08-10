import React from 'react';
import styled from 'styled-components';
import { IFONTSIZE, IFONTSIZEWEIGHT} from "../../utils/constant/number"
import { BASICCOLORS,ICOLOR } from "../../utils/constant/color"

type PartialIFONTSIZE = Partial<IFONTSIZE>
type PartialICOLOR = Partial<ICOLOR>
type PartialIFONTSIZEWEIGHT = Partial<IFONTSIZEWEIGHT>

interface Props extends PartialICOLOR,PartialIFONTSIZE, PartialIFONTSIZEWEIGHT {
} 

const Styledh2 = styled.h2<Props>`
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight}px;
  color: ${(props) => props.color};
`;

const Logo: React.FC<Props> = ({ fontSize, fontWeight = 400, children ,color = BASICCOLORS.BASIC })=>{
  return <Styledh2 color={color} fontWeight={fontWeight} fontSize={fontSize}>{children}</Styledh2>;
}

export default Logo;

