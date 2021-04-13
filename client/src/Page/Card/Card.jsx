import React, { useState, Suspense } from 'react';
import { BiPalette, BiWorld, BiCodeAlt } from 'react-icons/bi';

import { HeadingRow } from '../../Components/Row';
import { Wrapper } from '../../Components/Wrapper';
import { SmallButton } from '../../Components/Button';
import CardModulesList from './Section/CardModulesList';
import useIsOpen from '../../Hook/useIsOpen';
const SetColorsList = React.lazy(() => import('./Section/SetColorsList'));
const ViewCode = React.lazy(() => import('../../Components/ViewCode'));

const Card = () => {
  const [language, setLanguage] = useState(true);
  const [isCodeOpen, setIsCodeOpen] = useIsOpen();
  const [isOpen, setIsOpen] = useIsOpen();

  const changeLanguage = () => {
    setLanguage(!language);
  };

  return (
    <Wrapper id='cards'>
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
      <Suspense fallback={<div>...loading..</div>}>
        {isCodeOpen && <ViewCode card />}
      </Suspense>
      <Suspense fallback={<div>...loading...</div>}>
        {isOpen && <SetColorsList isOpen={isOpen} />}
      </Suspense>
      <CardModulesList language={language} />
    </Wrapper>
  );
};

export default Card;
