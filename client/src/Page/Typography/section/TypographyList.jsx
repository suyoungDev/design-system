import React from 'react';
import TypographyModule from './TypographyModule';

const TypographyList = ({ list }) => {
  return (
    <div>
      {list?.map((item) => (
        <TypographyModule hexId={item.hexId} />
      ))}
    </div>
  );
};

export default TypographyList;
