import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderTitle from '../molecules/header/HeaderTitle';
import HeaderLink from '../molecules/header/HeaderLink';
import HeaderMenu from '../molecules/header/HeaderMenu';
import { BASICCOLORS,ICOLOR } from "../../utils/constant/color"
import { HeaderText } from "../../utils/constant/text/header/text"
import { media } from '../../utils/styled/styledRdesign';

interface Props extends ICOLOR{
  
};

//style
const BackgroundColor = styled.div<ICOLOR>`
  background-color: ${(props) => props.color}; 
`;

const Container = styled.div`
  display: flex;
  width: 90%;
  height: 64px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`;

const DisplayHeaderLink = styled.ul`
    display: flex;
    margin: 0 16px 0 auto;
    cursor: pointer;
      ${media.tablet`
        display: none;
      `}
  `;

const DisplayHeaderMenu = styled.div`
    display: none;
      ${media.tablet`
        display: inline-block;
        margin: 0 16px 0 auto;
        cursor: pointer;
      `}
`;

const Header: React.FC<ICOLOR> = ({ color}) => {
  const [modalIsOpen, setModal] = useState<boolean>(false);

  const workModal = () => {
    setModal(!modalIsOpen);
  };
  const fontColor = (color === BASICCOLORS.WHITE) ? BASICCOLORS.PRIMARY : BASICCOLORS.SECONDARY;
  return (
    <BackgroundColor color={color}>
      <Container>
        <HeaderTitle color={fontColor} appTitle={HeaderText.HeaderTitleText.appTitle}/>
        <DisplayHeaderLink>
          <HeaderLink color={fontColor} />
        </DisplayHeaderLink>
        <DisplayHeaderMenu>
          <HeaderMenu workModal={workModal} 
                      modalIsOpen={modalIsOpen} 
                      color={fontColor} 
                      head={HeaderText.HeaderMenuText.head}
                      tail={HeaderText.HeaderMenuText.tail}/>
        </DisplayHeaderMenu>
      </Container>
    </BackgroundColor>
  );
}

export default Header;