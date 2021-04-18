import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { CgClose, CgOptions } from 'react-icons/cg';
import chroma from 'chroma-js';

import ColorBox from './ColorBox';
import { colorChipListStore } from '../../../Store/ColorListStore';
import { Button } from '../../../Components/Button';
import { openModalStore } from '../../../Store/ModalStore';

const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  top: 0px;
  z-index: 0;
`;

const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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
        <Button
          colorChip
          color={buttonColor}
          onClick={() => openModalStore.setModalOpen(true, item)}
        >
          <CgOptions />
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
      </ButtonContainer>
      <ColorBox
        item={item}
        borderColor={borderColor}
        buttonColor={buttonColor}
      />
    </Item>
  );
});

export default Chip;
