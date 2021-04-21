import React, { useState, useEffect, useCallback } from 'react';
import { ChromePicker } from 'react-color';

import FormInput from '../../../Components/FormInput/FormInput';
import { colorChipListStore } from '../../../Store/ColorListStore';
import { ModalSubmitButton } from '../../../Components/Button';
import { Form } from '../../../Components/Form';
import { Column } from '../../../Components/Column';
import { Row } from '../../../Components/Row';
import { ColorCircle } from '../../../Components/ColorCircle';
import { openModalStore } from '../../../Store/ModalStore';
import useContrast from '../../../Hook/useContrast';

const SubmitHex = () => {
  const [label, setLabel] = useState('');
  const [hexId, setHexId] = useState('#F2F3F5');
  const { payload } = openModalStore;
  const { getColor } = useContrast();
  const textColor = getColor(hexId);

  const handleColor = useCallback((color) => {
    setHexId(color.hex);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (payload) {
        const id = payload.id;
        colorChipListStore.modifyColorChip({ id, label, hexId });
      }
      if (!payload) colorChipListStore.addColorChip({ label, hexId });
      openModalStore.setModalOpen(false);
    },
    [hexId, label, payload]
  );

  useEffect(() => {
    if (payload) {
      setHexId(payload.hexId);
      setLabel(payload.label);
    }
  }, [payload]);

  return (
    <Column className='center'>
      <ChromePicker color={hexId} onChange={handleColor} disableAlpha={true} />
      <Form onSubmit={handleSubmit}>
        <Row className='al_ct jc_sb mt-5 mb-20'>
          <ColorCircle big hexId={hexId} />
          <FormInput
            modal
            name='label'
            id='label'
            type='text'
            value={label}
            handleChange={(e) => setLabel(e.target.value)}
            label='label'
            required
          />
        </Row>
        <ModalSubmitButton
          type='submit'
          buttonColor={hexId}
          textColor={textColor}
        >
          {payload ? '수정' : '추가'}
        </ModalSubmitButton>
      </Form>
    </Column>
  );
};

export default SubmitHex;
