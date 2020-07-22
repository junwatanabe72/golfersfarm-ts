import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  height: number;

}

const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  line-height: 30px;
  // height: ${(props) => props.height}px;
  // font-size: ${(props) => props.size}px;
  // color: ${(props) => props.color};
  // &:hover {
  //   color: ${(props) => props.hovercolor};
  //   background-color: ${(props) => props.hoverbackgroundcolor};
  // }
`;

function LinkButton({
  height,
  to,
  size,
  color = 'black',
  hoverbackgroundcolor,
  hovercolor,
  value,
}) {
  return (
    <StyledLink
      // size={size}
      // to={to}
      // color={color}
      // hoverbackgroundcolor={hoverbackgroundcolor}
      // hovercolor={hovercolor}
      // height={height}
    >
      {/* {value} */}
    </StyledLink>
  );
}

export default LinkButton;
