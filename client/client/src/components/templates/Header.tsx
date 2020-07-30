import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderTitle from '../molecules/header/HeaderTitle';
import HeaderLink from '../molecules/header/HeaderLink';
import HeaderMenu from '../molecules/header/HeaderMenu';
import { BASICCOLORS,COLORTYPES } from "../../utils/constant/color"
import { media } from '../../utils/styled/styledRdesign';

interface Props {
  headerColor: COLORTYPES,
};

//style
const BackgroundColor = styled.div<Props>`
  background-color: ${(props) => props.headerColor}; 
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

const Header: React.FC<Props> = ({ headerColor}) => {
  const [modalIsOpen, setModal] = useState<boolean>(false);

  const workModal = () => {
    setModal(!modalIsOpen);
  };
  const fontColor = (headerColor === BASICCOLORS.WHITE) ? BASICCOLORS.PRIMARY : BASICCOLORS.SECONDARY;
  return (
    <BackgroundColor headerColor={headerColor}>
      <Container>
        <HeaderTitle fontColor={fontColor}/>
        <DisplayHeaderLink>
          <HeaderLink fontColor={fontColor} />
        </DisplayHeaderLink>
        <DisplayHeaderMenu>
          <HeaderMenu workModal={workModal} modalIsOpen={modalIsOpen} fontColor={fontColor}/>
        </DisplayHeaderMenu>
      </Container>
    </BackgroundColor>
  );
}

export default Header;