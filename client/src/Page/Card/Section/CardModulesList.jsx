import React, { Suspense } from 'react';
import chroma from 'chroma-js';
import { observer } from 'mobx-react-lite';

import { Column } from '../../../Components/Column';
import { cardColorStore } from '../../../Store/CardColorStore';
const PhotoCardModule = React.lazy(() => import('./PhotoCardModule'));
const CardModule = React.lazy(() => import('./CardModule'));

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
        <Suspense fallback={<div>...loading...</div>}>
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
        </Suspense>
      ) : (
        <Suspense fallback={<div>...loading..</div>}>
          {!style && (
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
        </Suspense>
      )}
    </Column>
  );
});

export default CardModulesList;
