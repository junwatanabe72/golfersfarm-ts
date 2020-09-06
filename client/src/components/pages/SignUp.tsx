import React from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import Layout from '../templates/Layout';
import Sign from '../molecules/Sign';
import Button from '../atoms/Button';
import LinkButton from '../atoms/LinkButton';
import Form from '../organisms/form/SignLoginForm';
import { Padding } from '../../utils/styled/styledSpace';
import { ROUTE } from '../../utils/constant/route';
import { BASICCOLORS } from '../../utils/constant/color';
import { FONTSIZE, CLEAR, SIZE } from '../../utils/constant/number';

interface Props {
  currentUser: PartialUserObjectType;
  onSubmit: (values: LoginSignUpValuesDataType) => void;
}

const SignUpCheck = '利用規約とプライバシーポリシーを御覧ください。';
const SignUpLoginUser = 'アカウントをお持ちの方はこちら';
const SignUpTitle = 'SIGN UP';
const SignUpText = {
  SignUpCheck,
  SignUpLoginUser,
  SignUpTitle,
};
const signUpFormDatas = {
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
};

const signUpValidation = () =>
  yup.object().shape({
    email: yup.string().email('メールアドレスの形式で入力してください').required('必須項目です'),
    name: yup.string().required('必須項目です'),
    password: yup
      .string()
      .required('必須項目です')
      .min(8, '8字以上にしてください。')
      .max(30, '30字以下にしてください。'),
    confirmedPassword: yup
      .string()
      .oneOf([yup.ref('password'), undefined], '入力したパスワードではありません。'),
  });

const SignUp: React.FC<Props> = ({ currentUser, onSubmit }) => {
  return (
    <Layout currentUser={currentUser} width={SIZE.LARGE}>
      <Padding top={CLEAR.MEDIUM} bottom={CLEAR.MEDIUM}>
        <Sign title={SignUpText.SignUpTitle}>
          <Form
            formDatas={signUpFormDatas}
            validation={signUpValidation}
            buttonValue={SignUpText.SignUpTitle}
            onSubmit={onSubmit}
          />
          <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
            <div>{SignUpText.SignUpCheck}</div>
          </Padding>
          <Padding top={CLEAR.LARGE} bottom={CLEAR.TINY}>
            <LinkButton to={ROUTE.LOGIN}>
              <Button pWidth={CLEAR.XSMALL} color={BASICCOLORS.SECONDARY} fontSize={FONTSIZE.SMALL}>
                {SignUpText.SignUpLoginUser}
              </Button>
            </LinkButton>
          </Padding>
        </Sign>
      </Padding>
    </Layout>
  );
};

export default SignUp;
