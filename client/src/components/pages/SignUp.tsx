import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, Route } from 'react-router-dom';
import Button from '../atoms/Button';
import LinkButton from '../atoms/LinkButton';
import Input from '../atoms/Input';
import Layout from '../templates/Layout';
import Sign from '../molecules/Sign';
import { SignUpText } from '../../utils/constant/text/body/sign/text';
import { Padding, ALIGNITEMS } from '../../utils/styled/styledSpace';
import { ROUTE, ROUTETYPE } from '../../utils/constant/route';
import { BASICCOLORS, COLORTYPES } from '../../utils/constant/color';
import { FONTSIZE, CLEAR } from '../../utils/constant/number';
import { media } from '../../utils/styled/styledRdesign';
import { PartialIUserData, UserData } from '../../actions';

interface Props {
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

const SignUpInputItems = SignUpText.SignUpItems.map((item: string) => {
  return (
    <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
      <Input placeHolder={item} />
    </Padding>
  );
});

const SignUp: React.FC<Props> = ({ currentUser }) => {
  return (
    <Layout currentUser={currentUser}>
      <Container>
        <Padding top={CLEAR.MEDIUM} bottom={CLEAR.MEDIUM}>
          <Sign title={SignUpText.SignUpTitle}>
            {SignUpInputItems}
            <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
              <div>{SignUpText.SignUpCheck}</div>
            </Padding>
            <Padding top={CLEAR.TINY} bottom={CLEAR.TINY}>
              <Button pWidth={CLEAR.LARGE}>{SignUpText.SignUpTitle}</Button>
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
