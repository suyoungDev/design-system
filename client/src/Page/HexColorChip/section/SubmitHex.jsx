import React, { useState, useEffect } from 'react';
import FormInput from '../../../Components/FormInput/FormInput';
import { colorChipListStore } from '../../../Store/ColorListStore';
import { Button } from '../../../Components/Button';
import { Form } from '../../../Components/Form';
import { ChromePicker } from 'react-color';
import styled from 'styled-components';
import { Row } from '../../../Components/Row';

const Color = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 30%;
  background-color: ${({ hexId }) => hexId && `${hexId}`};
  margin-right: 0.7rem;
`;

const SubmitHex = ({ openModal, item, changeColor }) => {
  const [title, setTitle] = useState('');
  const [hexId, setHexId] = useState('#E1E1E1');

  useEffect(() => {
    if (item) {
      setHexId(item.hexId);
      setTitle(item.title);
    }
  }, [item]);

  const handleColor = (color) => {
    setHexId(color.hex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item) {
      changeColor(hexId, title);
    } else {
      colorChipListStore.addColorChip({ title, hexId });
    }
    openModal();
  };

  return (
    <>
      <ChromePicker color={hexId} onChange={handleColor} disableAlpha={true} />
      <Form onSubmit={handleSubmit}>
        <Row>
          <Color hexId={hexId} />
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
          {item ? '수정' : '추가'}
        </Button>
      </Form>
    </>
  );
};

export default SubmitHex;
