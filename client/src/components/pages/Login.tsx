import React from 'react';
import styled from 'styled-components';
import Layout from '../templates/Layout';
import Sign from '../molecules/Sign';
import Button from '../atoms/Button';
import LinkButton from '../atoms/LinkButton';
import FormikForm from '../atoms/Form';
import { Padding } from '../../utils/styled/styledSpace';
import { BASICCOLORS } from '../../utils/constant/color';
import { FONTSIZE, CLEAR, SIZE } from '../../utils/constant/number';
import { ROUTE } from '../../utils/constant/route';
import { validation, formDatas, LoginText } from '../../utils/constant/text/body/sign/text';
import { initialValuesDataType } from '../../@type/components/signupPage';

interface Props {
  currentUser: PartialUserObjectType;
  onSubmit: (values: initialValuesDataType) => void;
}

const Login: React.FC<Props> = ({ currentUser, onSubmit }) => {
  return (
    <Layout currentUser={currentUser} width={SIZE.LARGE}>
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
