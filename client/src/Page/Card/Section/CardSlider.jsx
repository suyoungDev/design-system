import React, { useState } from 'react';
import Slider, { SliderTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { observer } from 'mobx-react-lite';
import { Row } from '../../../Components/Row';
import { Label } from '../../../Components/Label';
import { cardColorStore } from '../../../Store/CardColorStore';

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
    <Row className='al_ct'>
      <Label>라운드 값</Label>
      <div style={{ width: 340 }}>
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
      </div>
    </Row>
  );
});

export default CardSlider;
