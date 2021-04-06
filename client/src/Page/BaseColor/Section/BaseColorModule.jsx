import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { BiX, BiMoveVertical } from 'react-icons/bi';

import { Row } from '../../../Components/Row';
import { ColorCircle } from '../../../Components/ColorCircle';
import ModifyInput from './ModifyInput';
import ChangeBaseColorList from './ChangeBaseColorList';
import { baseColorListStore } from '../../../Store/BaseColorStore';

const Wrapper = styled.div`
  padding: 0.5rem 0.7rem;
  width: 100%;

  .react-icons {
    color: ${(props) => props.theme.ink30};
    cursor: pointer;
    :not(:last-child) {
      margin-right: 0.5rem;
    }
    :hover {
      color: ${(props) => props.theme.purple50};
    }
    transition: all 0.3s ease;
  }
`;

const Title = styled.span`
  font-weight: 400;
  font-size: 0.8rem;
  margin: 0 0.6rem 0.2rem 0;
  color: ${(props) => props.theme.ink50};
  text-transform: capitalize;
`;

const Label = styled.span`
  font-size: ${({ small }) => (small ? '0.5rem' : '0.7rem')};
  font-weight: 200;
  color: ${(props) => props.theme.ink30};
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  text-transform: lowercase;
`;

const BaseColorModule = observer(({ item }) => {
  const [isModify, setIsModify] = useState({ label: false, role: false });
  const { role, label } = isModify;

  const clickHandler = (element, e) => {
    if (element === 'role') {
      setIsModify({ ...isModify, [element]: !role });
    } else {
      setIsModify({ ...isModify, [element]: !label });
    }
    e.stopPropagation();
  };

  const changeRole = (event, label) => {
    event.preventDefault();
    baseColorListStore.modifyRole(item.id, label);
    setIsModify({ ...isModify, role: !role });
  };

  const changeColor = (title, hexId) => {
    baseColorListStore.modifyHexId(item.id, hexId, title);
    setIsModify({ ...isModify, label: !label });
  };

  const deleteItem = () => {
    baseColorListStore.deleteBaseColor(item.id);
  };

  return (
    <>
      <Wrapper>
        <Row className='al_ct' onClick={(e) => clickHandler('label', e)}>
          <ColorCircle hexId={item.hexId} />
          <Row className='al_ct jc_sb'>
            <Row
              className='al_ct'
              onDoubleClick={(e) => clickHandler('role', e)}
            >
              {role ? (
                <ModifyInput
                  changeRole={changeRole}
                  isModify={isModify}
                  setIsModify={setIsModify}
                />
              ) : (
                <Title>{item.role}</Title>
              )}
              <Label>{item.label}</Label>
            </Row>
          </Row>
          <BiMoveVertical />
          <BiX onClick={deleteItem} />
        </Row>
      </Wrapper>
      {label && <ChangeBaseColorList changeColor={changeColor} />}
    </>
  );
});

export default BaseColorModule;
