import React from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import Layout from '../templates/Layout';
import Sign from '../molecules/Sign';
import Button from '../atoms/Button';
import LinkButton from '../atoms/LinkButton';
import Form from '../organisms/form/SignLoginForm';
import { Padding } from '../../utils/styled/styledSpace';
import { BASICCOLORS } from '../../utils/constant/color';
import { FONTSIZE, CLEAR, SIZE } from '../../utils/constant/number';
import { ROUTE } from '../../utils/constant/route';
import { emailValidation, passwordValidation } from '../../validations';
import { loginUser } from '../../actions';

interface Props {
  currentUser: PartialUserObjectType;
}

const LoginTitle = 'LOGIN';
const LoginNoUser = 'アカウントをお持ちでない方はこちら';
const LoginText = {
  LoginNoUser,
  LoginTitle,
};

const formDatas = {
  initialValuesData: {
    email: '',
    password: '',
  },
  placeHolder: {
    email: 'メールアドレス',
    password: '英数字８字以上のパスワード',
  },
};

const validation = () =>
  yup.object().shape({
    email: emailValidation(),
    password: passwordValidation(),
  });

const Login: React.FC<Props> = ({ currentUser }) => {
  const dispatch = useDispatch();
  const loginonSubmit = (values: LoginInitialValuesDataType) => {
    console.log(values);
    const { password, email } = values;
    const loginItems = { password, email };
    dispatch(loginUser(loginItems));
  };
  return (
    <Layout currentUser={currentUser} width={SIZE.LARGE}>
      <Padding top={CLEAR.MEDIUM} bottom={CLEAR.MEDIUM}>
        <Sign title={LoginText.LoginTitle}>
          <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
            <Form
              formDatas={formDatas}
              validation={validation}
              buttonValue={LoginText.LoginTitle}
              onSubmit={loginonSubmit}
            />
          </Padding>
          <Padding top={CLEAR.XLARGE} bottom={CLEAR.TINY}>
            <LinkButton to={ROUTE.SIGNUP}>
              <Button pWidth={CLEAR.TINY} color={BASICCOLORS.WHITELIGHT} fontSize={FONTSIZE.TINY}>
                {LoginText.LoginNoUser}
              </Button>
            </LinkButton>
          </Padding>
        </Sign>
      </Padding>
    </Layout>
  );
};

export default Login;
