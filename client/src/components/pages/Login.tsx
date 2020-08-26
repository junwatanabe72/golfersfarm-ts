import React, { useState } from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../actions';
import Layout from '../templates/Layout';
import Sign from '../molecules/Sign';
import Button from '../atoms/Button';
import LinkButton from '../atoms/LinkButton';
import FormikForm from '../atoms/FormikForm';
import { Padding } from '../../utils/styled/styledSpace';
import { BASICCOLORS } from '../../utils/constant/color';
import { FONTSIZE, CLEAR } from '../../utils/constant/number';
import { ROUTE } from '../../utils/constant/route';
import { initialUser } from '../../utils/constant/text/body/user/value';
import {
  validation,
  formDatas,
  LoginText,
  initialValuesDataType,
} from '../../utils/constant/text/body/sign/text';
import { media } from '../../utils/styled/styledRdesign';
import { PartialUserObjectType } from '../../utils/constant/storeType';

interface Props extends RouteComponentProps<{}> {
  currentUser: PartialUserObjectType;
}

const Container = styled.div`
  width: 60vw;
  max-width: 1200px;
  margin: 0vw auto;
  ${media.tablet`
    width: 90vw;
      `}
`;

const Login: React.FC<Props> = ({ currentUser, history }) => {
  const dispatch = useDispatch();
  const onSubmit = (values: initialValuesDataType) => {
    dispatch(addUser(initialUser));
    history.push(`/users/`);
  };
  return (
    <Layout currentUser={currentUser}>
      <Container>
        <Padding top={CLEAR.MEDIUM} bottom={CLEAR.MEDIUM}>
          <Sign title={LoginText.LoginTitle}>
            <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
              <FormikForm
                formDatas={formDatas}
                validation={validation}
                buttonValue={LoginText.LoginTitle}
                onSubmit={onSubmit}
              />
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
