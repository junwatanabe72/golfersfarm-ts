import React, { useState } from 'react';
import styled from 'styled-components';
// import HeaderTitle from '../molecules/Header/HeaderTitle';
// import HeaderLink from '../molecules/Header/HeaderLink';
// import HeaderMenu from '../molecules/Header/HeaderMenu';

//style
const Container = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  background-color: #333333;
  color: white;
`;

function Header(){
  const [modalIsOpen, setModal] = useState<Boolean>(false);

  const workModal = () => {
    setModal(!modalIsOpen);
  };

  return (
    <Container>
      {/* <HeaderTitle />
      <HeaderLink />
      <HeaderMenu workModal={workModal} modalIsOpen={modalIsOpen} /> */}
    </Container>
  );
}

export default Header;
