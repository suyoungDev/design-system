import React from 'react';
import { CardLayout, Heading, CardButton, Context } from './CardModule.styles';

const CardModule = ({ headHex, contentHex, mainHex, hoverHex }) => {
  return (
    <CardLayout>
      <Heading headHex={headHex}>Heading</Heading>
      <Context contentHex={contentHex}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Context>
      <CardButton mainHex={mainHex} hover={hoverHex}>
        Default
      </CardButton>
    </CardLayout>
  );
};

export default CardModule;
