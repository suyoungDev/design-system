import React from 'react';
import styled from 'styled-components';

import useContrast from '../../../Hook/useContrast';

import { ColorCircle } from '../../../Components/ColorCircle';

const Button = styled.button`
  outline: none;
  border: none;
  background: transparent;
  margin-right: 1rem;
  border: 2px solid transparent;
  width: 20px;

  :hover {
    transform: scale(1.1);
  }
  :active {
    transform: scale(0.9);
  }

  transition: all 0.3s ease;
`;

const ChangeBaseColorModule = ({ item, changeColor }) => {
  const { getBorderColor } = useContrast();
  const borderColor = getBorderColor(item.hexId);

  return (
    <Button
      onClick={(e) => {
        changeColor(e.currentTarget.name, e.currentTarget.value);
      }}
      key={item.id}
      value={item.hexId}
      name={item.label}
    >
      <ColorCircle hexId={item.hexId} borderColor={borderColor} select />
    </Button>
  );
};

export default ChangeBaseColorModule;
