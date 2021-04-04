import React, { useState } from 'react';
import { Button } from '../../../Components/Button';
import Modal from './Modal';

const AddColorChip = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Button tertiary onClick={openModal}>
        추가
      </Button>
      <Modal isOpen={isOpen} openModal={openModal} />
    </>
  );
};

export default AddColorChip;
