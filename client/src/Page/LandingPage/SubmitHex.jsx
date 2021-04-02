import React from 'react';
import FormInput from '../../Components/FormInput/FormInput';
import useInput from '../../Hook/useInput';
import { colorChipListStore } from '../../Store/ColorListStore';

const SubmitHex = () => {
  const [input, hanlder, resetInput] = useInput({ title: '', hexId: '' });
  const { title, hexId } = input;

  const handleSubmit = (e) => {
    e.preventDefault();
    colorChipListStore.addColorChip(input);
    resetInput();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        name='hexId'
        type='text'
        value={hexId}
        handleChange={hanlder}
        label='hexId'
        maxlength='7'
        pattern='#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})'
        required
      />
      <FormInput
        name='title'
        type='text'
        value={title}
        handleChange={hanlder}
        label='title'
        required
      />
      <button type='submit'>확인</button>
    </form>
  );
};

export default SubmitHex;
