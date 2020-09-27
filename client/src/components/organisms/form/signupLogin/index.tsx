import React from 'react';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useFormik } from 'formik';
import Button from '../../../atoms/Button';
import { createUser, loginUser } from '../../../../actions';
import { Padding } from '../../../../utils/styled/styledSpace';
import { media } from '../../../../utils/styled/styledRdesign';
import { FONTSIZE, SIZE, CLEAR } from '../../../../utils/constant/number';
import { BASICCOLORS } from '../../../../utils/constant/color';
import {
  emailValidation,
  nameValidation,
  passwordValidation,
  confirmedPasswordValidation,
} from '../../../../validations';

interface SignUpDataType {
  email: string;
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

const formDatas = {
  login: {
    initialValuesData: {
      email: '',
      password: '',
    },
    placeHolder: {
      email: 'メールアドレス',
      password: '英数字８字以上のパスワード',
    },
  },
  signUp: {
    initialValuesData: {
      email: '',
      name: '',
      password: '',
      confirmedPassword: '',
    },
    placeHolder: {
      email: 'メールアドレス',
      name: 'ユーザ名',
      password: '英数字８字以上のパスワード',
      confirmedPassword: '確認用パスワード',
    },
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
      if (!values.name) {
        return;
      }
      const { name, password, email } = values;
      const signItems = { name, password, email };
      dispatch(createUser(signItems));
    },
    login: (values: LoginUserType) => {
      const { password, email } = values;
      const loginItems = { password, email };
      dispatch(loginUser(loginItems));
    },
  };
  const data = { ...formDatas[status].initialValuesData };
  const formik = useFormik({
    initialValues: data,
    validationSchema: validation[status],
    onSubmit: onSubmit[status],
  });

  const InputItems = Object.entries(formDatas[status].placeHolder).map(
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
              value={formik.values[key as keyof SignUpDataType]}
            />
          </Padding>
          {formik.touched[key as keyof SignUpDataType] &&
          formik.errors[key as keyof SignUpDataType] ? (
            <Styleddiv>{formik.errors[key as keyof SignUpDataType]}</Styleddiv>
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
          <Button pWidth={CLEAR.LARGE}>{buttonValue[status]}</Button>
        </StyledButton>
      </Padding>
    </StyledForm>
  );
};

export default SignLoginForm;
