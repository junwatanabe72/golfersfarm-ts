import React from 'react';
import styled from 'styled-components';
import { useField } from 'formik';
import { media } from '../../../../utils/styled/styledRdesign';
import { FONTSIZE, SIZE, CLEAR } from '../../../../utils/constant/number';
import { BASICCOLORS } from '../../../../utils/constant/color';
import { allTypes, makers, shafts } from '../../../../utils/constant/text/body/user/value';
import Button from '../../../atoms/Button';

type TypeoptionDatasKey = typeof optionDatasKey;
type TypeoptionDatasValue = TypeData | MakerData | ShaftData;

interface Props {
  arg: string;
  index: number;
  remove: <T>(index: number) => T | undefined;
  club: ClubObjectType;
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
  font-size: ${FONTSIZE.MEDIUM}px;
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
  font-size: ${FONTSIZE.MEDIUM}px;
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

const optionDatasKey = {
  type: 'type',
  maker: 'name',
  shaft: 'name',
  flex: 'flex',
} as const;

const ClubEditItems: React.FC<Props> = ({ arg, club, name, index, onChange, remove }) => {
  const [, meta] = useField(name);

  type TypeoptionDatas = typeof optionDatas;

  const optionDatas = {
    type: allTypes,
    maker: makers,
    shaft: shafts,
    flex: shafts,
  };

  const selectComponent = (selectName: string, selectKey: string, targetClub: ClubObjectType) => {
    const key = optionDatasKey[selectKey as keyof TypeoptionDatasKey];
    return (
      <StyledSelect name={selectName} onChange={onChange}>
        <option value={selectKey}>{targetClub[selectKey]}</option>
        {Object.values(optionDatas[selectKey as keyof TypeoptionDatas]).map(
          (data: TypeoptionDatasValue, num: number) => {
            return targetClub[selectKey] !== data[key as keyof TypeoptionDatasValue] ? (
              <option key={num} value={data[key as keyof TypeoptionDatasValue]}>
                {data[key as keyof TypeoptionDatasValue]}
              </option>
            ) : null;
          }
        )}
      </StyledSelect>
    );
  };

  return (
    <>
      {arg === 'name' ? (
        <>
          <StyledField
            type={'text'}
            name={name}
            placeholder={'入力してください。'}
            onChange={onChange}
            value={club[arg]}
          />
          {meta.touched && meta.error ? <Styleddiv>{meta.error}</Styleddiv> : null}
        </>
      ) : arg === '' ? (
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
      ) : (
        <>{selectComponent(name, arg, club)}</>
      )}
    </>
  );
};

export default ClubEditItems;
