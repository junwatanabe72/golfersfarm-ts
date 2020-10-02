import React from 'react';
import styled from 'styled-components';
import { useField } from 'formik';
import { media } from '../../../../utils/styled/styledRdesign';
import { FONTSIZE, SIZE, CLEAR } from '../../../../utils/constant/number';
import { BASICCOLORS } from '../../../../utils/constant/color';
import Button from '../../../atoms/Button';

interface Props {
  arg: string;
  index: number;
  remove: <T>(index: number) => T | undefined;
  result: ResultType;
  name: string;
  onChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
}

const StyledField = styled.input`
  width: ${SIZE.XXXSMALL}vw;
  font-size: ${FONTSIZE.BASE}px;
  padding: ${CLEAR.TINY}vw 0px;
  border-radius: 6px;
  border-width: 1px;
  border: 1px solid #ccc;
  &:hover {
    background-color: #f5f5f5;
  }
  ${media.tablet`
      width: ${SIZE.XXSMALL}vw;
      font-size: 1px;
      `}
`;

const StyledSelect = styled.select`
  width: ${SIZE.XXXSMALL}vw;
  font-size: ${FONTSIZE.BASE}px;
  padding: ${CLEAR.TINY}vw 0px;
  border-radius: 6px;
  border-width: 1px;
  border: 1px solid #ccc;
  &:hover {
    background-color: #f5f5f5;
  }
  ${media.tablet`
      width: ${SIZE.XXSMALL}vw;
      font-size: 1px;
      `}
`;
const Styleddiv = styled.div`
  margin: 0 auto;
  font-size: 1px;
  color: ${BASICCOLORS.SECONDARYDARK};
`;

const Inline = styled.div`
  font-size: ${FONTSIZE.SMALL}px;
`;

const thisYear = new Date().getFullYear();
let initYear = 1980;
const selectYears: number[] = [...Array(thisYear - initYear + 1)]
  .map((_, i) => {
    return initYear + i;
  })
  .sort((a, b) => {
    return b - a;
  });
let initMonth = 1;
const selectMonth: number[] = [...Array(12)].map((_, i) => {
  return initMonth + i;
});
let initRank = 1;
const selectRank: string[] = [...Array(100)].map((_, i) => {
  return i === 99 ? 'CUT' : String(initRank + i);
});

const ResultEditItems: React.FC<Props> = ({ arg, result, name, index, onChange, remove }) => {
  type OptionDatasValue = typeof optionDatas;
  const [, meta] = useField(name);

  const optionDatas = {
    date: selectYears,
    month: selectMonth,
    rank: selectRank,
  };

  const items = {
    name: (
      <>
        <StyledField
          type={'text'}
          name={name}
          placeholder={'入力してください。'}
          onChange={onChange}
          value={result[arg]}
        />
        {meta.touched && meta.error ? <Styleddiv>{meta.error}</Styleddiv> : null}
      </>
    ),
    url: (
      <>
        <StyledField
          type={'text'}
          name={name}
          placeholder={'結果掲載webページのURL'}
          onChange={onChange}
          value={result[arg]}
        />
        {meta.touched && meta.error ? <Styleddiv>{meta.error}</Styleddiv> : null}
      </>
    ),
    button: (
      <Button
        pWidth={CLEAR.TINY}
        pHeight={CLEAR.TINY}
        color={BASICCOLORS.SECONDARY}
        fontSize={FONTSIZE.BASE}
        onClick={() => {
          remove(index);
        }}
      >
        ×
      </Button>
    ),
    other: (
      <StyledSelect name={name} onChange={onChange}>
        <option value={arg}>{result[arg]}</option>
        {optionDatas[arg as keyof OptionDatasValue] &&
          Object.values(optionDatas[arg as keyof OptionDatasValue]).map(
            (data: any, num: number) => {
              return result[arg] !== data ? (
                <option key={num} value={data}>
                  {data}
                </option>
              ) : null;
            }
          )}
      </StyledSelect>
    ),
  };

  return (
    <>{items[arg as keyof typeof items] ? items[arg as keyof typeof items] : items['other']}</>
  );
};

export default ResultEditItems;
