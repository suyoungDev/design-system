import React, { useRef, useCallback, useEffect } from 'react';
import { CgClose } from 'react-icons/cg';
import styled from 'styled-components';
import SubmitHex from './SubmitHex';
import { Background, ModalWrapper } from './Modal.styles';

const CloseModalButton = styled(CgClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  padding: 0;
  z-index: 100;

  :hover {
    opacity: 0.7;
  }
`;

const Modal = ({ isOpen, openModal }) => {
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
          <ModalWrapper isOpen={isOpen}>
            <CloseModalButton aria-label='Close Modal' onClick={openModal} />
            <SubmitHex openModal={openModal} />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
