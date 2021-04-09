import React, { useState } from 'react';
import { HeadingRow } from '../../Components/Row';
import CardModule from './Section/CardModule';
import PhotoCardModule from './Section/PhotoCardModule';
import { Wrapper } from '../../Components/Wrapper';
import { BiPalette } from 'react-icons/bi';
import { Button } from '../../Components/Button';

const Card = () => {
  const [cardColorList, setCardColorList] = useState({
    head: '',
    content: '',
    main: '',
    hover: '',
  });
  const { head, content, main, hover } = cardColorList;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <HeadingRow>
        <h2>Cards</h2>
        <Button onClick={() => setIsOpen(!isOpen)}>
          <BiPalette />
        </Button>
      </HeadingRow>
      <CardModule
        headHex={head}
        contentHex={content}
        mainHex={main}
        hoverHex={hover}
      />
      <PhotoCardModule />
    </Wrapper>
  );
};

export default Card;
