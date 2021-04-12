import React from 'react';
import useCopy from '../../../Hook/useCopy';
import { Container, Color, Label } from './ColorBox.styles';

const ColorBox = ({ item, borderColor }) => {
  const [save] = useCopy();

  return (
    <Container
      hexId={item.hexId}
      onClick={() => save(item.hexId)}
      borderColor={borderColor}
    >
      <Color hexId={item.hexId} />
      <Label>
        <span>{item.label}</span>
        <span>{item.hexId}</span>
      </Label>
    </Container>
  );
};

export default ColorBox;
