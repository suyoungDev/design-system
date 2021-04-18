import React, { useState, useCallback, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import SelectModule from './SelectModule';
import { OptionContainer, Container } from './SetButtonHover.styles';
import RadioComponents from './RadioComponents';
import { Label } from '../../../Components/Label';
import { cardColorStore } from '../../../Store/CardColorStore';

const OPTIONS = [
  { label: '밝게', value: 'brighten' },
  { label: '어둡게', value: 'darken' },
  { label: '채도 높게', value: 'saturate' },
  { label: '채도 낮게', value: 'desaturate' },
  { label: '기존 색상', value: 'colors' },
];

const SetButtonHover = observer(() => {
  const [buttonHoverType, setButtonHoverType] = useState('');

  useEffect(() => {
    setButtonHoverType(cardColorStore.hoverType);
  }, []);

  const changeHoverColorType = useCallback((e) => {
    setButtonHoverType(e.target.value);
    cardColorStore.setHoverColor(e.target.value);
  }, []);

  return (
    <Container>
      <Label card>버튼 호버 색상</Label>
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
      {buttonHoverType === 'colors' && <SelectModule value='hoverColor' />}
    </Container>
  );
});

export default SetButtonHover;
