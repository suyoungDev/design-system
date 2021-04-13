import React, { useState } from 'react';
import { VscLoading } from 'react-icons/vsc';

import { Wrapper } from '../../Components/Wrapper';
import { baseColorListStore } from '../../Store/BaseColorStore';
import { cardColorStore } from '../../Store/CardColorStore';
import { colorChipListStore } from '../../Store/ColorListStore';
import { themeNameStore } from '../../Store/ThemeNameStore';
import { Loading, SavingButton } from './Save.styles';

const Save = () => {
  const [isLoading, setIsLoading] = useState(false);

  const saveInLocal = () => {
    setIsLoading(true);
    const baseColorList = baseColorListStore.baseColorList.map((item) => ({
      hexId: item.hexId,
      label: item.label,
      role: item.role,
    }));
    const allColorsList = colorChipListStore.colorList.map((item) => ({
      hexId: item.hexId,
      label: item.label,
    }));
    const cardSettings = { ...cardColorStore };
    const themeName = themeNameStore.name;

    localStorage.setItem('baseColorList', JSON.stringify(baseColorList));
    localStorage.setItem('allColorsList', JSON.stringify(allColorsList));
    localStorage.setItem('cardSettings', JSON.stringify(cardSettings));
    localStorage.setItem('themeName', themeName);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Wrapper id='save'>
      저장하시겠습니까?
      <SavingButton
        onClick={saveInLocal}
        className={`${!isLoading && 'saving'}`}
      >
        {isLoading ? (
          <Loading>
            <VscLoading />
          </Loading>
        ) : (
          <p>저장하기</p>
        )}
      </SavingButton>
    </Wrapper>
  );
};

export default Save;
