import React, { useState } from 'react';
import styled from 'styled-components';
import SubmitHex from './SubmitHex';
import { Button } from '../../../Components/Button';

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const AddColorChip = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Right>
      <Button tertiary onClick={() => setIsOpen(!isOpen)}>
        추가
      </Button>
      {isOpen && <SubmitHex />}
    </Right>
  );
};

export default AddColorChip;
