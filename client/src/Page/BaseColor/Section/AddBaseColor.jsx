import React, { useState } from 'react';
import { Button } from '../../../Components/Button';
import Modal from '../../../Components/Modal/Modal';
import AddBaseColorContent from './AddBaseColorContent';

const AddBaseColor = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button onClick={openModal}>추가</Button>
      <Modal
        big
        isOpen={isOpen}
        openModal={openModal}
        content={<AddBaseColorContent openModal={openModal} />}
      />
    </div>
  );
};

export default AddBaseColor;
