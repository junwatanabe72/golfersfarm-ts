import React from 'react';
import styled from 'styled-components';
type TableItems = Pick<BallType, 'name' | 'maker'>;
interface Props extends PartialWidthSize {
  data: BallType;
  tableItems: TableItems;
}

const StyledTrd = styled.tr`
  border-top: solid 1px #ccc;
  text-align: center;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const StyledTh = styled.th`
  min-width: 20px;
  font-size: 14px;
  font-weight: 600px;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;

const StyledTd = styled.td`
  min-width: 20px;
  font-size: 14px;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;

const BallTable: React.FC<Props> = ({ data, tableItems }) => {
  const order = Object.keys(tableItems);
  const body = Object.values(data).map((value, num) => {
    return <StyledTd key={num}>{value}</StyledTd>;
  });
  const head = order.map((key: string) => {
    return <StyledTh key={key}>{tableItems[key as keyof TableItems]}</StyledTh>;
  });
  const records = [head, body];

  return (
    <>
      {records.map((value, num: number) => {
        return <StyledTrd key={num}>{value}</StyledTrd>;
      })}
    </>
  );
};

export default BallTable;
