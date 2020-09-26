import React from 'react';
import styled from 'styled-components';
import { SIZE } from '../../../utils/constant/number';
import { media } from '../../../utils/styled/styledRdesign';

interface Props extends PartialWidthSize {
  datas: any;
  tableItems: any;
  title?: string;
}
const StyledTable = styled.table<{ width: Props['width'] }>`
  width: ${(props) => props.width}vw;
  border: solid 1px #ccc;
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

const HorizontalTable: React.FC<Props> = ({ datas, width, tableItems, title }) => {
  const order = Object.keys(tableItems);
  const data = Array.isArray(datas) ? datas : [datas];
  const body = data.map((value: any) => {
    return order.map((pKey: string, num) => {
      return <StyledTd key={num}>{value[pKey]}</StyledTd>;
    });
  });
  const head = order.map((pKey: string) => {
    return <StyledTd key={pKey}>{tableItems[pKey]}</StyledTd>;
  });
  const records = [head, ...body];

  return (
    <>
      {title && <div>{title}</div>}
      <StyledTable width={width}>
        <tbody>
          {records.map((value, num: number) => {
            return <StyledTrd key={num}>{value}</StyledTrd>;
          })}
        </tbody>
      </StyledTable>
    </>
  );
};

export default HorizontalTable;
