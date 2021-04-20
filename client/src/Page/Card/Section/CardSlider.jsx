import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import Slider, { SliderTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { observer } from 'mobx-react-lite';

import { Label } from '../../../Components/Label';
import { Container } from './SetButtonHover.styles';
import { cardColorStore } from '../../../Store/CardColorStore';
import useIsOpen from '../../../Hook/useIsOpen';

const SlideWrapper = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
`;

const { Handle } = Slider;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;

  return (
    <SliderTooltip
      prefixCls='rc-slider-tooltip'
      overlay={`${value} px`}
      visible={dragging}
      placement='bottom'
      key={index}
    >
      <Handle value={value} {...restProps} />
    </SliderTooltip>
  );
};

const CardSlider = observer(({ label, name }) => {
  const [isOpen, handler] = useIsOpen();
  const [defaultSliderValue, setDefaultSliderValue] = useState(0);

  useLayoutEffect(() => {
    if (name === 'borderRadius') {
      if (cardColorStore.borderRadius >= 0)
        setDefaultSliderValue(cardColorStore.borderRadius);
    }
    if (name === 'buttonRadius')
      if (cardColorStore.buttonRadius >= 0)
        setDefaultSliderValue(cardColorStore.buttonRadius);

    handler();
  }, [name]);

  const changeHandle = (value) => {
    cardColorStore.setCardColor(name, value);
  };

  return (
    <Container slider>
      <Label card>{label}</Label>
      <SlideWrapper>
        {isOpen && (
          <Slider
            min={0}
            max={30}
            defaultValue={defaultSliderValue}
            handle={handle}
            trackStyle={{ backgroundColor: '#AD9EE5' }}
            handleStyle={{
              borderColor: '#AD9EE5',
              height: 15,
              width: 15,
              backgroundColor: 'white',
            }}
            onChange={changeHandle}
          />
        )}
      </SlideWrapper>
    </Container>
  );
});

export default CardSlider;
