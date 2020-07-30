import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import DropDownMenu from './DropDownMenu';
import ComponentFontAwesomeIcon from '../../atoms/FontAwesomeIcon';
import { COLORTYPES } from "../../../utils/constant/color"

interface HeaderMenuProps {
  workModal: ()=> void,
  modalIsOpen: boolean,
  fontColor: COLORTYPES,
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

const HeaderMenu: React.FC<HeaderMenuProps> =({ modalIsOpen, workModal,fontColor }) => {
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
      <ComponentFontAwesomeIcon head={'fas'} tail={'bars'} fontColor={fontColor} />
      <PositionAbsolute modalIsOpen={modalIsOpen}>
        <DropDownMenu modalIsOpen={modalIsOpen} fontColor={fontColor}/>
      </PositionAbsolute> 
    </Container >
  );
}

export default HeaderMenu;

