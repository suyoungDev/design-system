import React from 'react';
import styled from 'styled-components';
import BaseColorModule from './BaseColorModule';
import { BiMenu } from 'react-icons/bi';
import { observer } from 'mobx-react-lite';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Row } from '../../../Components/Row';

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;

  > :first-child {
    border-top: 1px solid ${(props) => props.theme.neutral50};
  }
  > :not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.neutral50};
  }
  border-bottom: 1px solid ${(props) => props.theme.neutral50};
`;

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
        <Droppable droppableId='droppable-1'>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={{
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
                    <Row
                      key={item.id}
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
                      <div
                        className='react-icons'
                        {...provided.dragHandleProps}
                      >
                        <BiMenu />
                      </div>
                      <BaseColorModule item={item} />
                    </Row>
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
