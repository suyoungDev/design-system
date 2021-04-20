import React, { Suspense } from 'react';
import { observer } from 'mobx-react-lite';

import useContrast from '../../../Hook/useContrast';
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
    buttonRadius,
  } = cardColorStore;

  const { getColor } = useContrast();
  const textHex = getColor(buttonColor);
  const hoverText = getColor(hoverColor);

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
            buttonRadius={buttonRadius}
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
              buttonRadius={buttonRadius}
            />
          )}
        </Suspense>
      )}
    </Column>
  );
});

export default CardModulesList;
