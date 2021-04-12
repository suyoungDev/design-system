import React, { useState, useEffect } from 'react';
import FormInput from '../../../Components/FormInput/FormInput';
import { colorChipListStore } from '../../../Store/ColorListStore';
import { ModalSubmitButton } from '../../../Components/Button';
import { Form } from '../../../Components/Form';
import { ChromePicker } from 'react-color';
import { Column } from '../../../Components/Column';
import { Row } from '../../../Components/Row';
import { ColorCircle } from '../../../Components/ColorCircle';
import { openModalStore } from '../../../Store/ModalStore';
import styled from 'styled-components';

const Container = styled.div``;

const SubmitHex = () => {
  const [label, setLabel] = useState('');
  const [hexId, setHexId] = useState('#E1E1E1');

  const payload = openModalStore.payload;

  const handleColor = (color) => {
    setHexId(color.hex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (payload) {
      const id = payload.id;
      colorChipListStore.modifyColorChip({ id, label, hexId });
    } else colorChipListStore.addColorChip({ label, hexId });
    openModalStore.setModalOpen(false);
  };

  useEffect(() => {
    if (payload) {
      setHexId(payload.hexId);
      setLabel(payload.label);
    }
  }, [payload]);

  return (
    <Column className='center'>
      <Container>
        <ChromePicker
          color={hexId}
          onChange={handleColor}
          disableAlpha={true}
        />
      </Container>
      <Form onSubmit={handleSubmit}>
        <Row className='al_ct mt-5 mb-20'>
          <ColorCircle big hexId={hexId} />
          <FormInput
            name='label'
            id='label'
            type='text'
            value={label}
            handleChange={(e) => setLabel(e.target.value)}
            label='label'
            required
          />
        </Row>
        <ModalSubmitButton type='submit' buttonColor={hexId}>
          {payload ? '수정' : '추가'}
        </ModalSubmitButton>
      </Form>
    </Column>
  );
};

export default SubmitHex;
