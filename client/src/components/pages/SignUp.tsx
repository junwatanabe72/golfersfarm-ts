import React from 'react';
import Layout from '../templates/Layout';
import Sign from '../molecules/Sign';
import Button from '../atoms/Button';
import LinkButton from '../atoms/LinkButton';
import Form from '../organisms/form/signupLogin';
import { Padding } from '../../utils/styled/styledSpace';
import { ROUTE, INFOROUTE } from '../../utils/constant/route';
import { BASICCOLORS } from '../../utils/constant/color';
import { FONTSIZE, CLEAR, SIZE } from '../../utils/constant/number';

interface Props {
  currentUser: CurrentUserType;
}

const SignUpLoginUser = 'アカウントをお持ちの方はこちら';
const SignUpTitle = 'SIGN UP';
const SignUpText = {
  SignUpLoginUser,
  SignUpTitle,
};

const status = 'signUp';
const SignUp: React.FC<Props> = ({ currentUser }) => {
  const TosLink = (
    <LinkButton color={BASICCOLORS.SECONDARY} to={INFOROUTE.TOS}>
      利用規約
    </LinkButton>
  );
  const PrivacyLink = (
    <LinkButton color={BASICCOLORS.SECONDARY} to={INFOROUTE.PRIVACY}>
      プライバシーポリシー
    </LinkButton>
  );

  return (
    <Layout currentUser={currentUser} width={SIZE.LARGE}>
      <Padding top={CLEAR.MEDIUM} bottom={CLEAR.MEDIUM}>
        <Sign title={SignUpText.SignUpTitle}>
          <Form status={status} />
          <Padding top={CLEAR.SMALL} bottom={CLEAR.SMALL}>
            <div>
              ご利用前に、{TosLink}及び{PrivacyLink}を御覧ください。
            </div>
          </Padding>
          <Padding top={CLEAR.SMALL} bottom={CLEAR.TINY}>
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
