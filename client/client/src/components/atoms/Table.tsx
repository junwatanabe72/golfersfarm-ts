import React from 'react';
import styled from 'styled-components';
import TableData from "./TableData";
import { WIDTH, IWIDTH } from "../../utils/constant/number";
import { media } from '../../utils/styled/styledRdesign';
import { BASICCOLORS, ICOLOR } from "../../utils/constant/color"

type PartialIWIDTH = Partial<IWIDTH>
interface DataType {
  datas: {
    arg: string,
    value: string,
  }[] |
  {
    name: string,
    type: string,
    shaft: string,
    flex: string,
    smaker: string,
    maker: string,
  }[] 
}

interface Props extends DataType, PartialIWIDTH  {
}

const StyledTable = styled.table<{ width: Props["width"]}>`
  width: ${(props) => props.width}vw;
  border: solid 1px #ccc;
  border-radius: 5px;
   ${media.tablet`
      width: 60vw;  
      `} 
`;

StyledTable.defaultProps = {
  width: WIDTH.MEDIUM,
}


const StyledTrd = styled.tr`
  border-top: solid 1px #ccc;
  text-align: left;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const StyledTd = styled.td`
  // min-width: 20px;
  // max-width: 120px;
  font-size: 14px;
  cursor: pointer;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;


const Table: React.FC<Props> = ({ datas, width }) => {
  const Data = Object.values(datas)
  const targetDatas =
  (Data[0]["arg"])
  ? 
    Object.values(datas).map(data => 
      {
        return (
        <StyledTrd>
          <StyledTd>{data.arg}</StyledTd>
          <StyledTd>{data.value}</StyledTd>
        </StyledTrd>
        )
      })
  :
      Object.values(datas).map(data => 
      {
        return (
          <StyledTrd>
            <StyledTd>{data.type}</StyledTd>
            <StyledTd>{data.name}</StyledTd>
            <StyledTd>{data.maker}</StyledTd>
            <StyledTd>{data.shaft}</StyledTd>
            <StyledTd>{data.flex}</StyledTd>
            <StyledTd>{data.smaker}</StyledTd>
          </StyledTrd>
        )
      })

  return (
      <StyledTable width={width}>
        <tbody>
        {targetDatas}
        </tbody>
      </StyledTable>
  );
}

export default Table;