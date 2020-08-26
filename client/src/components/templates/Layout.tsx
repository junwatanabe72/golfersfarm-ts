import React from 'react';
import styled from 'styled-components';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import { BASICCOLORS } from '../../utils/constant/color';
import { ROUTE, INFOROUTE } from '../../utils/constant/route';
import { PartialUserObjectType } from '../../utils/constant/storeType';
interface Props {
  currentUser: PartialUserObjectType;
}

//style
const Container = styled.div`
  background-color: ${BASICCOLORS.WHITE};
`;

//仮の数値

const Layout: React.FC<Props> = ({ currentUser, children }) => {
  const isLogin: boolean = 0 !== Object.keys(currentUser).length;
  const { id } = currentUser;
  const addRoute = { USER: `/users/${id}`, EDIT: `/users/${id}/edit`, LOGOUT: '/logout' };
  const { TOP, USERS } = ROUTE;
  const route = isLogin ? { TOP, USERS, ...addRoute } : ROUTE;

  return (
    <Container>
      <Header route={route} />
      {children}
      <Footer route={route} infoRoute={INFOROUTE} />
    </Container>
  );
};

export default Layout;
