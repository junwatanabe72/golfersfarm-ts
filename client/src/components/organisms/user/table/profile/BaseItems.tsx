import React from 'react';
import styled from 'styled-components';

interface Props {
  label: string;
  valueKey: string;
  value: string | number | undefined;
}

const StyledTd = styled.td`
  min-width: 20px;
  font-size: 14px;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;

const StyledTh = styled.th`
  min-width: 75px;
  font-size: 14px;
  font-weight: 600px;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;

const unit = { averageDistance: 'yard', blood: '型' };
type Unit = typeof unit;

const BaseItems: React.FC<Props> = ({ label, valueKey, value }) => {
  return (
    <>
      <StyledTh>{label}</StyledTh>
      <StyledTd>
        {value}
        {unit[valueKey as keyof Unit] && unit[valueKey as keyof Unit]}
      </StyledTd>
    </>
  );
};

export default BaseItems;
