import React from 'react';
import styled from 'styled-components';
import { FormikTouched, FormikErrors } from 'formik';
import { BASICCOLORS } from '../../../../utils/constant/color';
import { ballTableItems } from '../../../../utils/constant/text/table';
import { FONTSIZE, SIZE, CLEAR } from '../../../../utils/constant/number';
import { media } from '../../../../utils/styled/styledRdesign';

type BallTableItems = typeof ballTableItems;
type OptionDatasKey = typeof optionDatasKey;
interface Props {
  formikBall: BallType;
  valueKey: string;
  optionDatas: any;
  errors: FormikErrors<BallType>;
  touched: FormikTouched<BallType>;
  onChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
}

const StyledField = styled.input`
  width: ${SIZE.SXMALL}vw;
  font-size: ${FONTSIZE.MEDIUM}px;
  padding: ${CLEAR.TINY}vw 0px;
  border-radius: 6px;
  border-width: 1px;
  border: 1px solid #ccc;
  &:hover {
    background-color: #f5f5f5;
  }
  ${media.tablet`
      width: ${SIZE.SMALL}vw;
      `}
`;

const StyledSelect = styled.select`
  width: ${SIZE.SXMALL}vw;
  font-size: ${FONTSIZE.MEDIUM}px;
  padding: ${CLEAR.TINY}vw 0px;
  border-radius: 6px;
  border-width: 1px;
  border: 1px solid #ccc;
  &:hover {
    background-color: #f5f5f5;
  }
  ${media.tablet`
      width: ${SIZE.SMALL}vw;
      `}
`;

const Styleddiv = styled.div`
  margin: 0 auto;
  font-size: 1px;
  color: ${BASICCOLORS.SECONDARYDARK};
`;
const optionDatasKey = {
  maker: 'name',
} as const;
const BallEditItem: React.FC<Props> = ({
  formikBall,
  valueKey,
  optionDatas,
  touched,
  errors,
  onChange,
}) => {
  const selectKey = optionDatasKey[valueKey as keyof OptionDatasKey];
  const item = {
    name: (
      <>
        <StyledField
          type={'text'}
          name={valueKey}
          placeholder={'入力してください。'}
          onChange={onChange}
          value={formikBall[valueKey]}
        />
        {touched[valueKey] && errors[valueKey] ? <Styleddiv>{errors[valueKey]}</Styleddiv> : null}
      </>
    ),
    maker: (
      <>
        <StyledSelect name={valueKey} onChange={onChange}>
          <option value={valueKey}>{formikBall[valueKey]}</option>
          {Object.values(optionDatas[valueKey]).map((data: any, num: number) => {
            return formikBall[valueKey] !== data[selectKey] ? (
              <option key={num} value={data[selectKey]}>
                {data[selectKey]}
              </option>
            ) : null;
          })}
        </StyledSelect>
      </>
    ),
  };

  return <>{item[valueKey as keyof BallTableItems]}</>;
};

export default BallEditItem;
