import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NONAME } from 'dns';

interface Props {
  to: string,
}
const StyledLink = styled(Link)<{to: Props["to"]}>`
  cursor: pointer;
  ${(props) => checkedDisplay(props.to)};
`;

const checkedDisplay = (props: Props["to"]) => {
  if (props === "") { 
    return `
      display: none;
      `
  }
}

const Url: React.FC<Props> = ({ to, children}) => {
  return (
    <StyledLink to={to}>{children}</StyledLink>
  );
}


export default Url;