import React from 'react';
import styled from 'styled-components';

const Styledh2 = styled.h2`
  font-size: ${(props) => props.fontsize}rem;
  margin: 4px;
`;

function Logo({ name, fontsize }) {
  return <Styledh2 fontsize={fontsize}>{name}</Styledh2>;
}

export default Logo;
