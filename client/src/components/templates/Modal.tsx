import React from 'react';
import Modal from 'react-modal';

interface Props {
  show: boolean;
  component: JSX.Element;
}

Modal.setAppElement('#root');

const ModalWindow: React.FC<Props> = ({ show, component }) => {
  return (
    <Modal
      isOpen={show}
      style={{
        content: {
          maxWidth: '800px',
          minWidth: '50px',
          margin: '0 auto',
        },
      }}
    >
      {component}
    </Modal>
  );
};

export default ModalWindow;
