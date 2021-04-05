import React from 'react';
import { baseColorList } from '../../Page/BaseColor/Section/BaseColorListSource';
import { Button } from '../Button';

const DropdownMenuList = () => {
  return (
    <div>
      {baseColorList.map((item) => (
        <Button secondary key={item.id}>
          {item.value}
        </Button>
      ))}
    </div>
  );
};

export default DropdownMenuList;
