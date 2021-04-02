import React from 'react';
import BaseColorModule from './BaseColorModule';
const BaseColorList = ({ list }) => {
  return (
    <div>
      {list?.map((item) => (
        <BaseColorModule hexId={item.hexId} />
      ))}
    </div>
  );
};

export default BaseColorList;
