import React, { useEffect, useState } from 'react';
import { RadioLabel, Radio } from './SetButtonHover.styles';

const RadioComponents = ({ value, label, name, defaultChecked }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, [defaultChecked]);

  return (
    <>
      {isLoading && (
        <>
          <Radio
            type='radio'
            value={value}
            name={name}
            id={value}
            defaultChecked={defaultChecked === value ? true : false}
          />
          <RadioLabel htmlFor={value}>{label}</RadioLabel>
        </>
      )}
    </>
  );
};

export default RadioComponents;
