import React from 'react';
import { ColorCircle } from './ColorCircle';
import styled from 'styled-components';

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.4rem;

  font-size: 12px;
  font-weight: bold;
  color: ${(props) => props.theme.ink50};
  cursor: pointer;
  transition: all 0.3s ease;
  word-break: keep-all;

  border: 1px solid ${(props) => props.theme.neutral60};

  :not(:first-child) & :not(:last-child) {
    border-radius: 0;
    border: none;
  }

  :first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  :last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  :hover {
    border: 1px solid ${(props) => props.theme.purple50};
    color: blue;
  }
  :focus {
    border: 2px solid ${(props) => props.theme.purple10};
  }
`;

export const RadioInput = styled.input`
  display: none;

  &:checked + ${RadioLabel} {
    background-color: ${(props) => props.theme.purple10};
    color: ${(props) => props.theme.ink50};
  }
`;

const Div = styled.div``;

const Radio = ({ item, getValue, name }) => {
  return (
    <Div onClick={getValue} className='al_ct jc_sb'>
      <RadioInput id={item.title} value={item.id} type='radio' name={name} />
      <RadioLabel htmlFor={item.title}>
        <ColorCircle hexId={item.hexId} />
        {item.title}
      </RadioLabel>
    </Div>
  );
};

export default Radio;
