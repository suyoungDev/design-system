import React, { useState } from 'react';
import Slider, { SliderTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { observer } from 'mobx-react-lite';
import { Label } from '../../../Components/Label';
import { cardColorStore } from '../../../Store/CardColorStore';
import { Container } from './SetButtonHover.styles';
import styled from 'styled-components';

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

const CardSlider = observer(() => {
  const [borderRadius] = useState(cardColorStore.borderRadius || 0);

  const changeHandle = (value) => {
    cardColorStore.setCardColor('borderRadius', value);
  };

  return (
    <Container slider>
      <Label card>라운드 값</Label>
      <SlideWrapper>
        <Slider
          min={0}
          max={30}
          defaultValue={borderRadius}
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
      </SlideWrapper>
    </Container>
  );
});

export default CardSlider;
