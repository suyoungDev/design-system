import React from 'react';
import { Label, Group, Input } from './FormInput.styles';

const FormInput = ({ handleChange, label, id, ...props }) => {
  return (
    <Group>
      {label ? <Label htmlFor={id}>{label}</Label> : null}
      <Input onChange={handleChange} {...props} id={id} />
    </Group>
  );
};

export default FormInput;
