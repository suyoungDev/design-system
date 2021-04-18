import React from 'react';
import {
  CardLayout,
  ContextContainer,
  Heading,
  CardButton,
  Context,
  ButtonBox,
} from './CardModule.styles';
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
      <ContextContainer>
        <Heading headHex={headHex}>
          {language ? korean.heading : english.heading}
        </Heading>
        <Context contentHex={contentHex}>
          {language ? korean.short_content : english.short_content}
        </Context>
        <ButtonBox>
          <CardButton
            mainHex={mainHex}
            hoverHex={hoverHex}
            textHex={textHex}
            hoverText={hoverText}
          >
            {language ? korean.button : english.button}
          </CardButton>
        </ButtonBox>
      </ContextContainer>
    </CardLayout>
  );
};

export default CardModule;
