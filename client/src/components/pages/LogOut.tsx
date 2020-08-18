import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../../actions';
import Button from '../atoms/Button';
import LinkButton from '../atoms/LinkButton';
import Logo from '../atoms/Logo';
import Layout from '../templates/Layout';
import Sign from '../molecules/Sign';
import { Padding, ALIGNITEMS } from '../../utils/styled/styledSpace';
import { BASICCOLORS, ICOLOR } from '../../utils/constant/color';
import { FONTSIZE, CLEAR } from '../../utils/constant/number';
import { ROUTE, ROUTETYPE } from '../../utils/constant/route';
import { initialUser } from '../../utils/constant/text/body/user/text';
import { LogoutText } from '../../utils/constant/text/body/sign/text';
import { media } from '../../utils/styled/styledRdesign';
import { PartialIUserData } from '../../actions';

interface Props {
  currentUser: PartialIUserData;
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
          <Sign textAlign={ALIGNITEMS.CENTER} color={BASICCOLORS.WHITELIGHT} clear={CLEAR.SMALL}>
            <Padding top={CLEAR.SMALL} bottom={CLEAR.TINY}>
              <Logo color={BASICCOLORS.BASICLIGHT}>{LogoutText.LogoutMessage}</Logo>
              <Padding top={CLEAR.SMALL} bottom={CLEAR.TINY}></Padding>
              <LinkButton to={ROUTE.LOGIN} color={BASICCOLORS.PRIMARY}>
                {LogoutText.LogoutLoginUser}
              </LinkButton>
            </Padding>
          </Sign>
        </Padding>
      </Container>
    </Layout>
  );
};

export default LogOut;
