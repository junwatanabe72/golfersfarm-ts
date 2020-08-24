import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import Layout from '../templates/Layout';
import Sign from '../molecules/Sign';
import Button from '../atoms/Button';
import LinkButton from '../atoms/LinkButton';
import FormikForm from '../atoms/FormikForm';
import {
  SignUpText,
  signUpValidation,
  signUpFormDatas,
  LoginText,
  initialValuesDataType,
} from '../../utils/constant/text/body/sign/text';
import { Padding } from '../../utils/styled/styledSpace';
import { ROUTE } from '../../utils/constant/route';
import { BASICCOLORS } from '../../utils/constant/color';
import { FONTSIZE, CLEAR } from '../../utils/constant/number';
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

const SignUp: React.FC<Props> = ({ currentUser, history }) => {
  const onSubmit = (values: initialValuesDataType) => {
    history.push(`/login/`);
  };

  return (
    <Layout currentUser={currentUser}>
      <Container>
        <Padding top={CLEAR.MEDIUM} bottom={CLEAR.MEDIUM}>
          <Sign title={SignUpText.SignUpTitle}>
            <FormikForm
              formDatas={signUpFormDatas}
              validation={signUpValidation}
              buttonValue={LoginText.LoginTitle}
              onSubmit={onSubmit}
            />
            <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
              <div>{SignUpText.SignUpCheck}</div>
            </Padding>
            <Padding top={CLEAR.SMALL} bottom={CLEAR.TINY}>
              <LinkButton to={ROUTE.LOGIN}>
                <Button color={BASICCOLORS.SECONDARY} fontSize={FONTSIZE.SMALL}>
                  {SignUpText.SignUpLoginUser}
                </Button>
              </LinkButton>
            </Padding>
          </Sign>
        </Padding>
      </Container>
    </Layout>
  );
};

export default SignUp;
