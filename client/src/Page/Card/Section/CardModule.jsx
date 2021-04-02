import React from 'react';
import { CardLayout, Heading, CardButton, Context } from './CardModule.styles';

const CardModule = ({ hexId }) => {
  return (
    <CardLayout>
      <Heading>Heading</Heading>
      <Context>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Context>
      <CardButton hexId={hexId}>Default</CardButton>
    </CardLayout>
  );
};

export default CardModule;
