import React from 'react';
import { Link } from 'react-router-dom';
import { FONTSIZE,FONTSIZETYPE } from "../../utils/constant/number";
import { BASICCOLORS,COLORTYPES } from "../../utils/constant/color";
import { ROUTE } from "../../utils/constant/route"
import styled from 'styled-components';

interface LinkProps {
  fontSize?: FONTSIZETYPE,
  color?: COLORTYPES,
  to: string,
};

const StyledLink = styled(Link) <LinkProps>`
  display: inline-block;
  font-size: ${(props) => props.fontSize}px;
  ${(props) => getButtonBcolor(props.color)};
`;

const getButtonBcolor = (props?: COLORTYPES) => {
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

const LinkButton: React.FC<LinkProps> = ({
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