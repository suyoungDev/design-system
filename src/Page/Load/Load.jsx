import React, { useState } from 'react';
import { VscLoading } from 'react-icons/vsc';

import { Wrapper, SaveExplain } from '../../Components/Wrapper';
import { Loading, SavingButton } from '../Save/Save.styles';

import { baseColorListStore } from '../../Store/BaseColorStore';
import { cardColorStore } from '../../Store/CardColorStore';
import { colorChipListStore } from '../../Store/ColorListStore';
import { themeNameStore } from '../../Store/ThemeNameStore';

const Load = () => {
  const [isLoading, setIsLoading] = useState(false);

  const loadFromLocal = () => {
    setIsLoading(true);
    const baseList = localStorage.getItem('baseColorList');
    const allColorList = localStorage.getItem('allColorsList');
    const cards = localStorage.getItem('cardSettings');
    const themeName = localStorage.getItem('themeName');
    themeNameStore.changeName = themeName;
    console.log(themeName);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    // 저장하는 코드
  };

  return (
    <Wrapper id='save' last>
      <SaveExplain>
        <p>저장한 설정을 가져오시겠습니까??</p>
      </SaveExplain>
      <SavingButton
        onClick={loadFromLocal}
        className={`${!isLoading && 'saving'}`}
      >
        {isLoading ? (
          <Loading>
            <VscLoading />
          </Loading>
        ) : (
          <p>가져오기</p>
        )}
      </SavingButton>
    </Wrapper>
  );
};

export default Load;
