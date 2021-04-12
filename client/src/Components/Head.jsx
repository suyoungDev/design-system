import React from 'react';
import { HeadingRow } from './Row';
import AddButton from './AddButton';

const Head = ({ title, addNew, viewCode, ...props }) => {
  return (
    <HeadingRow>
      <h2>{title}</h2>
      <AddButton addNew={addNew} viewCode={viewCode} {...props} />
    </HeadingRow>
  );
};

export default Head;
