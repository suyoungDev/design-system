import React, { useCallback, useEffect } from 'react';
import { SmallButton } from '../../../Components/Button';
import FormInput from '../../../Components/FormInput/FormInput';
import useInput from '../../../Hook/useInput';
import { BiPencil } from 'react-icons/bi';
import { Form } from '../../../Components/Form';

const ChangeName = ({ setIsOpen, item }) => {
  const [input, handler] = useInput({ title: '' });
  const { title } = input;

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        setIsOpen();
      }
    },
    [setIsOpen]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  const onSubmit = (e) => {
    e.preventDefault();
    item.changeTitle(title);
    setIsOpen();
  };

  return (
    <Form row mixin onSubmit={onSubmit}>
      <FormInput
        type='text'
        value={title}
        handleChange={handler}
        name='title'
        required
        autoFocus
      />
      <SmallButton mini type='submit' title='이름 수정'>
        <BiPencil />
      </SmallButton>
    </Form>
  );
};

export default ChangeName;
