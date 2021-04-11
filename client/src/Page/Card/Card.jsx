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
import { Column } from '../../Components/Column';

const Card = observer(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(true);
  const {
    buttonColor,
    hoverColor,
    headColor,
    contentColor,
    borderRadius,
  } = cardColorStore;

  const textHex =
    buttonColor && chroma.contrast(buttonColor, 'white') > 2
      ? 'white'
      : 'black';

  const hoverText =
    hoverColor && chroma.contrast(hoverColor, 'white') > 2 ? 'white' : 'black';

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
      <Column className='center'>
        <CardModule
          mainHex={buttonColor}
          headHex={headColor}
          contentHex={contentColor}
          hoverHex={hoverColor}
          textHex={textHex}
          language={language}
          radius={borderRadius}
          hoverText={hoverText}
        />
        <PhotoCardModule
          mainHex={buttonColor}
          headHex={headColor}
          contentHex={contentColor}
          hoverHex={hoverColor}
          textHex={textHex}
          language={language}
          radius={borderRadius}
          hoverText={hoverText}
        />
      </Column>
    </Wrapper>
  );
});

export default Card;
