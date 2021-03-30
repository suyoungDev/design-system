import React from 'react';
import { Label, Group, Input } from './FormInput.styles';

const FormInput = ({ handleChange, label, ...props }) => {
  return (
    <Group>
      {label ? <Label>{label}</Label> : null}
      <Input onChange={handleChange} {...props} />
    </Group>
  );
};

export default FormInput;
