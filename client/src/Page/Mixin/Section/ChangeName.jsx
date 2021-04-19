import React, { useCallback, useEffect } from 'react';
import FormInput from '../../../Components/FormInput/FormInput';
import useInput from '../../../Hook/useInput';

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
    <form onSubmit={onSubmit}>
      <FormInput
        type='text'
        value={title}
        handleChange={handler}
        name='title'
        required
        autoFocus
      />
    </form>
  );
};

export default ChangeName;
