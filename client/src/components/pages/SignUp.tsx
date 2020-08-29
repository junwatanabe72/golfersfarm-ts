import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import Layout from '../templates/Layout';
import Sign from '../molecules/Sign';
import Button from '../atoms/Button';
import LinkButton from '../atoms/LinkButton';
import FormikForm from '../atoms/Form';
import {
  SignUpText,
  signUpValidation,
  signUpFormDatas,
} from '../../utils/constant/text/body/sign/text';
import { Padding } from '../../utils/styled/styledSpace';
import { ROUTE } from '../../utils/constant/route';
import { BASICCOLORS } from '../../utils/constant/color';
import { FONTSIZE, CLEAR, SIZE } from '../../utils/constant/number';
import { media } from '../../utils/styled/styledRdesign';
import { initialValuesDataType } from '../../@type/components/signupPage';

interface Props extends RouteComponentProps<{}> {
  currentUser: PartialUserObjectType;
}

const SignUp: React.FC<Props> = ({ currentUser, history }) => {
  const onSubmit = (values: initialValuesDataType) => {
    history.push(`/login/`);
  };

  return (
    <Layout currentUser={currentUser} width={SIZE.LARGE}>
      <Padding top={CLEAR.MEDIUM} bottom={CLEAR.MEDIUM}>
        <Sign title={SignUpText.SignUpTitle}>
          <FormikForm
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
