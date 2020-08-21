import React from 'react';
import styled from 'styled-components';
import { SIZE, IWIDTHSIZE } from '../../utils/constant/number';
import { media } from '../../utils/styled/styledRdesign';
import { TableData } from '../../utils/constant/text/body/user/text';
type PartialIWIDTH = Partial<IWIDTHSIZE>;
type PartialTableData = Partial<TableData>;

interface Props extends PartialIWIDTH {
  datas: PartialTableData;
  keys: string[];
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

const Table: React.FC<Props> = ({ datas, width, keys }) => {
  // export const gearTableItems = {
  //   type: '種類',
  //   name: '名前',
  //   maker: 'メーカー',
  //   shaft: 'シャフト',
  //   flex: '硬さ',
  // };
  // const column =
  const Data = Object.values(datas).map((value: string | undefined, i: number) => {
    return (
      <StyledTrd>
        <StyledTd>{keys[i]}</StyledTd>
        <StyledTd>{value}</StyledTd>
      </StyledTrd>
    );
  });
  return (
    <StyledTable width={width}>
      <tbody>{Data}</tbody>
    </StyledTable>
  );
};

export default Table;
