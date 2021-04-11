import React, { useEffect, useState } from 'react';
import { RadioLabel, Radio } from './SetButtonHover.styles';

const RadioComponents = ({ value, label, name, defaultChecked }) => {
  const [isCheck, setIsCheck] = useState(false);
  useEffect(() => {
    checked();
  }, []);

  const checked = () => {
    setIsCheck(defaultChecked === value ? true : false);
  };

  return (
    <div>
      <Radio
        type='radio'
        value={value}
        name={name}
        id={value}
        defaultChecked={isCheck}
      />
      <RadioLabel htmlFor={value}>{label}</RadioLabel>
    </div>
  );
};

export default RadioComponents;
