import React from 'react';
import { CardLayout, Heading, CardButton, Context } from './CardModule.styles';
import lorem from '../../../lorem';

const { korean, english } = lorem;

const CardModule = ({
  headHex,
  contentHex,
  mainHex,
  hoverHex,
  textHex,
  language,
  radius,
  hoverText,
}) => {
  return (
    <CardLayout radius={radius}>
      <Heading headHex={headHex}>
        {language ? korean.heading : english.heading}
      </Heading>
      <Context contentHex={contentHex}>
        {language ? korean.short_content : english.short_content}
      </Context>
      <CardButton
        mainHex={mainHex}
        hoverHex={hoverHex}
        textHex={textHex}
        hoverText={hoverText}
      >
        {language ? korean.button : english.button}
      </CardButton>
    </CardLayout>
  );
};

export default CardModule;
