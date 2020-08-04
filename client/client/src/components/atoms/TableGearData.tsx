import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string,
  type: string,
  shaft: string,
  flex: string,
  smaker: string,
  maker: string,
}

const StyledTrd = styled.tr`
  border-top: solid 1px #ccc;
  text-align: left;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const StyledTd = styled.td`
  // max-width: 300px;
  font-size: 14px;
  cursor: pointer;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;

const TableData: React.FC<Props> = ({ name,type,shaft,flex,smaker,maker }) => {

  return (
    <StyledTrd>
      <StyledTd>{name}</StyledTd>
      <StyledTd>{type}</StyledTd>
    </StyledTrd>
  );
}

export default TableData;