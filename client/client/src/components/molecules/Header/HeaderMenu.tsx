// import React, { useRef, useEffect } from 'react';
// import styled from 'styled-components';
// import DropDownMenu from './DropDownMenu';
// import ComponentFontAwesomeIcon from '../../atoms/FontAwesomeIcon';

// const Container = styled.div`
//   display: inline-block;
//   margin: 0 16px 0 auto;
//   cursor: pointer;
// `;
// const PositionAbsolute = styled.div`
//   position: absolute;
//   margin-top: 16px;
//   top: 40px;
//   right: 16px;
//   border-radius: 2px;
//   background-color: white;
//   box-shadow: rgba(51, 51, 51, 0.15) 1px 1px 4px 1px;
//   display: ${(props) => (props.modalIsOpen ? '' : 'none')};
// `;

// function HeaderMenu({ modalIsOpen, workModal }) {
//   const modalRef = useRef(null);

//   useEffect(() => {
//     document.addEventListener('click', handleClickEvent);
//     return function cleanup() {
//       document.removeEventListener('click', handleClickEvent);
//     };
//   });

//   const handleClickEvent = (e) => {
//     if (modalIsOpen === false) {
//       return;
//     }
//     if (modalRef && modalRef.current && !modalRef.current.contains(e.target)) {
//       workModal();
//     }
//   };

//   return (
//     <Container ref={modalRef} onClick={workModal}>
//       <ComponentFontAwesomeIcon head={'fas'} tail={'bars'} />
//       <PositionAbsolute modalIsOpen={modalIsOpen}>
//         <DropDownMenu />
//       </PositionAbsolute>
//     </Container>
//   );
// }

// export default HeaderMenu;
