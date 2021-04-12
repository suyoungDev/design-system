import React, { useState, useEffect } from 'react';
import FormInput from '../../../Components/FormInput/FormInput';
import { colorChipListStore } from '../../../Store/ColorListStore';
import { Button } from '../../../Components/Button';
import { Form } from '../../../Components/Form';
import { ChromePicker } from 'react-color';
import { Row } from '../../../Components/Row';
import { ColorCircle } from '../../../Components/ColorCircle';
import { openModalStore } from '../../../Store/ModalStore';

const SubmitHex = () => {
  const [title, setTitle] = useState('');
  const [hexId, setHexId] = useState('#E1E1E1');

  const payload = openModalStore.payload;

  const handleColor = (color) => {
    setHexId(color.hex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (payload) {
      const id = payload.id;
      colorChipListStore.modifyColorChip({ id, title, hexId });
    } else colorChipListStore.addColorChip({ title, hexId });
    openModalStore.setModalOpen(false);
  };

  useEffect(() => {
    if (payload) {
      setHexId(payload.hexId);
      setTitle(payload.title);
    }
  }, [payload]);

  return (
    <>
      <ChromePicker color={hexId} onChange={handleColor} disableAlpha={true} />
      <Form onSubmit={handleSubmit}>
        <Row>
          <ColorCircle big hexId={hexId} />
          <FormInput
            name='title'
            id='title'
            type='text'
            value={title}
            handleChange={(e) => setTitle(e.target.value)}
            label='title'
            required
          />
        </Row>
        <Button primary hex type='submit'>
          {payload ? '수정' : '추가'}
        </Button>
      </Form>
    </>
  );
};

export default SubmitHex;
