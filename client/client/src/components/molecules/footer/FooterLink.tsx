import React, { useState } from 'react';
import styled from 'styled-components';
import LinkButton from '../../atoms/LinkButton';
import { ICOLOR } from "../../../utils/constant/color";
import { ROUTE,INFOROUTE } from "../../../utils/constant/route";
import { Padding } from '../../../utils/styled/styledSpace';
import { CLEAR } from "../../../utils/constant/number";

interface Props extends ICOLOR {
};

const num = 1;
const addRoute = { USER: `/users/${num}`, EDIT: `/users/${num}/edit`, LOGOUT: "auth/logout" }
const { TOP, USERS } = ROUTE
const loginRoute = { TOP, USERS, ...addRoute }

const DisplayFooterLink = styled.ul`
    display: flex;
    cursor: pointer;
  `;
const LiPadding = Padding.withComponent('li')

const FooterLink: React.FC<Props> = ({ color }) => {
  const [routeTest, setTest] = useState<boolean>(false);
  const workModal = () => {
    setTest(!routeTest);
  };

  const infoMenu = Object.entries(INFOROUTE).map((route) => {
    return (
      <LiPadding all={CLEAR.TINY}>
        <LinkButton to={route[1]} color={color} >
          {route[0]}
        </LinkButton>
      </LiPadding>
    );
  });

  const baseMenu = Object.entries(ROUTE).map((route) => {
    return (
      <LiPadding all={CLEAR.TINY}>
        <LinkButton to={route[1]} color={color} >
          {route[0]}
        </LinkButton>
      </LiPadding>
    );
  });

  const loginMenu = Object.entries(loginRoute).map((route) => {
    return (
      <LiPadding all={CLEAR.TINY}>
        <LinkButton to={route[1]} color={color} >
          {route[0]}
        </LinkButton>
      </LiPadding>
    );
  });
  const menu = routeTest ? loginMenu : baseMenu;

  return (
    <>
      <DisplayFooterLink>
        {infoMenu}
      </DisplayFooterLink>
      <DisplayFooterLink>
        {menu}
      </DisplayFooterLink>
    </>
  );
}

export default FooterLink;