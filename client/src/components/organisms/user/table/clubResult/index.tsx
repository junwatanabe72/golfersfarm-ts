import React from 'react';
import styled from 'styled-components';
import { resultTableItems, clubTableItems } from '../../../../../utils/constant/text/table';
import ResultItems from './ResultItems';
import { BASICCOLORS } from '../../../../../utils/constant/color';
type ResultTableItems = typeof resultTableItems;
type ClubTableItems = typeof clubTableItems;
type TableItems = ResultTableItems | ClubTableItems;

interface Props extends PartialWidthSize {
  datas: ArrayResultType | ArrayClubType;
  tableItems: TableItems;
  theme: 'result' | 'club';
}

const StyledTrd = styled.tr`
  border-top: solid 1px #ccc;
  text-align: center;
  &:hover {
    background-color: ${BASICCOLORS.WHITE};
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

const ClubResultTable: React.FC<Props> = ({ datas, tableItems, theme }) => {
  const order = {
    club: Object.keys(tableItems),
    result: Object.keys(tableItems).filter((key) => {
      return key !== 'tie';
    }),
  };
  const body = {
    club: Object.values(datas).map((value: ClubType) => {
      return order[theme].map((key: string, num) => {
        return <StyledTd key={num}>{value[key]}</StyledTd>;
      });
    }),
    result: Object.values(datas).map((value: ResultType) => {
      return order[theme].map((key: string, num) => {
        return <ResultItems value={value} propsKey={key} num={num} />;
      });
    }),
  };

  const head = order[theme].map((key: string) => {
    return <StyledTh key={key}>{tableItems[key as keyof TableItems]}</StyledTh>;
  });

  return (
    <>
      {[head, ...body[theme]].map((value, num: number) => {
        return <StyledTrd key={num}>{value}</StyledTrd>;
      })}
    </>
  );
};

export default ClubResultTable;
