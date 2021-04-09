import React from 'react';
import { observer } from 'mobx-react-lite';
import { Draggable } from 'react-beautiful-dnd';
import Chip from './ColorChipModule';

const ColorChipListItems = observer(({ provided, snapshot, colorList }) => {
  return colorList.map((item, index) => (
    <Draggable key={'' + item.id} draggableId={'' + item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
            backgroundColor: snapshot.isDragging ? 'white' : 'none',
            boxShadow: snapshot.isDragging ? '0 0 .4rem #A4A8AE' : 'none',
          }}
        >
          <Chip item={item} />
        </div>
      )}
    </Draggable>
  ));
});

export default ColorChipListItems;
