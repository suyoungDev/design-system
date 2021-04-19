import React, { Suspense, useCallback, useRef } from 'react';
import chroma from 'chroma-js';

import { Wrapper } from '../../Components/Wrapper';
import Modal from '../../Components/Modal/Modal';
import Head from '../../Components/Head';
import List from './section/List';
import SubmitHex from './section/SubmitHex';
import { openModalStore } from '../../Store/ModalStore';
import { colorChipListStore } from '../../Store/ColorListStore';
import useIsOpen from '../../Hook/useIsOpen';
const ViewCode = React.lazy(() => import('../../Components/ViewCode'));

const ColorSection = () => {
  const [isOpen, setIsOpen] = useIsOpen();
  const number = useRef(0);

  const openModal = useCallback(() => {
    openModalStore.setModalOpen(true);
  }, []);

  const addRandom = useCallback(() => {
    const hexId = chroma.random();
    colorChipListStore.addColorChip({
      hexId,
      label: `random${number.current}`,
    });
    number.current += 1;
  }, []);

  return (
    <Wrapper id='allcolors'>
      <Modal>
        <SubmitHex />
      </Modal>
      <Head
        title='palette'
        addNew={openModal}
        viewCode={setIsOpen}
        addRandom={addRandom}
      />
      <Suspense fallback={<div>...loading..</div>}>
        {isOpen && <ViewCode />}
      </Suspense>
      <List />
    </Wrapper>
  );
};

export default ColorSection;
