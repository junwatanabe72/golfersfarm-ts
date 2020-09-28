import React from 'react';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useFormik } from 'formik';
import Button from '../../../atoms/Button';
import { createUser, loginUser } from '../../../../actions';
import { Padding } from '../../../../utils/styled/styledSpace';
import { CLEAR } from '../../../../utils/constant/number';
import { BASICCOLORS } from '../../../../utils/constant/color';
import {
  emailValidation,
  nameValidation,
  passwordValidation,
  confirmedPasswordValidation,
} from '../../../../validations';
import SignLoginItem from './SignupLoginItem';

interface SignUpDataType {
  email: string;
  sex?: string;
  name?: string;
  password: string;
  confirmedPassword?: string;
}

interface Props {
  status: 'signUp' | 'login';
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled.button`
  padding: 0;
  margin: 0;
  border-style: none;
`;

const Styleddiv = styled.div`
  color: ${BASICCOLORS.SECONDARYDARK};
`;

const formDatas = {
  login: {
    email: '',
    password: '',
  },
  signUp: {
    email: '',
    name: '',
    password: '',
    confirmedPassword: '',
    sex: '男性',
  },
};

const buttonValue = {
  signUp: 'SIGN UP',
  login: 'LOGIN',
};

const validation = {
  signUp: () =>
    yup.object().shape({
      email: emailValidation(),
      name: nameValidation(),
      password: passwordValidation(),
      confirmedPassword: confirmedPasswordValidation(),
    }),
  login: () =>
    yup.object().shape({
      email: emailValidation(),
      password: passwordValidation(),
    }),
};

const SignLoginForm: React.FC<Props> = ({ status }) => {
  const dispatch = useDispatch();

  const onSubmit = {
    signUp: (values: SignUpDataType) => {
      if (!values.name || !values.sex) {
        return;
      }
      const { name, password, email, sex } = values;
      const signItems = { name, password, email, sex };
      dispatch(createUser(signItems));
    },
    login: (values: LoginUserType) => {
      const { password, email } = values;
      const loginItems = { password, email };
      dispatch(loginUser(loginItems));
    },
  };
  const data = { ...formDatas[status] };
  const formik = useFormik({
    initialValues: data,
    validationSchema: validation[status],
    onSubmit: onSubmit[status],
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      {Object.keys(formDatas[status]).map((key: string, num: number) => {
        return (
          <React.Fragment key={num}>
            <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
              <SignLoginItem formik={formik} valueKey={key} />
            </Padding>
            {formik.touched[key as keyof SignUpDataType] &&
            formik.errors[key as keyof SignUpDataType] ? (
              <Styleddiv>{formik.errors[key as keyof SignUpDataType]}</Styleddiv>
            ) : null}
          </React.Fragment>
        );
      })}
      <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
        <StyledButton type="submit">
          <Button pWidth={CLEAR.LARGE}>{buttonValue[status]}</Button>
        </StyledButton>
      </Padding>
    </StyledForm>
  );
};

export default SignLoginForm;