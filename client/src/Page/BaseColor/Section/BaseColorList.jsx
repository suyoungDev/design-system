import React from 'react';
import BaseColorModule from './BaseColorModule';

const BaseColorList = ({ store }) => {
  return (
    <div>
      {store?.baseColorList.map((item) => (
        <BaseColorModule item={item} />
      ))}
    </div>
  );
};

export default BaseColorList;
