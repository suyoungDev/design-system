import React from 'react';
import { HeadingRow } from './Row';
import AddButton from './AddButton';

const Head = ({ title, ...props }) => {
  return (
    <HeadingRow>
      <h2>{title}</h2>
      <AddButton {...props} />
    </HeadingRow>
  );
};

export default Head;
