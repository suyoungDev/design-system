import React, { useRef, useCallback, useEffect } from 'react';
import { CgClose } from 'react-icons/cg';
import { Background, ModalWrapper } from './Modal.styles';
import { ModalButton } from '../Button';
import { openModalStore } from '../../Store/ModalStore';
import { observer } from 'mobx-react-lite';

const Modal = observer(({ children }) => {
  const isOpen = openModalStore.isModalOpen;
  const modalRef = useRef();
  const closeModal = useCallback(() => {
    openModalStore.setModalOpen(false);
  }, []);

  const closeModalOutside = useCallback(
    (e) => {
      if (modalRef.current === e.target) closeModal();
    },
    [closeModal]
  );

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    },
    [isOpen, closeModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {isOpen && (
        <Background ref={modalRef} onClick={closeModalOutside}>
          <ModalWrapper>
            <ModalButton onClick={closeModal}>
              <CgClose />
            </ModalButton>
            {children}
          </ModalWrapper>
        </Background>
      )}
    </>
  );
});

export default Modal;
