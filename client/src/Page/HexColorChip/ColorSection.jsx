import React, { Suspense } from 'react';

import { Wrapper } from '../../Components/Wrapper';
import Modal from '../../Components/Modal/Modal';
import Head from '../../Components/Head';
import List from './section/List';
import SubmitHex from './section/SubmitHex';
import { openModalStore } from '../../Store/ModalStore';
import useIsOpen from '../../Hook/useIsOpen';
const ViewCode = React.lazy(() => import('../../Components/ViewCode'));

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
      <Suspense fallback={<div>...loading..</div>}>
        {isOpen && <ViewCode />}
      </Suspense>
      <List />
    </Wrapper>
  );
};

export default ColorSection;
