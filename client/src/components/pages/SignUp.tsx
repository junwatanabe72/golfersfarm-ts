import React from 'react';
import { useDispatch } from 'react-redux';
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
import {
  emailValidation,
  passwordValidation,
  nameValidation,
  confirmedPasswordValidation,
} from '../../validations';
import { createUser } from '../../actions';

interface Props {
  currentUser: PartialUserObjectType;
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
    email: emailValidation(),
    name: nameValidation(),
    password: passwordValidation(),
    confirmedPassword: confirmedPasswordValidation(),
  });

const SignUp: React.FC<Props> = ({ currentUser }) => {
  const dispatch = useDispatch();
  const signUponSubmit = (values: SignUpInitialValuesDataType) => {
    console.log(values);
    const { name, password, email } = values;
    const signItems = { name, password, email };
    dispatch(createUser(signItems));
  };

  return (
    <Layout currentUser={currentUser} width={SIZE.LARGE}>
      <Padding top={CLEAR.MEDIUM} bottom={CLEAR.MEDIUM}>
        <Sign title={SignUpText.SignUpTitle}>
          <Form
            formDatas={signUpFormDatas}
            validation={signUpValidation}
            buttonValue={SignUpText.SignUpTitle}
            onSubmit={signUponSubmit}
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
