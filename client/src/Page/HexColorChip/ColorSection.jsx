import React from 'react';

import { Wrapper } from '../../Components/Wrapper';
import Modal from '../../Components/Modal/Modal';
import Head from '../../Components/Head';
import List from './section/List';
import SubmitHex from './section/SubmitHex';
import { openModalStore } from '../../Store/ModalStore';
import ViewCode from '../../Components/ViewCode';
import useIsOpen from '../../Hook/useIsOpen';

const ColorSection = () => {
  const openModal = () => {
    openModalStore.setModalOpen(true);
  };

  const [isOpen, setIsOpen] = useIsOpen();

  return (
    <Wrapper>
      <Modal>
        <SubmitHex />
      </Modal>
      <Head title='All Colors' addNew={openModal} viewCode={setIsOpen} />
      <ViewCode isOpen={isOpen} />
      <List />
    </Wrapper>
  );
};

export default ColorSection;
