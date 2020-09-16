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

const HorizontalTable: React.FC<Props> = ({ datas, width, tableItems }) => {
  const order = Object.keys(tableItems).map((key: string) => {
    return key;
  });

  const body = Object.values(datas).map((data: any) => {
    return order.map((pKey: string, num) => {
      return <StyledTd key={num}>{data[pKey]}</StyledTd>;
    });
  });
  const head = order.map((pKey: string, num: number) => {
    return <StyledTd key={pKey}>{tableItems[pKey]}</StyledTd>;
  });
  const records = [head, ...body];

  return (
    <StyledTable width={width}>
      <tbody>
        {records.map((value, num: number) => {
          return <StyledTrd key={num}>{value}</StyledTrd>;
        })}
      </tbody>
    </StyledTable>
  );
};

export default HorizontalTable;
