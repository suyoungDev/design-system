import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { BiX, BiMoveVertical, BiPencil } from 'react-icons/bi';
import { Row } from '../../../Components/Row';
import { ColorCircle } from '../../../Components/ColorCircle';
import ModifyInput from './ModifyInput';
import ChangeBaseColorList from './ChangeBaseColorList';
import { baseColorListStore } from '../../../Store/BaseColorStore';
import { Wrapper, Title, Dash, Label } from './BaseColorModule.styles';

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
    event.stopPropagation();

    item.changeRole(label);
    setIsModify({ label: false, role: !role });
  };

  const changeColor = (title, hexId) => {
    item.changeHexId(hexId, title);
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
                  role={role}
                />
              ) : (
                <Title>{item.role}</Title>
              )}
              {!role && (
                <Row className='al_ct'>
                  <Label>{item.label}</Label>
                  <Dash />
                  <Label hex>{item.hexId}</Label>
                </Row>
              )}
            </Row>
          </Row>
          <BiPencil onClick={(e) => clickHandler('role', e)} />
          <BiMoveVertical />
          <BiX onClick={deleteItem} />
        </Row>
      </Wrapper>
      {label && <ChangeBaseColorList changeColor={changeColor} />}
    </>
  );
});

export default BaseColorModule;
