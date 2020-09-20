import React from 'react';
import styled from 'styled-components';
import { SIZE } from '../../../utils/constant/number';
import { media } from '../../../utils/styled/styledRdesign';

interface Props extends PartialIWIDTH {
  datas: any;
  tableItems: any;
}

const StyledTable = styled.table<{ width: Props['width'] }>`
  width: ${(props) => props.width}vw;
  border: solid 1px #ccc;
  margin: 0vw auto;
  border-radius: 5px;
  ${media.tablet`
      width: 60vw;  
      `}
`;

StyledTable.defaultProps = {
  width: SIZE.MEDIUM,
};

const StyledTrd = styled.tr`
  border-top: solid 1px #ccc;
  text-align: left;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const StyledTd = styled.td`
  min-width: 20px;
  font-size: 14px;
  cursor: pointer;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;
const VerticalTable: React.FC<Props> = ({ datas, width, tableItems }) => {
  const order = Object.keys(tableItems);

  const Data = order.map((value: string, num: number) => {
    return (
      <StyledTrd key={num}>
        <StyledTd>{tableItems[value]}</StyledTd>
        <StyledTd>{datas[value as keyof PartialUserObjectType]}</StyledTd>
      </StyledTrd>
    );
  });

  return (
    <StyledTable width={width}>
      <tbody>{Data}</tbody>
    </StyledTable>
  );
};

export default VerticalTable;
