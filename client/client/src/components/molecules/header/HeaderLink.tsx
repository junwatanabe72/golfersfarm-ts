import React, { useState } from 'react';
import styled from 'styled-components';
import LinkButton from '../../atoms/LinkButton';
import { ICOLOR } from "../../../utils/constant/color";
import { ROUTE } from "../../../utils/constant/route";
const num = 1;
// logout,edit,show
const addRoute = {USER: `/users/${num}`, EDIT: `/users/${num}/edit`, LOGOUT: "auth/logout"}

const {TOP,USERS} = ROUTE
const loginRoute = { TOP, USERS, ...addRoute}

interface Props extends ICOLOR {
};

const StyledList = styled.li`
  margin: 0 16px 0 auto;
`;

const HeaderLink: React.FC<Props> = ({color}) => {
  const [routeTest, setTest] = useState<boolean>(false);
  const workModal = () => {
    setTest(!routeTest);
  };

  const baseMenu = Object.entries(ROUTE).map((route) => { 
    return (
    <StyledList>
      <LinkButton to={route[1]} color={color} >
        {route[0]}
      </LinkButton>
    </StyledList>
    );
  }); 

  const loginMenu = Object.entries(loginRoute).map((route) => {
    return (
      <StyledList>
        <LinkButton to={route[1]} color={color} >
          {route[0]}
        </LinkButton>
      </StyledList>
    );
  }); 
  const menu = routeTest ? loginMenu : baseMenu;
  return (
      <>
      <div onClick={() => {workModal()}}>click</div>
        {menu}
      </>
  );
}

export default HeaderLink;