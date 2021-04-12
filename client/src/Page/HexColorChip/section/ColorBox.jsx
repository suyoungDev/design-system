import React from 'react';
import styled from 'styled-components';
import { useAlert } from 'react-alert';

const Container = styled.div`
  cursor: pointer;
  margin-top: 0.4rem;
  width: 120px;
  height: 120px;

  display: grid;
  grid-template-rows: 70px 50px;
  border: 1px solid ${({ borderColor }) => `${borderColor}`};
  border-radius: 13px;
`;

const Color = styled.div`
  border: 1px solid ${({ hexId }) => `${hexId}`};
  border-radius: 13px 13px 0 0;
  background-color: ${({ hexId }) => `${hexId}`};
`;

const Label = styled.label`
  font-size: 11px;
  font-weight: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  > span {
    color: ${(props) => props.theme.ink30};
    padding-bottom: 3px;

    :first-child {
      color: ${(props) => props.theme.ink40};
      font-weight: 500;
      font-size: 12px;
    }
  }
`;

const ColorBox = ({ item, borderColor }) => {
  const alert = useAlert();

  const getHexId = () => {
    navigator.clipboard.writeText(item.hexId);
    toasting();
  };

  const toasting = () => {
    alert.success('복사 완료');
  };

  return (
    <Container hexId={item.hexId} onClick={getHexId} borderColor={borderColor}>
      <Color hexId={item.hexId} />
      <Label>
        <span>{item.label}</span>
        <span>{item.hexId}</span>
      </Label>
    </Container>
  );
};

export default ColorBox;
