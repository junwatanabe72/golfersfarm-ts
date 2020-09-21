import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import Button from '../../atoms/Button';
import { Padding } from '../../../utils/styled/styledSpace';
import { media } from '../../../utils/styled/styledRdesign';
import { FONTSIZE, SIZE, CLEAR } from '../../../utils/constant/number';
import { BASICCOLORS } from '../../../utils/constant/color';

interface Props extends LoginSignUpFormDataTypes {
  validation: any;
  buttonValue: string;
  onSubmit: (values: any) => void;
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

const StyledButton = styled.button`
  padding: 0;
  margin: 0;
  border-style: none;
`;

const Styleddiv = styled.div`
  color: ${BASICCOLORS.SECONDARYDARK};
`;

const SignLoginForm: React.FC<Props> = ({ formDatas, validation, buttonValue, onSubmit }) => {
  const formik = useFormik({
    initialValues: { ...formDatas.initialValuesData },
    validationSchema: validation,
    onSubmit: onSubmit,
  });

  const InputItems = Object.entries(formDatas.placeHolder).map(
    ([key, value]: string[], num: number) => {
      return (
        <React.Fragment key={num}>
          <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
            <StyledField
              type={key}
              name={key}
              placeholder={value}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[key]}
            />
          </Padding>
          {formik.touched[key] && formik.errors[key] ? (
            <Styleddiv>{formik.errors[key]}</Styleddiv>
          ) : null}
        </React.Fragment>
      );
    }
  );

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      {InputItems}
      <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
        <StyledButton type="submit">
          <Button pWidth={CLEAR.LARGE}>{buttonValue}</Button>
        </StyledButton>
      </Padding>
    </StyledForm>
  );
};

export default SignLoginForm;
