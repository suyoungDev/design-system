import React, { useState } from 'react';
import { BiPalette, BiWorld } from 'react-icons/bi';
import { observer } from 'mobx-react-lite';
import chroma from 'chroma-js';

import CardModule from './Section/CardModule';
import PhotoCardModule from './Section/PhotoCardModule';
import { HeadingRow } from '../../Components/Row';
import { Wrapper } from '../../Components/Wrapper';
import { SmallButton } from '../../Components/Button';
import { cardColorStore } from '../../Store/CardColorStore';
import SetColorsList from './Section/SetColorsList';

const Card = observer(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(true);
  const { mainColor, hoverColor, headColor, contentColor } = cardColorStore;

  const textHex =
    mainColor && chroma.contrast(mainColor, 'white') > 2 ? 'white' : 'black';

  return (
    <Wrapper>
      <HeadingRow>
        <h2>Cards</h2>
        <div>
          <SmallButton narrow onClick={() => setIsOpen(!isOpen)}>
            <BiPalette />
          </SmallButton>
          <SmallButton
            narrow
            onClick={() => {
              setLanguage(!language);
            }}
          >
            <BiWorld />
          </SmallButton>
        </div>
      </HeadingRow>
      <SetColorsList isOpen={isOpen} />
      <CardModule
        mainHex={mainColor}
        headHex={headColor}
        contentHex={contentColor}
        hoverHex={hoverColor}
        textHex={textHex}
        language={language}
      />
      <PhotoCardModule
        mainHex={mainColor}
        headHex={headColor}
        contentHex={contentColor}
        hoverHex={hoverColor}
        textHex={textHex}
        language={language}
      />
    </Wrapper>
  );
});

export default Card;
