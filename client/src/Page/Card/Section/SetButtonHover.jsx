import React, { useState, useCallback } from 'react';

import SelectModule from './SelectModule';
import { OptionContainer } from './SetButtonHover.styles';
import RadioComponents from './RadioComponents';
import { Row } from '../../../Components/Row';
import { Column } from '../../../Components/Column';
import { Label } from '../../../Components/Label';
import { cardColorStore } from '../../../Store/CardColorStore';

const OPTIONS = [
  { label: '밝게', value: 'brighten' },
  { label: '어둡게', value: 'darken' },
  { label: '채도 높게', value: 'saturate' },
  { label: '채도 낮게', value: 'desaturate' },
  { label: '기존 색상', value: 'colors' },
];

const SetButtonHover = () => {
  const [buttonHoverType, setButtonHoverType] = useState('');

  const changeHoverColorType = useCallback((e) => {
    setButtonHoverType(e.target.value);
    cardColorStore.setHoverColor(e.target.value);
  }, []);

  return (
    <Column>
      <Row className='mt-5 mb-5'>
        <Label>버튼 호버 색상</Label>
        <OptionContainer onClick={(e) => changeHoverColorType(e)}>
          {OPTIONS.map((option) => (
            <div key={option.value}>
              <RadioComponents
                value={option.value}
                label={option.label}
                name='hover'
                defaultChecked={buttonHoverType}
              />
            </div>
          ))}
        </OptionContainer>
      </Row>
      {buttonHoverType === 'colors' && <SelectModule value='hoverColor' />}
    </Column>
  );
};

export default SetButtonHover;
