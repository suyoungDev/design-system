import React from 'react';
import TypographyModule from './TypographyModule';
import { observer } from 'mobx-react-lite';

const TypographyList = observer(({ list }) => {
  return (
    <div>
      {list.colorList?.map((item) => (
        <TypographyModule hexId={item.hexId} key={item.id} item={item} />
      ))}
    </div>
  );
});

export default TypographyList;
