import React, { useState } from 'react';
import { CgOptions } from 'react-icons/cg';

import { ColorBox } from '../../../Components/ColorCircle';
import { SmallButton } from '../../../Components/Button';
import useContrast from '../../../Hook/useContrast';
import { mixinStore } from '../../../Store/MixinStore';

const SmallMixin = ({ smallColor, index }) => {
  const [isHover, setIsHover] = useState(false);
  const { getColor, getBorderColor } = useContrast();
  const bordercolor = getBorderColor(smallColor);
  const buttonColor = getColor(smallColor);

  const onClick = () => {
    console.log(mixinStore.mixinList);
    console.log(index);
    console.log(smallColor);
  };

  return (
    <ColorBox
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      hexId={smallColor}
      borderColor={bordercolor}
      onClick={onClick}
      buttonColor={buttonColor}
    >
      {isHover && (
        <SmallButton buttonColor={buttonColor}>
          <CgOptions />
        </SmallButton>
      )}
    </ColorBox>
  );
};

export default SmallMixin;
