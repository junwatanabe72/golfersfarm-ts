import React from 'react';
import styled from 'styled-components';
import LinkButton from '../../atoms/LinkButton';
import { colorType } from "../../../utils/constant/color";
import { ROUTE } from "../../../utils/constant/route";

interface Props {
  fontColor: colorType,
};
const login = true;
const StyledList = styled.li`
  margin: 0 16px 0 auto;
`;

const HeaderLink: React.FC<Props> = ({fontColor}) => {

  const baseMenu = Object.entries(ROUTE).map((route) => { 
    return (
    <StyledList>
      <LinkButton to={route[1]} color={fontColor} >
        {route[0]}
      </LinkButton>
    </StyledList>
    );
  }); 

  const loginMenu = Object.entries(ROUTE).map((route) => {
    return (
      <StyledList>
        <LinkButton to={route[1]} color={fontColor} >
          {route[0]}
        </LinkButton>
      </StyledList>
    );
  }); 
  const menu = login ? loginMenu : baseMenu;
  return (
      <>
        {menu}
      </>
  );
}

export default HeaderLink;