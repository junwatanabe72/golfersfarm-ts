import React from 'react';
import styled from 'styled-components';
import LinkButton from '../../atoms/LinkButton';
import { ROUTE } from "../../../utils/constant/route";
import { COLORTYPES } from "../../../utils/constant/color"

interface HeaderMenuProps {
  modalIsOpen: boolean,
  fontColor: COLORTYPES,
};

const num = 1;
const addRoute = { USER: `/users/${num}`, EDIT: `/users/${num}/edit`, LOGOUT: "auth/logout" }

const { TOP, USERS } = ROUTE
const loginRoute = { TOP, USERS, ...addRoute }

const Container = styled.ul``;

// const StyledFirstList = styled.li`
//   width: 180px;
//   margin-top: 4px;
//   }
// `;
const StyledList = styled.li`
  width: 180px;
  }
`;
// const StyledLastList = styled.li`
//   width: 180px;
//   margin-bottom: 4px;
//   }
// `;


const DropDownMenu: React.FC<HeaderMenuProps>=({modalIsOpen,fontColor})=>{
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
  const menu = !modalIsOpen ? loginMenu : baseMenu;
  return (
    <Container>
      {menu}
    </Container>
  );
}

export default DropDownMenu;
