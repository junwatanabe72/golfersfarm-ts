import React, { useState } from 'react';
import styled from 'styled-components';
import SimpleModal from '../molecules/SimpleModal';
import LinkList from '../molecules/LinkList';
import Toggle from '../molecules/Toggle';
import LinkButton from '../atoms/LinkButton';
import { FONTSIZE, CLEAR } from '../../utils/constant/number';
import { BASICCOLORS, ICOLOR } from '../../utils/constant/color';
import { HeaderText } from '../../utils/constant/text/header/text';
import { FONTAWEICON } from '../../utils/constant/text/text';
interface Props extends ICOLOR {
  route: any;
}

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

const Header: React.FC<Props> = ({ color, route }) => {
  const [modalIsOpen, setModal] = useState<boolean>(false);
  const workModal = () => {
    setModal(!modalIsOpen);
  };
  const fontColor = color === BASICCOLORS.WHITE ? BASICCOLORS.PRIMARY : BASICCOLORS.SECONDARY;
  const linkList = <LinkList color={fontColor} route={route} clear={CLEAR.TINY} />;
  const modalInLinks = (
    <SimpleModal
      workModal={workModal}
      modalIsOpen={modalIsOpen}
      color={fontColor}
      list={linkList}
      head={FONTAWEICON.bar.head}
      tail={FONTAWEICON.bar.tail}
    />
  );

  return (
    <BackgroundColor color={color}>
      <Container>
        <LinkButton to={route.TOP} fontSize={FONTSIZE.XXLARGE} color={fontColor}>
          {HeaderText.HeaderTitleText.appTitle}
        </LinkButton>
        <Toggle linkList={linkList} modalInLinks={modalInLinks} />
      </Container>
    </BackgroundColor>
  );
};

export default Header;