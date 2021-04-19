import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { Row } from '../../../Components/Row';
import SaveMixin from './SaveMixin';
import AddButton from '../../../Components/AddButton';
import ModifyName from './ModifyName';
import SmallMixin from './SmallMixin';

import useIsOpen from '../../../Hook/useIsOpen';
import { mixinStore } from '../../../Store/MixinStore';

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  span {
    color: ${(props) => props.theme.ink40};
    font-size: 0.85rem;
  }
  margin-bottom: 0.5rem;
`;

const Container = styled.div`
  margin-bottom: 1.5rem;
`;

const MixinModule = observer(({ item }) => {
  const [isOpen, setIsOpen] = useIsOpen();

  const deleteItem = () => mixinStore.deleteMixin(item.id);

  return (
    <Container>
      <Title>
        <ModifyName isOpen={isOpen} setIsOpen={setIsOpen} item={item} />
        <AddButton changeName={setIsOpen} deleteItem={deleteItem} />
      </Title>
      <Row className='mb-5'>
        <Row>
          {item.listOfColors.map((smallColor, index) => (
            <SmallMixin
              key={smallColor}
              smallColor={smallColor}
              index={index}
            />
          ))}
        </Row>
        <SaveMixin />
      </Row>
    </Container>
  );
});

export default MixinModule;
