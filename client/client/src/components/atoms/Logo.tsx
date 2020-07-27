import React from 'react';
import styled from 'styled-components';
import { fontType} from "../../utils/styled/styledText"



interface LogoProps {
  fontsize: fontType,
  fontweight?: number,
} 

const Styledh2 = styled.h2< { fontsize: number, fontweight?: number}>`
  font-size: ${(props) => props.fontsize}px;
  font-weight: ${(props) => props.fontweight}px;
`;

const Logo: React.FC<LogoProps> = ({ fontsize, fontweight,children })=>{
  return <Styledh2 fontweight={fontweight} fontsize={fontsize}>{children}</Styledh2>;
}

export default Logo;

