import React from 'react';
import styled from 'styled-components';
import LinkButton from '../../atoms/LinkButton';
import { ROUTE } from "../../../utils/constant/route";
import { ICOLOR } from "../../../utils/constant/color"


interface Props extends ICOLOR {
  modalIsOpen: boolean,
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


const DropDownMenu: React.FC<Props>=({modalIsOpen,color})=>{
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
  const menu = !modalIsOpen ? loginMenu : baseMenu;
  return (
    <Container>
      {menu}
    </Container>
  );
}

export default DropDownMenu;
