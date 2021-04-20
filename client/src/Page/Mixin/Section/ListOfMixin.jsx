import React from 'react';
import { mixinStore } from '../../../Store/MixinStore';
import { observer } from 'mobx-react-lite';
import MixinModule from './MixinModule';

const ListOfMixin = observer(() => {
  return (
    <div>
      {mixinStore.mixinList?.map((item) => (
        <MixinModule item={item} key={item.id} />
      ))}
    </div>
  );
});

export default ListOfMixin;
