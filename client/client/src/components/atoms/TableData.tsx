import React from 'react';
import styled from 'styled-components';

interface Props {
  arg: string,
  value: string,
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

const TableData: React.FC<Props> = ({ arg, value }) => {

  return (
    <StyledTrd>
      <StyledTd>{arg}</StyledTd>
      <StyledTd>{value}</StyledTd>
    </StyledTrd>
  );
}

export default TableData;