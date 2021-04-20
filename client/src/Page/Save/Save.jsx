import React, { useState } from 'react';
import { VscLoading } from 'react-icons/vsc';

import { Wrapper, SaveExplain } from '../../Components/Wrapper';
import { Loading, SavingButton } from './Save.styles';

import { baseColorListStore } from '../../Store/BaseColorStore';
import { cardColorStore } from '../../Store/CardColorStore';
import { colorChipListStore } from '../../Store/ColorListStore';
import { themeNameStore } from '../../Store/ThemeNameStore';
import { typoColorStore } from '../../Store/TypoStore';

const Save = () => {
  const [isLoading, setIsLoading] = useState(false);

  const saveInLocal = () => {
    setIsLoading(true);

    themeNameStore.saveName();
    colorChipListStore.saveList();
    baseColorListStore.saveList();
    typoColorStore.saveList();
    cardColorStore.saveOptions();

    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  };

  return (
    <Wrapper id='save' last>
      <SaveExplain>
        <p>저장하시겠습니까?</p>
        <p>설정한 모든 옵션을 로컬스토리지에 저장합니다.</p>
        <p>다음 접속 시, 저장된 옵션을 불러옵니다.</p>
        <div className='ex'>
          <p>저장에서 제외됨:</p>
          <ul>
            <li>Mixin</li>
          </ul>
        </div>
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
