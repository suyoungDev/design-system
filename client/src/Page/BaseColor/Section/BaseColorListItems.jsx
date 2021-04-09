import React from 'react';
import { observer } from 'mobx-react-lite';
import { Draggable } from 'react-beautiful-dnd';
import { ListItemRow } from '../../../Components/Row';
import BaseColorModule from './BaseColorModule';

const BaseColorListItems = observer(({ store, provided, snapshot }) => {
  return store?.baseColorList.map((item, index) => (
    <Draggable key={'' + item.id} draggableId={'' + item.id} index={index}>
      {(provided, snapshot) => (
        <ListItemRow
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
            backgroundColor: snapshot.isDragging ? 'white' : 'none',
            boxShadow: snapshot.isDragging ? '0 0 .4rem #A4A8AE' : 'none',
          }}
        >
          <BaseColorModule item={item} />
        </ListItemRow>
      )}
    </Draggable>
  ));
});

export default BaseColorListItems;
