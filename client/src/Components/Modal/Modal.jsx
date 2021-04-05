import React, { useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import { CgClose } from 'react-icons/cg';
import { Background, ModalWrapper } from './Modal.styles';

const CloseModalButton = styled(CgClose)`
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 0;
  z-index: 100;

  :hover {
    opacity: 0.7;
  }
`;

const Modal = ({ isOpen, openModal, content, item, changeColor, ...props }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) openModal();
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && isOpen) {
        openModal();
      }
    },
    // eslint-disable-next-line
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {isOpen ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper isOpen={isOpen} {...props}>
            <CloseModalButton aria-label='Close Modal' onClick={openModal} />
            {content}
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
