import React from 'react';
import styled from 'styled-components';
import { fontType, fontWeightType } from "../../utils/constant/number"



interface LogoProps {
  fontsize: fontType,
  fontweight?: fontWeightType,
} 

const Styledh2 = styled.h2< { fontsize: fontType, fontweight?: fontWeightType}>`
  font-size: ${(props) => props.fontsize}px;
  font-weight: ${(props) => props.fontweight}px;
`;

const Logo: React.FC<LogoProps> = ({ fontsize, fontweight=400,children })=>{
  return <Styledh2 fontweight={fontweight} fontsize={fontsize}>{children}</Styledh2>;
}

export default Logo;

