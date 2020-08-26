import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../actions';
import Layout from '../templates/Layout';
import Sign from '../molecules/Sign';
import LinkButton from '../atoms/LinkButton';
import Logo from '../atoms/Logo';
import { Padding } from '../../utils/styled/styledSpace';
import { BASICCOLORS } from '../../utils/constant/color';
import { CLEAR } from '../../utils/constant/number';
import { ROUTE } from '../../utils/constant/route';
import { LogoutText } from '../../utils/constant/text/body/sign/text';
import { media } from '../../utils/styled/styledRdesign';
import { PartialUserObjectType } from '../../utils/constant/storeType';

interface Props {
  currentUser: PartialUserObjectType;
}
const Container = styled.div`
  width: 60vw;
  max-width: 1200px;
  margin: 0vw auto;
  text-align: center;
  ${media.tablet`
    width: 90vw;
      `}
`;

const LogOut: React.FC<Props> = ({ currentUser }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deleteUser());
  }, []);

  return (
    <Layout currentUser={currentUser}>
      <Container>
        <Padding top={CLEAR.MEDIUM} bottom={CLEAR.MEDIUM}>
          <Sign>
            <Padding top={CLEAR.SMALL} bottom={CLEAR.TINY}>
              <Logo color={BASICCOLORS.BASICLIGHT}>{LogoutText.LogoutMessage}</Logo>
              <Padding top={CLEAR.SMALL} bottom={CLEAR.TINY}></Padding>
              <LinkButton to={ROUTE.LOGIN}>{LogoutText.LogoutLoginUser}</LinkButton>
            </Padding>
          </Sign>
        </Padding>
      </Container>
    </Layout>
  );
};

export default LogOut;
