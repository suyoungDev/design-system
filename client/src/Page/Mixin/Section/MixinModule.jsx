import React, { useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { Row } from '../../../Components/Row';
import SaveMixin from './SaveMixin';
import MixinOptions from './MixinOptions';
import AddButton from '../../../Components/AddButton';
import ModifyName from './ModifyName';
import SmallMixin from './SmallMixin';

import useIsOpen from '../../../Hook/useIsOpen';
import { mixinStore } from '../../../Store/MixinStore';

const Title = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  span {
    color: ${(props) => props.theme.ink40};
    font-size: 0.85rem;
  }
  margin-bottom: 0.5rem;
`;

const ModuleWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Container = styled.div`
  max-width: 200px;
`;

const MixinModule = observer(({ item }) => {
  const [isOpen, setIsOpen] = useIsOpen();
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [indexLog, setIndexLog] = useState();
  const [isChecked, setIsChecked] = useState(false);

  const deleteItem = () => mixinStore.deleteMixin(item.id);

  const openOptions = (index) => {
    if (index === 1 || index === 3) return null;
    if (index !== indexLog) {
      setIndexLog(index);
      setIsOptionOpen(true);
    }
    if (index === indexLog) {
      setIndexLog('');
      setIsOptionOpen(false);
    }
  };

  const addToPalette = () => {
    mixinStore.addMixinToPalette(item.id);
  };

  return (
    <ModuleWrapper>
      <Container>
        <Title>
          <ModifyName isOpen={isOpen} setIsOpen={setIsOpen} item={item} />
          <AddButton
            changeName={setIsOpen}
            deleteItem={deleteItem}
            save={addToPalette}
          />
        </Title>
        <Row className='mb-5'>
          <Row>
            {item.listOfColors.map((smallColor, index) => (
              <SmallMixin
                key={`${smallColor}_${index}`}
                smallColor={smallColor}
                index={index}
                open={openOptions}
              />
            ))}
          </Row>
        </Row>
        {isOptionOpen && (
          <MixinOptions
            index={indexLog}
            setIsOptionOpen={setIsOptionOpen}
            id={item.id}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
        )}
      </Container>
    </ModuleWrapper>
  );
});

export default MixinModule;
