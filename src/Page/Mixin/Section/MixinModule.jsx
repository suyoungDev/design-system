import React, { useState, Suspense } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { Row } from '../../../Components/Row';
import AddButton from '../../../Components/AddButton';
import ModifyName from './ModifyName';

import SmallMixinList from './SmallMixinList';
import useIsOpen from '../../../Hook/useIsOpen';
import { mixinStore } from '../../../Store/MixinStore';
const MixinOptions = React.lazy(() => import('./MixinOptions'));

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
          {!isOpen && (
            <AddButton
              changeName={setIsOpen}
              deleteItem={deleteItem}
              save={addToPalette}
              className='mini'
            />
          )}
        </Title>
        <Row className='mb-5'>
          <SmallMixinList list={item.listOfColors} open={openOptions} />
        </Row>
        {isOptionOpen && (
          <Suspense fallback={<div>...loading...</div>}>
            <MixinOptions
              index={indexLog}
              setIsOptionOpen={setIsOptionOpen}
              id={item.id}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            />
          </Suspense>
        )}
      </Container>
    </ModuleWrapper>
  );
});

export default MixinModule;
