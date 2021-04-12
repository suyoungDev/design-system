import React from 'react';
import { HeadingRow } from './Row';
import AddButton from './AddButton';

const Head = ({ title, clickHandle, addComponent }) => {
  return (
    <HeadingRow>
      <h2>{title}</h2>
      {clickHandle ? <AddButton clickHandle={clickHandle} /> : addComponent}
    </HeadingRow>
  );
};

export default Head;
