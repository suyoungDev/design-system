import React from 'react';
import { observer } from 'mobx-react-lite';
import {
  Heading,
  CardButton,
  PhotoCardLayout,
  ButtonBox,
  Context,
  ContextContainer,
  Bg,
} from './CardModule.styles';
import lorem from '../../../lorem';

const { korean, english } = lorem;

const PhotoCardModule = observer(
  ({
    headHex,
    contentHex,
    mainHex,
    hoverHex,
    textHex,
    language,
    radius,
    hoverText,
    buttonRadius,
  }) => {
    return (
      <PhotoCardLayout radius={radius}>
        <Bg radius={radius} />
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
              buttonRadius={buttonRadius}
            >
              {language ? korean.button : english.button}
            </CardButton>
          </ButtonBox>
        </ContextContainer>
      </PhotoCardLayout>
    );
  }
);

export default PhotoCardModule;
