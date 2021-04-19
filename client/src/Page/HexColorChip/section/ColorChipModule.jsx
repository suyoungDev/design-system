import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { CgClose, CgOptions } from 'react-icons/cg';

import { Button } from '../../../Components/Button';
import ColorBox from './ColorBox';
import { colorChipListStore } from '../../../Store/ColorListStore';
import { openModalStore } from '../../../Store/ModalStore';
import useContrast from '../../../Hook/useContrast';

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
  const { getColor, getBorderColor } = useContrast();
  const buttonColor = getColor(item.hexId);
  const borderColor = getBorderColor(item.hexId);

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
