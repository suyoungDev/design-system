import React, { useState } from 'react';
import { CgOptions } from 'react-icons/cg';
import { observer } from 'mobx-react-lite';
import { ColorBox } from '../../../Components/ColorCircle';
import { SmallButton } from '../../../Components/Button';
import useContrast from '../../../Hook/useContrast';

const SmallMixin = observer(({ smallColor, index, open }) => {
  const [isHover, setIsHover] = useState(false);
  const { getColor, getBorderColor } = useContrast();
  const bordercolor = getBorderColor(smallColor);
  const buttonColor = getColor(smallColor);

  const onHover = (value) => {
    if (index === 1 || index === 3) return null;
    else setIsHover(value);
  };

  return (
    <ColorBox
      onMouseOver={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      hexId={smallColor}
      borderColor={bordercolor}
      onClick={() => open(index)}
    >
      <SmallButton
        mixin
        buttonColor={buttonColor}
        className={`${isHover && 'hover'}  mixin`}
        title='색상 수정하기'
      >
        <CgOptions />
      </SmallButton>
    </ColorBox>
  );
});

export default SmallMixin;
