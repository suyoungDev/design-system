import React from 'react';
import BaseColorModule from './BaseColorModule';
import { observer } from 'mobx-react-lite';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { ListItemRow } from '../../../Components/Row';
import { ListContainer } from './BaseColorList.styles';

const BaseColorList = observer(({ store }) => {
  return (
    <DragDropContext
      onDragEnd={(param) => {
        const sourceIndex = param.source.index;
        const destinationIndex = param.destination?.index;
        store.changeOrder(sourceIndex, destinationIndex);
      }}
    >
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
              {store?.baseColorList.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={`draggable-${item.id}`}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <ListItemRow
                      className='al_ct'
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      style={{
                        ...provided.draggableProps.style,
                        backgroundColor: snapshot.isDragging ? 'white' : 'none',
                        boxShadow: snapshot.isDragging
                          ? '0 0 .4rem #666'
                          : 'none',
                      }}
                    >
                      <BaseColorModule
                        item={item}
                        {...provided.dragHandleProps}
                      />
                    </ListItemRow>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </ListContainer>
    </DragDropContext>
  );
});

export default BaseColorList;
