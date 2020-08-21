import React from 'react';
import styled from 'styled-components';
import { SIZE, IWIDTHSIZE } from '../../utils/constant/number';
import { media } from '../../utils/styled/styledRdesign';
import { TableData, GearData, GData } from '../../utils/constant/text/body/user/text';
type PartialIWIDTH = Partial<IWIDTHSIZE>;
type PartialTableData = Partial<TableData>;
type PartialGearData = Partial<GearData>;
type PartialGData = Partial<GData>;

interface Props extends PartialIWIDTH {
  datas: PartialTableData | PartialGearData;
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

const Tablegear: React.FC<Props> = ({ datas, width, keys }) => {
  const records = new Array(Object.values(datas).length);

  const head = keys.map((value: string) => {
    return <StyledTd>{value}</StyledTd>;
  });

  // const body = Object.keys(datas).map(function(data: any){
  //     return (
  //       {
  //       datas[data].items.map(function(value)
  //       {
  //         return(
  //         <StyledTd>{value}</StyledTd>
  //         )
  //       })
  //       }
  //       );
  //     })

  const num = [head];
  // // console.log(num);
  // console.log(body);
  return (
    <StyledTable width={width}>
      <tbody>
        {num.map((value) => {
          return <StyledTrd>{value}</StyledTrd>;
        })}
      </tbody>
    </StyledTable>
  );
};

export default Tablegear;
