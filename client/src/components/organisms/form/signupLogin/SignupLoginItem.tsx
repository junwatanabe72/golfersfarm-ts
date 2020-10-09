import React from 'react';
import styled from 'styled-components';
import { media } from '../../../../utils/styled/styledRdesign';
import { FONTSIZE, SIZE, CLEAR } from '../../../../utils/constant/number';
import { sexValues, sexLabels } from '../../../../utils/constant/text/body/user/value';
type Label = typeof sexLabels;
type PlaceHolder = typeof placeHolder;
interface AuthDataType {
  email: string;
  sex: string;
  name: string;
  password: string;
  confirmedPassword: string;
}

interface Props {
  formik: any;
  valueKey: string;
}

const StyledField = styled.input`
  width: ${SIZE.SMALL}vw;
  font-size: ${FONTSIZE.LARGE}px;
  padding: ${CLEAR.TINY}vw 0px;
  border-radius: 6px;
  border-width: 1px;
  border: 1px solid #ccc;
  ${media.tablet`
      width: ${SIZE.MEDIUM}vw;
      `}
`;

const StyledSelect = styled.select`
  width: ${SIZE.XXXSMALL}vw;
  font-size: ${FONTSIZE.MEDIUM}px;
  padding: ${CLEAR.TINY}vw 0px;
  border-radius: 6px;
  border-width: 1px;
  border: 1px solid #ccc;
  ${media.tablet`
      width: ${SIZE.XXXSMALL}vw;
      `}
`;
const placeHolder = {
  email: 'メールアドレス',
  name: 'ユーザ名',
  password: '英数字８字以上のパスワード',
  confirmedPassword: '確認用パスワード',
  sex: '性別',
};

const SignLoginItem: React.FC<Props> = ({ formik, valueKey }) => {
  const item = {
    sex: (
      <>
        <StyledSelect name={valueKey} onChange={formik.handleChange}>
          {Object.keys(sexValues).map((key: string, num: number) => {
            return (
              <option key={num} value={sexValues[key as keyof Label]}>
                {sexLabels[key as keyof Label]}
              </option>
            );
          })}
        </StyledSelect>
      </>
    ),
    other: (
      <StyledField
        type={valueKey}
        name={valueKey}
        placeholder={placeHolder[valueKey as keyof PlaceHolder]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[valueKey as keyof AuthDataType]}
      />
    ),
  };

  const component = valueKey === 'sex' ? item[valueKey] : item['other'];

  return <>{component}</>;
};

export default SignLoginItem;
