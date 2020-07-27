import React from 'react';
import { Link } from 'react-router-dom';
import { defaultSize } from "../../utils/styled/styledText"
import styled from 'styled-components';

interface LinkProps {
  fontsize?: number,
  color?: string,
  to: string,
};

const StyledLink = styled(Link) <LinkProps>`
  display: inline-block;
  
  font-size: ${(props) => props.fontsize}px;
  ${(props) => getButtonBcolor(props.color)};
`;

const getButtonBcolor = (props: string | undefined) => {
  if (props === 'primary') {
    return `
      color: #00bcd4;
      &:hover {
        color: #008ba2;
      }
  `;
  } else if (props === 'secondary') {
    return `
      color: #ff5722;
      &:hover {
        color: #c41c00;
      }
  `;
  } else if (props === 'basic') {
    return `
      color: #546e7a;
      &:hover {
        color: #29434e;
      }
  `;
  } else if (props === 'white') {
    return `
      color: #eeeeee;
      &:hover {
        color: #bcbcbc;
      }
  `;
  }
};

StyledLink.defaultProps = {
  fontsize: defaultSize.FONT.BASE,
  color: "primary",
}


const LinkButton: React.FC<LinkProps> = ({
  to,
  fontsize,
  color,
  children
}) => {
  return (
    <StyledLink to={to} fontsize={fontsize} color={color}>
      {children}
    </StyledLink>
  );
}

export default LinkButton;