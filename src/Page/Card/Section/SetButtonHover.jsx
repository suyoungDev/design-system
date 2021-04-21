import React, { useState, useCallback, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import SelectModule from './SelectModule';
import {
  OptionContainer,
  Container,
  OptionWrapper,
  SelectWrapper,
} from './SetButtonHover.styles';
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
    <>
      {cardColorStore.buttonColor && (
        <Container>
          <Label cardHover>버튼 호버 색상</Label>
          <OptionWrapper>
            <OptionContainer onClick={(e) => changeHoverColorType(e)}>
              {OPTIONS.map((option) => (
                <RadioComponents
                  value={option.value}
                  label={option.label}
                  name='hover'
                  defaultChecked={buttonHoverType}
                  key={option.value}
                />
              ))}
            </OptionContainer>
            <SelectWrapper>
              {buttonHoverType === 'colors' && (
                <SelectModule value='hoverColor' />
              )}
            </SelectWrapper>
          </OptionWrapper>
        </Container>
      )}
    </>
  );
});

export default SetButtonHover;
