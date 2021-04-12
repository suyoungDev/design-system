import React from 'react';
import { BiPlus } from 'react-icons/bi';

import { Button } from '../../../Components/Button';
import { openModalStore } from '../../../Store/ModalStore';

const AddColorChip = () => {
  const openModal = () => {
    openModalStore.setModalOpen(true);
  };

  return (
    <Button onClick={openModal}>
      <BiPlus />
    </Button>
  );
};

export default AddColorChip;
