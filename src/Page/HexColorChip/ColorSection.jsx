import React, { Suspense, useCallback, useRef, useLayoutEffect } from 'react';
import chroma from 'chroma-js';

import { Wrapper } from '../../Components/Wrapper';
import Head from '../../Components/Head';
import List from './section/List';

import { openModalStore } from '../../Store/ModalStore';
import { colorChipListStore } from '../../Store/ColorListStore';
import useIsOpen from '../../Hook/useIsOpen';
import Modal from '../../Components/Modal/Modal';
const ViewCode = React.lazy(() => import('../../Components/ViewCode'));
const SubmitHex = React.lazy(() => import('./section/SubmitHex'));

const ColorSection = () => {
  const [isOpen, setIsOpen] = useIsOpen();
  const number = useRef(0);

  useLayoutEffect(() => {
    colorChipListStore.loadList();
  }, []);

  const openModal = useCallback(() => {
    openModalStore.setModalOpen(true);
  }, []);

  const addRandom = useCallback(() => {
    const hexId = chroma.random().hex();
    colorChipListStore.addColorChip({
      hexId,
      label: `random${number.current}`,
    });
    number.current += 1;
  }, []);

  return (
    <Wrapper id='palette'>
      <Modal children={<SubmitHex />} />
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
