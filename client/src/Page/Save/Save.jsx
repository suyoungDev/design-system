import React, { useState } from 'react';
import { VscLoading } from 'react-icons/vsc';

import { Wrapper, SaveExplain } from '../../Components/Wrapper';
import { Loading, SavingButton } from './Save.styles';

import { baseColorListStore } from '../../Store/BaseColorStore';
import { cardColorStore } from '../../Store/CardColorStore';
import { colorChipListStore } from '../../Store/ColorListStore';
import { themeNameStore } from '../../Store/ThemeNameStore';

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
    <Wrapper id='save' last>
      <SaveExplain>
        <p>저장하시겠습니까?</p>
        <p>설정한 모든 옵션을 로컬스토리지에 저장합니다.</p>
        <p>다음 접속 시, 저장된 옵션을 불러옵니다.</p>
      </SaveExplain>
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
