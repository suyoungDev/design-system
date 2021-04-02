import React from 'react';
import FormInput from '../../Components/FormInput/FormInput';
import useInput from '../../Hook/useInput';

const SubmitHex = () => {
  const [input, hanlder, resetInput] = useInput({ name: '', hexId: '' });
  const { hexId, name } = input;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
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
        required
      />
      <FormInput
        name='name'
        type='text'
        value={name}
        handleChange={hanlder}
        label='name'
        required
      />
      <button type='submit'>확인</button>
    </form>
  );
};

export default SubmitHex;
