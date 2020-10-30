import React from 'react';
import styled from 'styled-components';
import Url from '../../../../atoms/Url';
import { BASICCOLORS } from '../../../../../utils/constant/color';
interface Props extends PartialWidthSize {
  value: ResultType;
  propsKey: keyof ResultType;
  num: number;
}

const StyledTd = styled.td`
  min-width: 20px;
  font-size: 14px;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;
const Styleddiv = styled.div`
  color: ${BASICCOLORS.SECONDARY};
`;
const urlValue = '詳細はこちら';
const ResultItems: React.FC<Props> = ({ value, propsKey, num }) => {
  const items = {
    url: (
      <StyledTd key={num}>
        <Url to={value.url}>
          <Styleddiv>{urlValue}</Styleddiv>
        </Url>
      </StyledTd>
    ),
    rank:
      value.rank === 'CUT' ? (
        <StyledTd key={num}>{value[propsKey]}</StyledTd>
      ) : (
        <StyledTd key={num}>
          {value.tie === 'T' ? `${value[propsKey]}位T` : `${value[propsKey]}位`}
        </StyledTd>
      ),
    tie: <></>,
    other: <StyledTd key={num}>{value[propsKey]}</StyledTd>,
  };
  type Items = typeof items;

  return <>{items[propsKey as keyof Items] ? items[propsKey as keyof Items] : items.other}</>;
};

export default ResultItems;
