import React from 'react';
import chroma from 'chroma-js';
import { observer } from 'mobx-react-lite';

import { Column } from '../../../Components/Column';
import CardModule from './CardModule';
import PhotoCardModule from './PhotoCardModule';

import { cardColorStore } from '../../../Store/CardColorStore';

const CardModulesList = observer(({ language, style }) => {
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
    <Column className='center mt-02'>
      {style ? (
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
      ) : (
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
      )}
    </Column>
  );
});

export default CardModulesList;
