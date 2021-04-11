import React from 'react';
import { observer } from 'mobx-react-lite';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { ListContainer } from './BaseColorList.styles';
import BaseColorListItems from './BaseColorListItems';

const BaseColorList = ({ store }) => {
  function onDragEnd(result) {
    const sourceIndex = result.source.index;
    const destinationIndex = result.destination?.index;

    store.changeOrder(sourceIndex, destinationIndex);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ListContainer>
        <Droppable droppableId='droppable-2'>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={{
                border: snapshot.isDraggingOver ? '#FCFBFC' : 'none',
                backgroundColor: snapshot.isDraggingOver ? '#FCFBFC' : 'white',
              }}
              {...provided.droppableProps}
            >
              <BaseColorListItems store={store} {...provided} {...snapshot} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </ListContainer>
    </DragDropContext>
  );
};

export default BaseColorList;
