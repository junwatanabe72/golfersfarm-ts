import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import DropDownMenu from './DropDownMenu';
import ComponentFontAwesomeIcon from '../../atoms/FontAwesomeIcon';
import { ICOLOR } from "../../../utils/constant/color"
import { HEADERMENUZTYPE } from "../../../utils/constant/text/header/text";

interface Props extends ICOLOR,HEADERMENUZTYPE{
  workModal: ()=> void,
  modalIsOpen: boolean,
};

const Container = styled.div`
  display: inline-block;
  margin: 0 16px 0 auto;
  cursor: pointer;
`;

const PositionAbsolute = styled.div<{ modalIsOpen: boolean }>`
  position: absolute;
  margin-top: 16px;
  top: 40px;
  right: 16px;
  border-radius: 2px;
  background-color: white;
  box-shadow: rgba(51, 51, 51, 0.15) 1px 1px 4px 1px;
  display: ${(props) => (props.modalIsOpen ? '' : 'none')};
`;

const HeaderMenu: React.FC<Props> =({ modalIsOpen, workModal,color,head,tail }) => {
  const modalRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.addEventListener('click', handleClickEvent);
    return function cleanup() {
      document.removeEventListener('click', handleClickEvent);
    };
  });

  const handleClickEvent = (e: MouseEvent) : void => {
    if (modalIsOpen === false) {
      return;
    }
    if (modalRef && modalRef.current && !modalRef.current.contains(e.target as Node)) {
      workModal();
      return 
    }
  };

  return (
   <Container ref={modalRef} onClick={workModal}>
      <ComponentFontAwesomeIcon head={head} tail={tail} color={color} />
      <PositionAbsolute modalIsOpen={modalIsOpen}>
        <DropDownMenu modalIsOpen={modalIsOpen} color={color}/>
      </PositionAbsolute> 
    </Container >
  );
}

export default HeaderMenu;

