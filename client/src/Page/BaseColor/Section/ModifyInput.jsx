import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import useInput from '../../../Hook/useInput';

const Input = styled.input`
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.neutral50};
  margin-right: 1rem;
  outline: none;
  :focus {
    border: 2px solid ${(props) => props.theme.purple10};
  }
`;

const ModifyInput = ({ isModify, setIsModify, changeRole }) => {
  const [input, handler] = useInput({ label: '' });
  const { label } = input;

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && isModify) {
        setIsModify(false);
      }
    },
    [isModify, setIsModify]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <form onSubmit={(e) => changeRole(e, label)}>
      <Input
        type='text'
        value={label}
        onChange={handler}
        name='label'
        autoFocus
      />
    </form>
  );
};

export default ModifyInput;
