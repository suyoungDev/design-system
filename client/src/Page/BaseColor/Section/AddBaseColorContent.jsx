import React, { useState } from 'react';
import BaseList from '../../../Components/BaseList';
import { Button } from '../../../Components/Button';
import { baseColorList } from './BaseColorListSource';

const AddBaseColorContent = ({ openModal }) => {
  const [id, setId] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    openModal();
  };

  return (
    <div>
      <BaseList first list={baseColorList} />
      <Button primary type='submit'>
        완료
      </Button>
    </div>
  );
};

export default AddBaseColorContent;
