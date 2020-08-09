import React from 'react';
import { Link } from 'react-router-dom';
import { FONTSIZE,IFONTSIZE } from "../../utils/constant/number";
import { BASICCOLORS,ICOLOR } from "../../utils/constant/color";
import styled from 'styled-components';

type PartialICOLOR = Partial<ICOLOR>
type PartialIFONTSIZE = Partial<IFONTSIZE>
interface Props extends PartialICOLOR, PartialIFONTSIZE{
  to: string,
};

const StyledLink = styled(Link) <{ fontSize?: IFONTSIZE["fontSize"],color?: ICOLOR["color"]}>`
  display: inline-block;
  font-size: ${(props) => props.fontSize}px;
  ${(props) => getButtonBcolor(props.color)};
`;

const getButtonBcolor = (props?: ICOLOR["color"]) => {
  if (props === BASICCOLORS.PRIMARY) {
    return `
      color: ${BASICCOLORS.PRIMARY};
      &:hover {
        color: ${BASICCOLORS.PRIMARYDARK};
      }
  `;
  } else if (props === BASICCOLORS.SECONDARY) {
    return `
      color: ${BASICCOLORS.SECONDARY};
      &:hover {
        color: ${BASICCOLORS.SECONDARYDARK};
      }
  `;
  } else if (props === BASICCOLORS.BASIC) {
    return `
      color: ${BASICCOLORS.BASIC};
      &:hover {
        color: ${BASICCOLORS.BASICDARK};
      }
  `;
  } else if (props === BASICCOLORS.WHITE) {
    return `
      color: ${BASICCOLORS.WHITE};
      &:hover {
        color: ${BASICCOLORS.WHITEDARK};
      }
  `;
  }
};

const LinkButton: React.FC<Props> = ({
  to,
  fontSize = FONTSIZE.MEDIUM,
  color,
  children
}) => {
  return (
    <StyledLink to={to} fontSize={fontSize} color={color}>
      {children}
    </StyledLink>
  );
}

export default LinkButton;