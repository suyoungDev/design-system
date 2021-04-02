import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ hexId }) => (hexId ? `${hexId}` : '#dbdbdb')};
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const Label = styled.label`
  color: white;
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 5px 10px;
`;

const ColorBox = ({ children, hexId }) => {
  return (
    <Container hexId={hexId}>
      <Label>{children}</Label>
    </Container>
  );
};

export default ColorBox;
