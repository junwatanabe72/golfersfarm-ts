import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FormikTouched, FormikErrors } from 'formik';
import { BASICCOLORS } from '../../../../utils/constant/color';
import { ballTableItems } from '../../../../utils/constant/text/table';
import { FONTSIZE, SIZE, CLEAR } from '../../../../utils/constant/number';
import { Padding } from '../../../../utils/styled/styledSpace';
import { State } from '../../../../@types/store';
import { media } from '../../../../utils/styled/styledRdesign';

type BallTableItems = typeof ballTableItems;
type OptionDatasKey = typeof optionDatasKey;
type OptionDatasValue = MakerData;
interface Props {
  formikBall: BallType;
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

const StyledLabel = styled.label`
  color: ${BASICCOLORS.BASICDARK};
`;

const StyledTrd = styled.tr`
  text-align: center;
`;

const StyledTd = styled.td`
  min-width: 20px;
  font-size: 14px;
  border-bottom: solid 1px #ccc;
  border-right: solid 1px white;
`;
const Styleddiv = styled.div`
  margin: 0 auto;
  font-size: 1px;
  color: ${BASICCOLORS.SECONDARYDARK};
`;

const order = Object.keys(ballTableItems);

const head = [...order].map((arg: string, num: number) => {
  return (
    <StyledTd key={arg}>
      <StyledLabel htmlFor={arg}>{ballTableItems[arg as keyof BallTableItems]}</StyledLabel>
    </StyledTd>
  );
});

const optionDatasKey = {
  maker: 'name',
} as const;
const BallEditFormLayout: React.FC<Props> = ({ formikBall, touched, errors, onChange }) => {
  const makers = useSelector((state: State) => state.makers);
  const optionDatas = {
    maker: makers,
  };
  type OptionDatas = typeof optionDatas;

  const bodyItems = [...order].map((key: string, num: number) => {
    const selectKey = optionDatasKey[key as keyof OptionDatasKey];

    return (
      <StyledTd key={num}>
        <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
          {key === 'name' ? (
            <>
              <StyledField
                type={'text'}
                name={key}
                placeholder={'入力してください。'}
                onChange={onChange}
                value={formikBall[key]}
              />
              {touched[key] && errors[key] ? <Styleddiv>{errors[key]}</Styleddiv> : null}
            </>
          ) : (
            <>
              <StyledSelect name={key} onChange={onChange}>
                <option value={key}>{formikBall[key]}</option>
                {Object.values(optionDatas[key as keyof OptionDatas]).map(
                  (data: any, num: number) => {
                    return formikBall[key] !== data[selectKey as keyof OptionDatasValue] ? (
                      <option key={num} value={data[selectKey as keyof OptionDatasValue]}>
                        {data[selectKey as keyof OptionDatasValue]}
                      </option>
                    ) : null;
                  }
                )}
              </StyledSelect>
            </>
          )}
        </Padding>
      </StyledTd>
    );
  });

  return (
    <>
      <StyledTrd>{head}</StyledTrd>
      <StyledTrd>{bodyItems}</StyledTrd>
    </>
  );
};

export default BallEditFormLayout;
