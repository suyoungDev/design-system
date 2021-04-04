import React from 'react';
import { HeadingRow } from '../../Components/Row';
import CardModule from './Section/CardModule';
import PhotoCardModule from './Section/PhotoCardModule';
import { Wrapper } from '../../Components/Wrapper';

const Card = () => {
  return (
    <Wrapper>
      <HeadingRow>
        <h2>Cards</h2>
      </HeadingRow>
      <CardModule />
      <PhotoCardModule />
    </Wrapper>
  );
};

export default Card;
