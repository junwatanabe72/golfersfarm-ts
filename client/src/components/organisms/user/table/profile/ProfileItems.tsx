import React from 'react';
import styled from 'styled-components';
import { classLabels } from '../../../../../utils/constant/text/body/user/value';
import { BASICCOLORS } from '../../../../../utils/constant/color';
import { Padding } from '../../../../../utils/styled/styledSpace';
import { CLEAR } from '../../../../../utils/constant/number';
import BaseItems from './BaseItems';

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
const TdExtend = styled(StyledTd)`
  color: ${BASICCOLORS.SECONDARYDARK};
`;

const StyledTh = styled.th`
  min-width: 75px;
  font-size: 14px;
  font-weight: 600px;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;
const ThExtend = styled(StyledTh)`
  border: none;
  &:hover {
    background-color: white;
  }
`;
const ClassDiv = styled.div<{ attr: string }>`
  display: inline-block;
  border-radius: 5px;
  border: ${(props) =>
    props.attr === classLabels.ama
      ? `
        solid 3px ${BASICCOLORS.PRIMARY}; 
  `
      : `
    solid 3px ${BASICCOLORS.SECONDARY}; 
  `};
`;

const plus = '+';

const ProfileItems: React.FC<Props> = ({ label, valueKey, value }) => {
  const tableData = {
    classification: value ? (
      <ThExtend colSpan={2}>
        <ClassDiv attr={String(value)}>
          <Padding left={CLEAR.TINY} right={CLEAR.TINY}>
            {value}
          </Padding>
        </ClassDiv>
      </ThExtend>
    ) : (
      <></>
    ),
    hcap: value ? (
      <>
        <StyledTh>{label}</StyledTh>
        {value > 0 ? (
          <StyledTd>{value}</StyledTd>
        ) : (
          <TdExtend>
            {plus}
            {parseInt(String(value)) * -1}
          </TdExtend>
        )}
      </>
    ) : (
      <></>
    ),
    bestScore: value ? (
      <>
        <StyledTh>{label}</StyledTh>
        {value > 72 ? <StyledTd>{value}</StyledTd> : <TdExtend>{value}</TdExtend>}
      </>
    ) : (
      <></>
    ),
    other: <BaseItems label={label} valueKey={valueKey} value={value} />,
  };
  type TableData = typeof tableData;

  return (
    <>
      {tableData[valueKey as keyof TableData]
        ? tableData[valueKey as keyof TableData]
        : tableData['other']}
    </>
  );
};

export default ProfileItems;
