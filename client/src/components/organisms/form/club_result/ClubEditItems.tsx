import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ErrorMessage } from 'formik';
import Button from '../../../atoms/Button';
import { media } from '../../../../utils/styled/styledRdesign';
import { FONTSIZE, SIZE, CLEAR } from '../../../../utils/constant/number';
import { BASICCOLORS } from '../../../../utils/constant/color';
import { State } from '../../../../@types/store';

interface Props {
  arg: string;
  index: number;
  remove: <T>(index: number) => T | undefined;
  club: ClubType;
  name: string;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  onChange: () => void;
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
const StyledDiv = styled.div`
  margin: 0 auto;
  font-size: 1px;
  color: ${BASICCOLORS.SECONDARYDARK};
`;

const optionDatasKey = {
  type: 'type',
  maker: 'name',
  shaft: 'name',
  flex: 'flex',
} as const;
const flexDatas = [
  { flex: 'L' },
  { flex: 'A' },
  { flex: 'R' },
  { flex: 'SR' },
  { flex: 'S' },
  { flex: 'X' },
  { flex: 'XX' },
  { flex: 'SX' },
];

const ClubEditItems: React.FC<Props> = ({
  arg,
  club,
  name,
  index,
  onChange,
  handleChange,
  remove,
}) => {
  const makers = useSelector((state: State) => state.makers);
  const shafts = useSelector((state: State) => state.shafts);
  const types = useSelector((state: State) => state.types);
  type OptionDatas = typeof optionDatas;

  const optionDatas = {
    type: types,
    maker: makers,
    shaft: shafts,
    flex: flexDatas,
  };
  const checksubItem = () => {
    onChange();
    remove(index);
  };
  const items = {
    name: (
      <>
        <StyledField
          type={'text'}
          name={name}
          placeholder={'入力してください。'}
          onChange={handleChange}
          value={club[arg]}
        />
        <StyledDiv>
          <ErrorMessage name={name} />
        </StyledDiv>
      </>
    ),
    button: (
      <Button
        pWidth={CLEAR.TINY}
        pHeight={CLEAR.TINY}
        color={BASICCOLORS.SECONDARY}
        fontSize={FONTSIZE.BASE}
        onClick={checksubItem}
      >
        ×
      </Button>
    ),
    other: (
      <StyledSelect name={name} onChange={handleChange}>
        <option value={arg}>{club[arg]}</option>
        {optionDatas[arg as keyof OptionDatas] &&
          Object.values(optionDatas[arg as keyof OptionDatas]).map((data: any, num: number) => {
            const key = optionDatasKey[arg as keyof OptionDatas];
            return club[arg] !== data[key] ? (
              <option key={num} value={data[key]}>
                {data[key]}
              </option>
            ) : null;
          })}
      </StyledSelect>
    ),
  };

  return (
    <>{items[arg as keyof typeof items] ? items[arg as keyof typeof items] : items['other']}</>
  );
};

export default ClubEditItems;
