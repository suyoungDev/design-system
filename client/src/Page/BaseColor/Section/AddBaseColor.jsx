import React, { useState } from 'react';
import { Button } from '../../../Components/Button';
import Modal from '../../../Components/Modal/Modal';
import AddBaseColorContent from './AddBaseColorContent';
// 모달추가해서 왼쪽은 베이스 컬러 리스트 뜨고
// 오른쪽은 all colors 리스트
// 오른쪽 아래에 추가하기
// 수정도 마찬가지로
// 모달 재활용해야겠구먼 🤔

const AddBaseColor = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button tertiary onClick={openModal}>
        추가
      </Button>
      <Modal
        isOpen={isOpen}
        openModal={openModal}
        content={<AddBaseColorContent openModal={openModal} />}
      />
    </div>
  );
};

export default AddBaseColor;
