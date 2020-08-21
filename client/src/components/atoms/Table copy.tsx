import React from 'react';
import styled from 'styled-components';
import { SIZE, IWIDTHSIZE } from '../../utils/constant/number';
import { media } from '../../utils/styled/styledRdesign';

type PartialIWIDTH = Partial<IWIDTHSIZE>;
interface DataType {
  datas:
    | {
        arg: string;
        value: string;
      }[]
    | {
        name: string;
        type: string;
        shaft: string;
        flex: string;
        maker: string;
      }[]
    | {
        year: string;
        com: string;
        rank: string;
      }[];
}

interface Props extends DataType, PartialIWIDTH {}

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

const Table: React.FC<Props> = ({ datas, width }) => {
  const Data = Object.values(datas);
  return (
    <StyledTable width={width}>
      <tbody>
        {Data[0]['arg'] &&
          Object.values(datas).map((data) => {
            return (
              <StyledTrd>
                <StyledTd>{data.arg}</StyledTd>
                <StyledTd>{data.value}</StyledTd>
              </StyledTrd>
            );
          })}
        {Data[0]['year'] &&
          Object.values(datas).map((data) => {
            return (
              <StyledTrd>
                <StyledTd>{data.year}</StyledTd>
                <StyledTd>{data.com}</StyledTd>
                <StyledTd>{data.rank}</StyledTd>
              </StyledTrd>
            );
          })}
        {Data[0]['type'] &&
          Object.values(datas).map((data) => {
            return (
              <StyledTrd>
                <StyledTd>{data.type}</StyledTd>
                <StyledTd>{data.name}</StyledTd>
                <StyledTd>{data.maker}</StyledTd>
                <StyledTd>{data.shaft}</StyledTd>
                <StyledTd>{data.flex}</StyledTd>
              </StyledTrd>
            );
          })}
      </tbody>
    </StyledTable>
  );
};

export default Table;
