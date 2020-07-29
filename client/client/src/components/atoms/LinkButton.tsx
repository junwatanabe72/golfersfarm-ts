import React from 'react';
import { Link } from 'react-router-dom';
import { defaultSize,fontType } from "../../utils/constant/number";
import { defaultColors, colorType } from "../../utils/constant/color";
import { ROUTE, routeType } from "../../utils/constant/route"
import styled from 'styled-components';

interface LinkProps {
  fontSize?: fontType,
  color?: colorType,
  to: string,
};

const StyledLink = styled(Link) <LinkProps>`
  display: inline-block;
  font-size: ${(props) => props.fontSize}px;
  ${(props) => getButtonBcolor(props.color)};
`;

const getButtonBcolor = (props?: colorType) => {
  if (props === defaultColors.BASICCOLORS.primary) {
    return `
      color: ${defaultColors.BASICCOLORS.primary};
      &:hover {
        color: ${defaultColors.BASICCOLORS.primaryDark};
      }
  `;
  } else if (props === defaultColors.BASICCOLORS.secondary) {
    return `
      color: ${defaultColors.BASICCOLORS.secondary};
      &:hover {
        color: ${defaultColors.BASICCOLORS.secondaryDark};
      }
  `;
  } else if (props === defaultColors.BASICCOLORS.basic) {
    return `
      color: ${defaultColors.BASICCOLORS.basic};
      &:hover {
        color: ${defaultColors.BASICCOLORS.basicDark};
      }
  `;
  } else if (props === defaultColors.BASICCOLORS.white) {
    return `
      color: ${defaultColors.BASICCOLORS.white};
      &:hover {
        color: ${defaultColors.BASICCOLORS.whiteDark};
      }
  `;
  } else {
    return `
      color: ${defaultColors.BASICCOLORS.basic};
      &:hover {
        color: ${defaultColors.BASICCOLORS.basicDark};
      }
  `;}
};

const LinkButton: React.FC<LinkProps> = ({
  to,
  fontSize = defaultSize.FONT.MEDIUM,
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