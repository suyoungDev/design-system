import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';
import chroma from 'chroma-js';

import ColorBox from './ColorBox';
import { colorChipListStore } from '../../../Store/ColorListStore';
import { Row } from '../../../Components/Row';
import { Button } from '../../../Components/Button';
import { openModalStore } from '../../../Store/ModalStore';

const ButtonContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 0;
`;

const Item = styled.div`
  margin: 0.3rem;
  position: relative;
  z-index: 0;
`;

const Chip = observer(({ item }) => {
  const buttonColor =
    item.hexId && chroma.contrast(item.hexId, 'white') > 2
      ? 'white'
      : '#212224';

  const borderColor =
    item.hexId && chroma.contrast(item.hexId, 'white') <= 1.15
      ? chroma(item.hexId).darken()
      : item.hexId;

  return (
    <Item>
      <ButtonContainer>
        <Row className='jc_sb'>
          <Button
            colorChip
            color={buttonColor}
            onClick={() => openModalStore.setModalOpen(true, item)}
          >
            수정
          </Button>
          <Button
            colorChip
            color={buttonColor}
            onClick={() => {
              colorChipListStore.deleteColorChip(item.id);
            }}
          >
            <CgClose />
          </Button>
        </Row>
      </ButtonContainer>
      <ColorBox item={item} borderColor={borderColor} />
    </Item>
  );
});

export default Chip;
