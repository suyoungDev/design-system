import React, { useState } from 'react';
import { Button } from '../../../Components/Button';
import Modal from '../../../Components/Modal/Modal';
import SubmitHex from './SubmitHex';

const AddColorChip = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen((prev) => !prev);
  };

  const ColorPicker = <SubmitHex openModal={openModal} />;

  return (
    <>
      <Button onClick={openModal}>추가</Button>
      <Modal isOpen={isOpen} openModal={openModal} content={ColorPicker} />
    </>
  );
};

export default AddColorChip;
