import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';

import ColorBox from './ColorBox';
import { colorChipListStore } from '../../../Store/ColorListStore';
import { Row } from '../../../Components/Row';
import { Button } from '../../../Components/Button';
import Modal from '../../../Components/Modal/Modal';
import SubmitHex from './SubmitHex';

const ButtonContainer = styled.div`
  position: absolute;
  top: 8px;
  width: 100%;
  z-index: 1;
`;

const Item = styled.div`
  position: relative;
  z-index: 0;
`;

// 드랍다운 메뉴 버튼 만들어서 '수정',
// '타이포컬러로 추가', 'accent로 추가' 이런거 있음 좋을듯?
const Chip = observer(({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const changeColor = (hexId, title) => {
    if (hexId && title) item.fix(hexId, title);
  };

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const ColorPicker = (
    <SubmitHex openModal={openModal} item={item} changeColor={changeColor} />
  );

  return (
    <Item>
      <ButtonContainer>
        <Row className='jc_sb'>
          <Button basic onClick={openModal}>
            수정
          </Button>
          <Modal isOpen={isOpen} openModal={openModal} content={ColorPicker} />
          <Button
            basic
            onClick={() => {
              colorChipListStore.deleteColorChip(item.id);
            }}
          >
            <CgClose />
          </Button>
        </Row>
      </ButtonContainer>
      <ColorBox item={item} />
    </Item>
  );
});

export default Chip;
