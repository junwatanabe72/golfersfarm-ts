import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../actions';
import Layout from '../templates/Layout';
import Sign from '../molecules/Sign';
import LinkButton from '../atoms/LinkButton';
import Logo from '../atoms/Logo';
import { Padding } from '../../utils/styled/styledSpace';
import { BASICCOLORS } from '../../utils/constant/color';
import { CLEAR, SIZE } from '../../utils/constant/number';
import { ROUTE } from '../../utils/constant/route';
import { LogoutText } from '../../utils/constant/text/body/sign/text';
import { media } from '../../utils/styled/styledRdesign';

interface Props {
  currentUser: PartialUserObjectType;
}

const LogOut: React.FC<Props> = ({ currentUser }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutUser());
  }, []);

  return (
    <Layout currentUser={currentUser} width={SIZE.LARGE}>
      <Padding top={CLEAR.MEDIUM} bottom={CLEAR.MEDIUM}>
        <Sign>
          <Padding top={CLEAR.SMALL} bottom={CLEAR.TINY}>
            <Logo color={BASICCOLORS.BASICLIGHT}>{LogoutText.LogoutMessage}</Logo>
            <Padding top={CLEAR.SMALL} bottom={CLEAR.TINY}></Padding>
            <LinkButton to={ROUTE.LOGIN}>{LogoutText.LogoutLoginUser}</LinkButton>
          </Padding>
        </Sign>
      </Padding>
    </Layout>
  );
};

export default LogOut;
