import React, { useState } from 'react';
import styled from 'styled-components';
import * as H from 'history';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../actions';
import Button from '../atoms/Button';
import LinkButton from '../atoms/LinkButton';
import Input from '../atoms/Input';
import Layout from '../templates/Layout';
import Sign from '../molecules/Sign';
import { Padding, ALIGNITEMS } from '../../utils/styled/styledSpace';
import { BASICCOLORS, ICOLOR } from '../../utils/constant/color';
import { FONTSIZE, CLEAR } from '../../utils/constant/number';
import { ROUTE, ROUTETYPE } from '../../utils/constant/route';
import { initialUser } from '../../utils/constant/text/body/user/value';
import { LoginText } from '../../utils/constant/text/body/sign/text';
import { media } from '../../utils/styled/styledRdesign';
import { PartialIUserData } from '../../actions';

interface Props extends RouteComponentProps<{}> {
  currentUser: PartialIUserData;
}

const Container = styled.div`
  width: 60vw;
  max-width: 1200px;
  margin: 0vw auto;
  ${media.tablet`
    width: 90vw;
      `}
`;

const errorMessage = {
  email: 'メールアドレスを入力してください。',
  password: 'パスワードを入力してください。',
};

const Login: React.FC<Props> = ({ currentUser, history }) => {
  const [loginMail, setMail] = useState<string>('');
  const [loginPass, setPass] = useState<string>('');
  const [vaildMessege, setMessage] = useState<string>('');
  const dispatch = useDispatch();

  const onSubmit = async () => {
    const data = {
      email: loginMail,
      password: loginPass,
    };
    if (!data.email) {
      setMessage(errorMessage.email);
      return;
    }
    if (!data.password) {
      setMessage(errorMessage.password);
      return;
    }

    dispatch(addUser(initialUser));

    history.push(`/users/`);

    setMail('');
    setPass('');
  };
  const onChangeMail = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    setMail(e.currentTarget.value);
  };
  const onChangePass = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    setPass(e.currentTarget.value);
  };

  const onChangeItems = [onChangeMail, onChangePass];
  const LoginInputItems = LoginText.LoginItems.map((item: string, i: number) => {
    return (
      <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
        <Input placeHolder={item} onChange={onChangeItems[i]} />
      </Padding>
    );
  });

  return (
    <Layout currentUser={currentUser}>
      <Container>
        <Padding top={CLEAR.MEDIUM} bottom={CLEAR.MEDIUM}>
          <Sign title={LoginText.LoginTitle}>
            {LoginInputItems}
            <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
              <Button pWidth={CLEAR.LARGE} onClick={onSubmit}>
                {LoginText.LoginTitle}
              </Button>
            </Padding>
            <Padding top={CLEAR.SMALL} bottom={CLEAR.TINY}>
              <LinkButton to={ROUTE.SIGNUP}>
                <Button color={BASICCOLORS.WHITELIGHT} fontSize={FONTSIZE.SMALL}>
                  {LoginText.LoginNoUser}
                </Button>
              </LinkButton>
            </Padding>
          </Sign>
        </Padding>
      </Container>
    </Layout>
  );
};

export default Login;
