import React from 'react';
import styled from 'styled-components';
import { FONTSIZETYPE, FONTSIZEWEIGHTTYPE, IFONTSIZE, IFONTSIZEWEIGHT} from "../../utils/constant/number"

type PartialIFONTSIZE = Partial<IFONTSIZE>
type PartialIFONTSIZEWEIGHT = Partial<IFONTSIZEWEIGHT>

interface Props extends PartialIFONTSIZE, PartialIFONTSIZEWEIGHT {
} 

const Styledh2 = styled.h2<Props>`
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight}px;
`;

const Logo: React.FC<Props> = ({ fontSize, fontWeight=400,children })=>{
  return <Styledh2 fontWeight={fontWeight} fontSize={fontSize}>{children}</Styledh2>;
}

export default Logo;

