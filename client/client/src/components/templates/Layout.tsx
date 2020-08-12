import React from 'react';
import styled from 'styled-components';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import { BASICCOLORS } from "../../utils/constant/color"
import { ROUTE,INFOROUTE } from '../../utils/constant/route';
import { media } from '../../utils/styled/styledRdesign';

interface Props  {
  login: boolean,
};

//style
const Container = styled.div`
  background-color: ${BASICCOLORS.WHITE};
`;

//仮の数値
const num = 1;
const addRoute = { USER: `/users/${num}`, EDIT: `/users/${num}/edit`, LOGOUT: "auth/logout" }
const { TOP, USERS } = ROUTE

const Layout: React.FC<Props> = ({login,children}) => {
  
  const route =(login) ? { TOP, USERS, ...addRoute } : ROUTE

  return (
    <Container>
      <Header  color={BASICCOLORS.WHITELIGHT} route={route}/>
          {children}
      <Footer  color={BASICCOLORS.WHITELIGHT} route={route} infoRoute={INFOROUTE}/>
    </Container>
  );
}

export default Layout;