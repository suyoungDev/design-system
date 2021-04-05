import React, { useState } from 'react';
import { Button } from '../../../Components/Button';
import { Form } from '../../../Components/Form';
import { colorChipListStore } from '../../../Store/ColorListStore';
import { baseColorListStore } from '../../../Store/BaseColorStore';
import RadioList from '../../../Components/RadioList';
import { Row } from '../../../Components/Row';

const AddBaseColorContent = ({ openModal }) => {
  const [id, setId] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    openModal();
  };

  const getValue = (e) => {
    setId(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <RadioList
          first
          list={colorChipListStore.colorList}
          getValue={getValue}
          name='list'
        />
      </Row>
      <Button primary type='submit'>
        완료
      </Button>
    </Form>
  );
};

export default AddBaseColorContent;
