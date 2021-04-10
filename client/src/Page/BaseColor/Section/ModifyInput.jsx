import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import useInput from '../../../Hook/useInput';
import { SmallButton } from '../../../Components/Button';

const Input = styled.input`
  width: 200px;
  padding: 5px 10px;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.neutral50};
  margin: 0 1rem 0 0.7rem;
  outline: none;
  font-weight: 200;
  :focus {
    border: 2px solid ${(props) => props.theme.purple10};
  }
`;

const ModifyInput = ({ isModify, setIsModify, changeRole, role }) => {
  const [input, handler] = useInput({ label: '' });
  const { label } = input;

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && isModify) {
        setIsModify({ ...isModify, role: !role });
      }
    },
    [isModify, setIsModify, role]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  const cancel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModify({ ...isModify, role: false });
  };

  return (
    <form onSubmit={(e) => changeRole(e, label)}>
      <Input
        type='text'
        value={label}
        onChange={handler}
        name='label'
        required
        autoFocus
      />
      <SmallButton secondary type='submit'>
        저장
      </SmallButton>
      <SmallButton tertiary onClick={cancel}>
        취소
      </SmallButton>
    </form>
  );
};

export default ModifyInput;
