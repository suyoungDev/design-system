import React, { useState } from 'react';
import { BiPalette, BiWorld, BiCodeAlt } from 'react-icons/bi';

import { HeadingRow } from '../../Components/Row';
import { Wrapper } from '../../Components/Wrapper';
import { SmallButton } from '../../Components/Button';
import SetColorsList from './Section/SetColorsList';
import CardModulesList from './Section/CardModulesList';
import useIsOpen from '../../Hook/useIsOpen';
import ViewCode from '../../Components/ViewCode';

const Card = () => {
  const [language, setLanguage] = useState(true);
  const [isCodeOpen, setIsCodeOpen] = useIsOpen();
  const [isOpen, setIsOpen] = useIsOpen();

  const changeLanguage = () => {
    setLanguage(!language);
  };

  return (
    <Wrapper>
      <HeadingRow>
        <h2>Cards</h2>
        <div>
          <SmallButton narrow onClick={setIsCodeOpen}>
            <BiCodeAlt />
          </SmallButton>
          <SmallButton narrow onClick={changeLanguage}>
            <BiWorld />
          </SmallButton>
          <SmallButton narrow onClick={setIsOpen}>
            <BiPalette />
          </SmallButton>
        </div>
      </HeadingRow>
      <ViewCode isOpen={isCodeOpen} card />
      <SetColorsList isOpen={isOpen} />
      <CardModulesList language={language} />
    </Wrapper>
  );
};

export default Card;
