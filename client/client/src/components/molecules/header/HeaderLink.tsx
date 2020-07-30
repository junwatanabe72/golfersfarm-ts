import React, { useState } from 'react';
import styled from 'styled-components';
import LinkButton from '../../atoms/LinkButton';
import { COLORTYPES } from "../../../utils/constant/color";
import { ROUTE } from "../../../utils/constant/route";
const num = 1;
// logout,edit,show
const addRoute = {USER: `/users/${num}`, EDIT: `/users/${num}/edit`, LOGOUT: "auth/logout"}

const {TOP,USERS} = ROUTE
const loginRoute = { TOP, USERS, ...addRoute}
interface Props {
  fontColor: COLORTYPES,
};

const StyledList = styled.li`
  margin: 0 16px 0 auto;
`;

const HeaderLink: React.FC<Props> = ({fontColor}) => {
  const [modalIsOpen, setModal] = useState<boolean>(false);
  const workModal = () => {
    setModal(!modalIsOpen);
  };

  const baseMenu = Object.entries(ROUTE).map((route) => { 
    return (
    <StyledList>
      <LinkButton to={route[1]} color={fontColor} >
        {route[0]}
      </LinkButton>
    </StyledList>
    );
  }); 

  const loginMenu = Object.entries(loginRoute).map((route) => {
    return (
      <StyledList>
        <LinkButton to={route[1]} color={fontColor} >
          {route[0]}
        </LinkButton>
      </StyledList>
    );
  }); 
  const menu = modalIsOpen ? loginMenu : baseMenu;
  return (
      <>
      <div onClick={() => {workModal()}}>click</div>
        {menu}
      </>
  );
}

export default HeaderLink;