import React, { useState } from 'react';
import useCopy from '../../../Hook/useCopy';
import { Container, Color, Label, Copy } from './ColorBox.styles';
import { IoMdCopy } from 'react-icons/io';

const ColorBox = ({ item, borderColor, buttonColor }) => {
  const [save] = useCopy();
  const [isHover, setIsHover] = useState(false);

  const onHover = () => {
    setIsHover(!isHover);
  };

  return (
    <Container
      hexId={item.hexId}
      onClick={() => save(item.hexId)}
      borderColor={borderColor}
      onMouseEnter={onHover}
      onMouseLeave={onHover}
    >
      <Color hexId={item.hexId} />
      <Label>
        <span>{item.label}</span>
      </Label>
      <Copy buttonColor={buttonColor} className={`${isHover && 'onHover'}`}>
        <IoMdCopy />
      </Copy>
    </Container>
  );
};

export default ColorBox;
