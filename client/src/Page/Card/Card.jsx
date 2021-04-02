import React from 'react';
import { HeadingRow } from '../../Components/Row';
import CardModule from './Section/CardModule';
import PhotoCardModule from './Section/PhotoCardModule';

const Card = () => {
  return (
    <div>
      <HeadingRow>
        <h2>Cards</h2>
      </HeadingRow>
      <CardModule />
      <PhotoCardModule />
    </div>
  );
};

export default Card;
